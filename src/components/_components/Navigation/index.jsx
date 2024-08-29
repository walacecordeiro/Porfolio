"use client";

import Link from "next/link";
import ItemListLink from "./_components/itemListLink";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { handleCloseSheetOnClick } from "./utils/handleCloseSheetOnClick";

export default function Navigation({ displayMobile, displayDesktop }) {
 handleCloseSheetOnClick();

 return (
  <nav className={`${displayMobile} lg:${displayDesktop}`} aria-label="In-page jump links">
   <ul className="flex flex-col mt-4 w-full">
    <ItemListLink href="/" innerText="Início" />
    <ItemListLink href="/formacao" innerText="Formação" />
    {/* <ItemListLink href="/experiencia" innerText="Esperiência" /> */}
    <ItemListLink href="/projetos" innerText="Projetos" />
    <ItemListLink href="/sobre" innerText="Sobre" />

    <li className="self-center lg:self-start mt-8">
     <Link scroll={false} href="/contato" onClick={handleCloseSheetOnClick}>
      <span className="before:block before:absolute before:-inset-0 before:-skew-x-12 before:rounded-sm before:opacity-0 before:hover:opacity-100 before:border before:border-primary relative inline-block before:transition-all before:hover:translate-x-1 before:hover:translate-y-1">
       <div className="bg-black/50 text-primary rounded-sm py-4 px-4 lg:px-12 -skew-x-12 transition-all hover:bg-black hover:-translate-x-1 hover:-translate-y-1">
        Vamos conversar?
       </div>
      </span>
     </Link>
    </li>

    <ul
     className="flex mt-8 gap-5 justify-center lg:justify-normal lg:ml-1"
     aria-label="Social media"
    >
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
   </ul>
  </nav>
 );
}
