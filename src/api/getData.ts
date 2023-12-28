
export const getData = async (username : string) => {
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    alert("Usuário nao encontrado");
  }
};
