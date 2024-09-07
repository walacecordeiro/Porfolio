import Image from "next/image";
import Link from "next/link";
import { MdOutlineReadMore } from "react-icons/md";
import Tag from "./tag";

export default function Card({
 href,
 innerImage,
 innerDate,
 innerTitle,
 innerSubTitle,
 innerDescription,
 tags,
}) {
 const previewDescription = targetDescription(innerDescription, 120);

 function targetDescription(text, maxLength) {
  if (text.length > maxLength) {
   return text.substring(0, maxLength) + "...";
  } else {
   return text;
  }
 }

 return (
  <li className="mb-12">
   <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

    {innerDate && (
     <div className="z-10 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
      {innerDate}
     </div>
    )}

    <div className="z-10 sm:order-2 sm:col-span-6">
     <Link
      className={`${
       href == "" && "cursor-default"
      } inline-flex items-baseline font-medium leading-tight text-slate-200 transition-all hover:text-teal-300 focus-visible:text-teal-300  group/link text-base`}
      href={href}
      scroll={false}
     >
      <div className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></div>
      <span>
       {innerTitle}
       {href != "" && (
        <MdOutlineReadMore className="inline-block h-auto w-6 shrink-0 transition-all group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 ml-1 translate-y-px lg:animate-none" />
       )}
       {innerSubTitle && <p className="text-slate-500">{innerSubTitle}</p>}
      </span>
     </Link>
     <p className="mt-2 text-sm leading-normal">{previewDescription}</p>
     {tags && (
      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
       {tags.map((tag, index) => (
        <Tag key={index} innerText={tag} />
       ))}
      </ul>
     )}
    </div>

    {innerImage && (
     <Link href={href} className="relative sm:order-1 sm:col-span-2 sm:translate-y-1">
      <Image
       src={innerImage}
       width={500}
       height={500}
       alt="Pequena imagem do projeto"
       className="relative rounded border-2 border-slate-200/10 transition-all group-hover:border-slate-200/30"
      />
      <span className="lg:hidden text-xs absolute bottom-2 right-2 bg-black/60 rounded p-2">Toque para ver mais</span>
     </Link>
    )}
   </div>
  </li>
 );
}
