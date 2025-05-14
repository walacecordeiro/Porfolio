const GITHUB_API_URL = "https://api.github.com";
const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const USER_NAME = process.env.NEXT_PUBLIC_GITHUB_USER;

// Função para buscar meus dados
export const fetchUserProfile = async () => {
  const response = await fetch(`${GITHUB_API_URL}/users/${USER_NAME}`, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });
  if (!response.ok) throw new Error("Erro ao buscar perfil do GitHub");
  return await response.json();
};

// Requisição para buscar e listar repositórios
export const fetchUserRepos = async () => {
  const response = await fetch(`${GITHUB_API_URL}/users/${USER_NAME}/repos`, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });
  if (!response.ok) throw new Error("Erro ao buscar repositórios do GitHub");

  const data = await response.json();

  // Filtra os repositórios como desejar
  const filters = data
    .filter(
      (repo) =>
        (repo.description != null) &
        (repo.private != true) &
        (repo.name != `${USER_NAME}`)
    )
    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)); // Organiza por ordem de push

  return await filters;
};

// Requisição para detalhes do repositório, usado na rota dinâmica, necessário todos ao mesmo tempo.
export const fetchAllContentRepo = async (projectRepoName) => {
  // Conteúdo overview do repositório
  const infoRepo = await fetchInfoRepo(projectRepoName);

  // Arquivos internos do repositório
  const files = await fetchInternFilesRepo(projectRepoName);

  // Conteúdo do README.md do repositório
  const endpointReadme = await files
    .filter((prop) => prop.name.toLowerCase() == "readme.md")
    .map((prop) => prop.download_url);

  let readmeContent = null;
  if (endpointReadme) {
    readmeContent = await fetchReadmeRepo(endpointReadme, projectRepoName);
  }

  let blobImageSha = null;
  const endpointImagePreview = await files.find(
    (file) => file.name.toLowerCase() === "readme.md"
  );

  if (endpointImagePreview) {
    blobImageSha = await fetchImagePreviewReadme(
      projectRepoName,
      endpointImagePreview.sha
    );
    console.log(endpointImagePreview);
  }

  // console.log(await endpointImagePreview);

  // Retorno de tudo
  const data = {
    infoRepo,
    internFiles: files,
    readmeContent,
    blobImageSha,
  };

  return data;
};

// Função de requisição que depende da fetchAllContentRepo()
const fetchInfoRepo = async (reponame) => {
  const response = await fetch(
    `${GITHUB_API_URL}/repos/${USER_NAME}/${reponame}`,
    {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    }
  );

  if (!response.ok) throw new Error("Erro ao buscar conteúdo do projeto");

  return await response.json();
};

const fetchImagePreviewReadme = async (reponame, file_sha) => {
  const teste = `https://raw.githubusercontent.com/${USER_NAME}/${reponame}/main/.github/preview.png
  `;
  const response = await fetch(
    `${GITHUB_API_URL}/repos/${USER_NAME}/${reponame}/git/blobs/${file_sha}`,
    {
      headers: {
        owner: `${USER_NAME}`,
        repo: `${reponame}`,
        file_sha: `${file_sha}`,
        Authorization: `token ${TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!response.ok) throw new Error("Erro ao buscar imagem de preview");

  return await response.json();
};

// Função de requisição que depende da fetchAllContentRepo()
const fetchInternFilesRepo = async (reponame) => {
  const response = await fetch(
    `${GITHUB_API_URL}/repos/${USER_NAME}/${reponame}/contents/`,
    {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    }
  );

  if (!response.ok) throw new Error("Erro ao buscar conteúdo do projeto");

  return await response.json();
};

// Função de requisição que depende da fetchAllContentRepo()
const fetchReadmeRepo = async (endpointReadme, reponame) => {
  const repoReadme = await fetch(endpointReadme, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });
  if (!repoReadme.ok)
    throw new Error("Erro ao buscar README.md do repositório");

  const markdown = await repoReadme.text();

  const resHtml = await fetch("https://api.github.com/markdown", {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({
      text: markdown,
      mode: "gfm",
      context: `${USER_NAME}/${reponame}"`,
    }),
  });

  if (!resHtml.ok) throw new Error("Erro ao converter Markdown");

  const html = await resHtml.text();

  return html;
};
