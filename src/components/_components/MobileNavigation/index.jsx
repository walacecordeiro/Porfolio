// "use client"

import Navigation from "../Navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { RxHamburgerMenu } from "react-icons/rx";

export default function MobileNavigation() {
 return (
  <div className="z-50 fixed top-0 right-0 block lg:hidden">
   <Sheet>
    <SheetTrigger className="flex items-center justify-center h-[60px] w-[60px]">
     <span className="bg-primary/10 p-2 rounded-full">
      <RxHamburgerMenu className="w-5 h-5 text-primary" />
     </span>
    </SheetTrigger>
    <SheetContent className="w-full">
     <Navigation />
    </SheetContent>
   </Sheet>
  </div>
 );
}
