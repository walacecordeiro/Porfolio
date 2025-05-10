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

// Função para buscar repositórios
export const fetchUserRepos = async () => {
  const response = await fetch(`${GITHUB_API_URL}/users/${USER_NAME}/repos`, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });
  if (!response.ok)
    throw new console.log("Erro ao buscar repositórios do GitHub");

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

export const fetchReadmeRepo = async (reponame) => {
  const response = await fetch(
    `https://raw.githubusercontent.com/${USER_NAME}/${reponame}/main/README.md`,
    {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    }
  );
  if (!response.ok) throw new Error("Erro ao buscar README.md do repositório");
  const markdown = await response.text();

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
