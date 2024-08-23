import { Inter } from "next/font/google";
import "./globals.css";
import MouseMove from "@/components/_components/MouseMove";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navigation from "@/components/_components/Navigation";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 title: "Walace Cordeiro dos Santos",
 description: "Portfólio contemponâneo",
};

export default function RootLayout({ children }) {
 return (
  <html lang="pt-br">
   <body
    className={`${inter.className} dark w-[88%] overflow-y-scroll mx-auto py-12 bg-background text-slate-400 lg:grid lg:grid-cols-2 lg:py-0 lg:w-4/5`}
   >
    <MouseMove />

    <header className="lg:sticky lg:top-0 lg:h-screen lg:py-24">
     <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
      <Link href="/">Walace Cordeiro</Link>
     </h1>
     <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
      UX/UI Designer | Front-end Developer
     </h2>
     <p className="mt-4 max-w-xs leading-normal">
      Criando interfaces que encantam <br />e experiências que inspiram.
     </p>

     <Navigation />

     <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
      <li className=" text-xs shrink-0">
       <Link
        className="block hover:text-slate-200"
        href="https://github.com/walacecordeiro"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="GitHub (vai abrir em uma nova aba)"
        title="GitHub"
       >
        <span className="sr-only">GitHub</span>
        <FaGithub className="w-6 h-6" />
       </Link>
      </li>
      <li className=" text-xs shrink-0">
       <Link
        className="block hover:text-slate-200"
        href="https://www.linkedin.com/in/walace-cordeiro-dos-santos/"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn (vai abrir em uma nova aba)"
        title="LinkedIn"
       >
        <span className="sr-only">LinkedIn</span>
        <FaLinkedin className="w-6 h-6" />
       </Link>
      </li>
     </ul>
    </header>

    <div className="pt-24 lg:py-24">{children}</div>

    <Toaster />
   </body>
  </html>
 );
}
