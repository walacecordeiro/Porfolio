"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import Form from "../Form";
import Link from "next/link";
import MouseMove from "../MouseMove";
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

    <li className="self-center lg:self-start">
     <Sheet>
      <SheetTrigger className="mt-8">
       <div>
        <span className="before:block before:absolute before:-inset-0 before:-skew-x-12 before:rounded-sm before:opacity-0 before:hover:opacity-100 before:border before:border-primary relative inline-block before:transition-all before:hover:translate-x-1 before:hover:translate-y-1">
         <div className="bg-black/50 text-primary rounded-sm py-4 px-4 lg:px-12 -skew-x-12 transition-all hover:bg-black hover:-translate-x-1 hover:-translate-y-1">
          Vamos conversar?
         </div>
        </span>
       </div>
      </SheetTrigger>
      <SheetContent side="bottom" className="flex items-center h-fit lg:h-screen">
       <div className="flex flex-col w-[95%] h-fit lg:w-2/5 mx-auto">
        <MouseMove />

        <SheetHeader>
         <SheetTitle className="self-start">Envie um e-mail</SheetTitle>
        </SheetHeader>

        <Form />
       </div>
      </SheetContent>
     </Sheet>
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
