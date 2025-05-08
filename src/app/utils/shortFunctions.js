function formatDate(target) {
  const dateBR = {
    // weekday: 'long',   // dia da semana: 'long' (ex: quarta-feira), 'short' ou 'narrow'
    year: "numeric", // ano: 'numeric' (ex: 2025) ou '2-digit' (ex: 25)
    month: "long", // mês: 'numeric', '2-digit', 'long' (ex: maio), 'short', 'narrow'
    day: "numeric", // dia do mês: 'numeric' ou '2-digit'
  };
  const localDate = new Date(target).toLocaleDateString("pt-br", dateBR);

  return localDate;
}

function removeCaracteres(target, listCaracteres) {
  const list = listCaracteres;
  let removeCaracteres = target;

  list.forEach((char) => {
    removeCaracteres = removeCaracteres.split(char).join(" ");
  });

  return removeCaracteres;
}

export { formatDate, removeCaracteres };
