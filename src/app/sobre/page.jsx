import Image from "next/image";

export default function AboutPage() {
 return (
  <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
   <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Sobre</h2>
   </div>
   <div>
    <div className="flex flex-col-reverse gap-4 items-end mb-4 sm:flex-row">
     <span className="before:block h-fit w-fit before:absolute before:-inset-0 before:-skew-x-0 before:rounded-sm before:opacity-0 before:hover:opacity-100 before:border before:border-primary relative inline-block before:transition-all before:hover:translate-x-1 before:hover:translate-y-1">
      <Image
       src="/images/ft-perfil.png"
       width={800}
       height={0}
       alt="Pequena imagem do projeto"
       className="h-fit rounded-sm -skew-x-0 grayscale-0 transition-all hover:grayscale-0 hover:-translate-x-1 hover:-translate-y-1 lg:grayscale"
      />
     </span>
     <p>
      Olá, meu nome é Walace Cordeiro dos Santos. Mergulhei no mundo da tecnologia em 2022, mais
      especificamente no mundo da programação. Hoje em dia atuo mais como desenvolvedor Front-end e
      uso principalmente React e Next.js.
     </p>
    </div>

    <p className="mb-4">
     Entretanto, realizei um curso profissionalizante da Rocketseat chamado Explorer, que é
     orientado a formar desenvolvedores web Fullstack, o qual envolveu Node.js para trabalhar no
     back-end. E mesmo com o término do curso, continuo me aprofundando, pois está claro para mim
     que o perfil de desenvolvedor é o que eu tenho orgulho em apresentar.
    </p>
    <p className="mb-4">
     Em 2024, iniciei minha graduação em Desenvolvimento de Aplicativos Móveis. Nova etapa da minha
     trajetória que começa com um forte conhecimento em programação, principalmente em Front-end, em
     stacks como: Javascript, Typescript, SASS, Tailwind, React.js e Next.js, que são minhas
     favoritas.
    </p>
   </div>
  </section>
 );
}
