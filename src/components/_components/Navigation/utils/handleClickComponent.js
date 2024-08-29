export function handleClickComponent(componentID) {
 const componentTarget = document.getElementById(componentID);

 // Se o elemento for encontrado, simula um clique nele
 if (componentTarget) {
  componentTarget.click();
 }
}
