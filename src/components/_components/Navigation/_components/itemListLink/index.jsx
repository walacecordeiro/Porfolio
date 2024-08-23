import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ItemListLink({ innerText, href }) {
 const pathName = usePathname();

 return (
  <>
   {href === "/" ? (
    <li>
     <Link className="group flex items-center py-3" href={href}>
      <span
       className={`nav-indicator mr-4 h-px w-8 bg-slate-600 group-hover:transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
        pathName === href ? "!w-16 !bg-slate-200" : ""
       }`}
      ></span>
      <span
       className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
        pathName === href ? "!text-slate-200" : ""
       }`}
      >
       {innerText}
      </span>
     </Link>
    </li>
   ) : (
    <li>
     <Link className="group flex items-center py-3" href={href}>
      <span
       className={`nav-indicator mr-4 h-px w-8 bg-slate-600 group-hover:transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
        pathName.startsWith(href) ? "!w-16 !bg-slate-200" : ""
       }`}
      ></span>
      <span
       className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
        pathName.startsWith(href) ? "!text-slate-200" : ""
       }`}
      >
       {innerText}
      </span>
     </Link>
    </li>
   )}
  </>
 );
}
