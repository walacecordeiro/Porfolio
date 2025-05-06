import { SectionSticky } from "@/components/_components/SectionSticky";
import Card from "../../components/_components/Card";
import { data } from "./data";
import TextLink from "@/components/_components/TextLink";
import { GoProjectSymlink } from "react-icons/go";

export default function ProjectsPage() {
 return (
  <SectionSticky title="Projetos em Destaque" className="lg:pt-14">
   <ul className="group/list">
    {data
     .filter((project) => project.highlight)
     .map((project) => (
      <Card
       key={project.id}
       href={project.href}
       innerImage={project.images[0]}
       innerTitle={project.innerTitle}
       innerDescription={project.innerDescription}
       tags={project.tags}
      />
     ))}
    <SectionSticky title="Projetos">
     {data
      .filter((project) => project.highlight === false)
      .map((project) => (
       <Card
        key={project.id}
        href={project.href}
        innerImage={project.images[0]}
        innerTitle={project.innerTitle}
        innerDescription={project.innerDescription}
        tags={project.tags}
       />
      ))}
    </SectionSticky>
   </ul>
   <TextLink innerText="Ver todos os projetos">
    <GoProjectSymlink className="inline-block h-4 w-4 shrink-0 -translate-y-px transition-all group-hover:translate-x-2 group-focus-visible:translate-x-2" />
   </TextLink>
  </SectionSticky>
 );
}
