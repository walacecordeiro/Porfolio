"use client";

import Link from "next/link";

export default function Navigation() {
 return (
  <nav class="nav hidden lg:block" aria-label="In-page jump links">
   <ul class="mt-16 w-max">
    <li>
     <Link class="group flex items-center py-3" href="#sobre">
      <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
      <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
       Sobre
      </span>
     </Link>
    </li>
    <li>
     <Link class="group flex items-center py-3" href="#experiencia">
      <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
      <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
       Experiência
      </span>
     </Link>
    </li>
    <li>
     <Link class="group flex items-center py-3 " href="#projetos">
      <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
      <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
       Projetos
      </span>
     </Link>
    </li>
   </ul>
  </nav>
 );
}
