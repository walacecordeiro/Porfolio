import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 title: "Walace Cordeiro dos Santos",
 description: "Portfólio contemponâneo",
};

export default function RootLayout({ children }) {
 // Seleciona a div que você quer que acompanhe o mouse
 const div = document.querySelector(".minha-div");

 // Adiciona um listener para o evento mousemove
 document.addEventListener("mousemove", (event) => {
  // Atualiza a posição da div para as coordenadas do mouse
  div.style.left = event.clientX + "px";
  div.style.top = event.clientY + "px";
 });

 return (
  <html lang="pt-br">
   <body className={`${inter.className} bg-red-500`}>{children}</body>
  </html>
 );
}
