import Link from "next/link";
import Navigation from "../Navigation";
import MobileNavigation from "../MobileNavigation";
import { Paragraph } from "../Paragraph";

export default function Header() {
 return (
  <header className="lg:sticky lg:top-0 lg:h-screen lg:py-24">
   <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
    <Link href="/">Walace Cordeiro</Link>
   </h1>
   <h2 className="mt-3 text-md font-medium tracking-tight text-slate-200 sm:text-xl">
    Mobile Developer | Front-end Developer
   </h2>
   <Paragraph
    className="mt-4 text-sm max-w-sm leading-normal sm:text-base"
    text="Transformar ideias em código para entregar a melhor experiência ao mundo."
   />

   <Navigation displayMobile="hidden" displayDesktop="block" />
   <MobileNavigation />
  </header>
 );
}
