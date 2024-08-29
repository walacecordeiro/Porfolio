export const handleCloseSheetOnClick = () => {
 // Encontra o elemento alvo pelo ID
 const closeSheet = document.getElementById("closeSheet");

 // Se o elemento for encontrado, simula um clique nele
 if (closeSheet) {
  closeSheet.click();
 }
};
