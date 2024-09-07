"use client";

import Image from "next/image";
import { data } from "../data";
import { useRouter } from "next/navigation";

import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function Page({ params }) {
 const router = useRouter();
 const project = data.find((project) => project.href.includes(params.details));

 if (!data.some((item) => item.href.includes(params.details))) {
  router.push("/404");
  return null;
 }

 return (
  <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
   <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 className="text-sm font-bold tracking-widest text-slate-200 lg:sr-only">
     {project && project.innerTitle}
    </h2>
   </div>
   <Carousel>
    <CarouselContent>
     {project.images.map((image) => (
      <CarouselItem key={image} className="flex basis-5/6 lg:basis-full">
       <Image
        priority
        width={800}
        height={800}
        src={image}
        alt="Imagem do projeto"
        className="rounded border-2 border-slate-200/30 transition-all group-hover:border-slate-200/30"
       />
      </CarouselItem>
     ))}
    </CarouselContent>
    <CarouselPrevious className="left-2 text-primary bg-black/60 transition-all lg:-left-12 lg:grid lg:hover:scale-125" />
    <CarouselNext className="right-2 text-primary bg-black/60  transition-all lg:-right-12 lg:grid lg:hover:scale-125" />
   </Carousel>
   <h2 className="hidden mt-3 text-md font-medium tracking-tight text-slate-200 sm:text-xl lg:block">
    {project.innerTitle}
   </h2>
   <p className="mt-2 text-sm leading-normal">{project.innerDescription}</p>
  </section>
 );
}
