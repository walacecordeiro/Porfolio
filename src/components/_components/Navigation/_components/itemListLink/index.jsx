import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleClickComponent } from "../../../../../app/utils/handleClickComponent";

export default function ItemListLink({ innerText, href }) {
 const pathName = usePathname();

 const handleCloseSheet = () => {
  handleClickComponent("closeSheet");
 };

 return (
  <>
   {href === "/" ? (
    <li>
     <Link
      scroll={false}
      className="group flex items-center py-3 lg:w-fit"
      href={href}
      onClick={handleCloseSheet}
     >
      <span
       className={`nav-indicator mr-4 h-px w-8 bg-paragraph group-hover:transition-all group-hover:w-16 group-hover:bg-black_white group-focus-visible:w-16 group-focus-visible:bg-bg-primary motion-reduce:transition-none ${
        pathName === href ? "!w-16 !bg-primary" : ""
       }`}
      ></span>
      <span
       className={`nav-text text-xs font-bold uppercase tracking-widest text-paragraph group-hover:text-black_white  group-focus-visible:text-bg-primary ${
        pathName === href ? "!text-black_white" : ""
       }`}
      >
       {innerText}
      </span>
     </Link>
    </li>
   ) : (
    <li>
     <Link
      scroll={false}
      className="group flex items-center py-3 lg:w-fit"
      href={href}
      onClick={handleCloseSheet}
     >
      <span
       className={`nav-indicator mr-4 h-px w-8 bg-paragraph group-hover:transition-all group-hover:w-16 group-hover:bg-black_white group-focus-visible:w-16 group-focus-visible:bg-bg-primary motion-reduce:transition-none ${
        pathName.startsWith(href) ? "!w-16 !bg-primary" : ""
       }`}
      ></span>
      <span
       className={`nav-text text-xs font-bold uppercase tracking-widest text-paragraph group-hover:text-black_white  group-focus-visible:text-bg-primary ${
        pathName.startsWith(href) ? "!text-black_white" : ""
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
