"use client";

import Link from "next/link";
import ItemListLink from "./_components/itemListLink";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navigation({ displayMobile, displayDesktop }) {
 return (
  <nav className={`${displayMobile} lg:${displayDesktop}`} aria-label="In-page jump links">
   <ul className="flex flex-col mt-4 w-full">
    <ItemListLink href="/" innerText="Início" />
    <ItemListLink href="/formacao" innerText="Formação" />
    {/* <ItemListLink href="/experiencia" innerText="Esperiência" /> */}
    <ItemListLink href="/projetos" innerText="Projetos" />
    <ItemListLink href="/sobre" innerText="Sobre" />
    <ItemListLink href="/contato" innerText="Contato" />

    <ul
     className="flex mt-8 gap-5 lg:ml-1"
     aria-label="Social media"
    >
     <li className="text-xs shrink-0 transition-all hover:scale-110">
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
     <li className="text-xs shrink-0 transition-all hover:scale-110">
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
   </ul>
  </nav>
 );
}
