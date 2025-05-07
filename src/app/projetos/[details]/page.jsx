// "use client";

// import Image from "next/image";
// import { data } from "../data";
// import { useRouter } from "next/navigation";

// import {
//  Carousel,
//  CarouselContent,
//  CarouselItem,
//  CarouselNext,
//  CarouselPrevious,
// } from "@/components/ui/carousel";
// import { SectionSticky } from "@/components/_components/SectionSticky";

// export default function Page({ params }) {
//  const router = useRouter();
//  const project = data.find((project) => project.href.includes(params.details));

//  if (!data.some((item) => item.href.includes(params.details))) {
//   router.push("/404");
//   return null;
//  }

//  return (
//   <SectionSticky titleStickyOnMobile={project && project.innerTitle} normalCase>
//    <Carousel>
//     <CarouselContent>
//      {project.images.map((image) => (
//       <CarouselItem key={image} className="flex basis-5/6 lg:basis-full">
//        <Image
//         priority
//         width={800}
//         height={800}
//         src={image}
//         alt="Imagem do projeto"
//         className="rounded border-2 border-slate-200/30 transition-all group-hover:border-slate-200/30"
//        />
//       </CarouselItem>
//      ))}
//     </CarouselContent>
//     <CarouselPrevious className="hidden text-primary bg-black/60 transition-all lg:-left-12 lg:grid lg:hover:scale-125" />
//     <CarouselNext className="hidden text-primary bg-black/60  transition-all lg:-right-12 lg:grid lg:hover:scale-125" />
//    </Carousel>
//    <h2 className="hidden mt-3 text-md font-medium tracking-tight text-slate-200 sm:text-xl lg:block">
//     {project.innerTitle}
//    </h2>
//    <p className="mt-2 text-sm leading-normal">{project.innerDescription}</p>
//   </SectionSticky>
//  );
// }
