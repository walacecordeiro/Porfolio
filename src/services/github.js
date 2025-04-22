const GITHUB_API_URL = 'https://api.github.com';
const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

// Função para buscar meus dados
export const fetchUserProfile = async (username) => {
  const response = await fetch(`${GITHUB_API_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${TOKEN}`
    }
  });
  if (!response.ok) throw new Error('Erro ao buscar perfil do GitHub');
  return await response.json();
};

// Função para buscar repositórios
export const fetchUserRepos = async (username) => {
  const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos`, {
    headers: {
      Authorization: `token ${TOKEN}`
    }
  });
  if (!response.ok) throw new Error('Erro ao buscar repositórios do GitHub');
  return await response.json();
};