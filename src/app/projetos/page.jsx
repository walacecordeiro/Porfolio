import Link from "next/link";
import Card from "../../components/_components/Card";
import { GoProjectSymlink } from "react-icons/go";

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
     <Card
      href="#"
      innerImage="/images/example.jpg"
      innerTitle="Primeiro Projeto Exemplo"
      innerDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci libero sint alias officiis voluptas asperiores ab quibusdam et fuga placeat accusamus dolores suscipit quam perferendis excepturi labore, tempora repellat?"
      tags={["React", "Wordpress"]}
     />
     <Card
      href="#"
      innerImage="/images/example.jpg"
      innerTitle="Segundo Projeto Exemplo"
      innerDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci libero sint alias officiis voluptas asperiores ab quibusdam et fuga placeat accusamus dolores suscipit quam perferendis excepturi labore, tempora repellat?"
      tags={["React", "Wordpress"]}
     />
    </ul>
    <div className="mt-12">
     <Link
      className="inline-flex items-center font-medium leading-tight text-slate-200 group"
      href="#"
     >
      <span>
       <span className="border-b border-transparent pb-px group-hover:transition-all group-hover:border-primary">
        Ver todos os projetos
       </span>
       <GoProjectSymlink className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-all group-hover:translate-x-2 group-focus-visible:translate-x-2" />
      </span>
     </Link>
    </div>
   </div>
  </section>
 );
}
