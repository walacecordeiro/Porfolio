"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import anime from "animejs/lib/anime.es.js";

export default function Home() {
 const gridElements = Array.from({ length: 60 }, (_, index) => (
  <div key={index} className="el w-8 h-8 rounded-sm text-white bg-blue-600" />
 ));

 useEffect(() => {
  anime({
   targets: ".wrapper .el",
   scale: [
    { value: 0.1, easing: "easeOutSine", duration: 500 },
    { value: 1, easing: "easeInOutQuad", duration: 1200 },
   ],
   delay: anime.stagger(200, { grid: [12, 5], from: "center" }),
   loop: true,
  });
 }, []);

 return (
  <main>
   <Button>Botão do Shadcn/UI</Button>
   <motion.div
    className="flex items-center text-center p-10 w-64 h-64 text-white bg-red-500 rounded-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
   >
    Exemplo do Framer Motion
   </motion.div>

   {/* Aqui o exemplo do Animejs */}
   <div className="wrapper grid grid-cols-12 grid-rows-5 place-items-center gap-0">{gridElements}</div>
  </main>
 );
}
