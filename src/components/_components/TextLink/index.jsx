import Link from "next/link";

export default function TextLink({ innerText, url = "#", className, children }) {
 return (
  <div className="my-12">
   <Link
    className="inline-flex items-center font-medium leading-tight text-slate-200 group"
    href={url}
   >
    <span className={`flex gap-1 justify-center items-center ${className}`}>
     <span className="border-b border-transparent pb-px group-hover:transition-all group-hover:border-primary">
      {innerText}
     </span>
     {children} {/** children pensado apenas para icone */}
    </span>
   </Link>
  </div>
 );
}
