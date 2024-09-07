import Card from "../../components/_components/Card";
import { data } from "./data";
import TextLink from "@/components/_components/TextLink";

export default function ProjectsPage() {
 return (
  <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
   <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
     Projetos
    </h2>
   </div>
   <div>
    <ul className="group/list">
     {data.map((project) => (
      <Card
       key={project.id}
       href={project.href}
       innerImage={project.images[0]}
       innerTitle={project.innerTitle}
       innerDescription={project.innerDescription}
       tags={project.tags}
      />
     ))}
    </ul>
    <TextLink innerText="Ver todos os projetos"/>
   </div>
  </section>
 );
}
