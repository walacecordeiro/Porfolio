import { Inter } from "next/font/google";
import "./globals.css";
import MouseMove from "@/components/_components/MouseMove";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 title: "Walace Cordeiro dos Santos",
 description: "Portfólio contemponâneo",
};

export default function RootLayout({ children }) {
 return (
  <html lang="pt-br">
   <body className={`${inter.className} bg-[#0F172A] overflow-hidden`}>
    <MouseMove />
    {children}
   </body>
  </html>
 );
}
