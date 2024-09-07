import { GoProjectSymlink } from "react-icons/go";
import Link from "next/link";

export default function TextLink({ innerText, url = "#", icon, className }) {
 return (
  <div className="mt-12">
   <Link
    className="inline-flex items-center font-medium leading-tight text-slate-200 group"
    href={url}
   >
    <span className={`flex gap-1 justify-center items-center ${className}`}>
     <span className="border-b border-transparent pb-px group-hover:transition-all group-hover:border-primary">
      {innerText}
     </span>
     <GoProjectSymlink className="inline-block h-4 w-4 shrink-0 -translate-y-px transition-all group-hover:translate-x-2 group-focus-visible:translate-x-2" />
    </span>
   </Link>
  </div>
 );
}
