import { Inter } from "next/font/google";
import "./globals.css";
import MouseMove from "@/components/_components/MouseMove";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/_components/Header";

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
    <Header gitHubUserName="walacecordeiro"/>

    <div className="pt-10 lg:pt-24">{children}</div>

    <Toaster />
   </body>
  </html>
 );
}
