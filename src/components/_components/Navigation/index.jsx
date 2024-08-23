"use client";

import {
 Drawer,
 DrawerClose,
 DrawerContent,
 DrawerFooter,
 DrawerHeader,
 DrawerTitle,
 DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import Form from "../Form";
import MouseMove from "../MouseMove";
import ItemListLink from "./_components/itemListLink";

export default function Navigation() {

 return (
  <nav className="nav hidden lg:block" aria-label="In-page jump links">
   <ul className="mt-4 w-max">
    <ItemListLink href="/" innerText="Início"/>
    <ItemListLink href="/experiencia" innerText="Esperiência"/>
    <ItemListLink href="/projetos" innerText="Projetos"/>
    <ItemListLink href="/sobre" innerText="Sobre"/>

    <li className="mt-4">
     <Drawer>
      <span className="before:block before:absolute before:-inset-0 before:-skew-x-12 before:rounded-sm before:opacity-0 before:hover:opacity-100 before:border before:border-primary relative inline-block before:transition-all before:hover:translate-x-1 before:hover:translate-y-1">
       <DrawerTrigger className="bg-black/50 text-primary rounded-sm py-4 px-12 -skew-x-12 transition-all hover:bg-black hover:-translate-x-1 hover:-translate-y-1">
        Vamos conversar?
       </DrawerTrigger>
      </span>
      <DrawerContent className="flex justify-center rounded-none h-screen cursor-grab active:cursor-grabbing">
       <MouseMove />
       <div className="flex flex-col w-[95%] lg:w-2/4 mx-auto">
        <DrawerHeader>
         <DrawerTitle>Envie um e-mail</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
         <Form />
         <DrawerClose id="closeForm" className="absolute top-3 right-3 lg:top-6 lg:right-6">
          <Button variant="destructive">Fechar</Button>
         </DrawerClose>
        </DrawerFooter>
       </div>
      </DrawerContent>
     </Drawer>
    </li>
   </ul>
  </nav>
 );
}
