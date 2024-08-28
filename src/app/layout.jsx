import { Inter } from "next/font/google";
import "./globals.css";
import MouseMove from "@/components/_components/MouseMove";
import Link from "next/link";
import Navigation from "@/components/_components/Navigation";
import { Toaster } from "@/components/ui/toaster";
import MobileNavigation from "@/components/_components/MobileNavigation";

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
     <h2 className="mt-3 text-md font-medium tracking-tight text-slate-200 sm:text-xl">
      Mobile Developer | Front-end Developer
     </h2>
     <p className="mt-4 text-sm max-w-sm leading-normal sm:text-base">
      Transformar ideias em código para entregar a melhor experiência ao mundo.
     </p>

     <Navigation displayMobile="hidden" displayDesktop="block" />
     <MobileNavigation />
    </header>

    <div className="pt-10 lg:pt-24">{children}</div>

    <Toaster />
   </body>
  </html>
 );
}
