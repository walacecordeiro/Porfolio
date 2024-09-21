import { Paragraph } from "@/components/_components/Paragraph";
import { SectionSticky } from "@/components/_components/SectionSticky";
import Image from "next/image";

export default function AboutPage() {
 return (
  <SectionSticky titleStickyOnMobile="Sobre">
   <div className="flex flex-col-reverse gap-4 items-end mb-4 sm:flex-row">
    <Image
     src="/images/ft-perfil.png"
     width={154}
     height={0}
     alt="Pequena imagem do projeto"
     className="h-fit rounded-full"
    />
    <Paragraph
     text="Olá, meu nome é Walace Cordeiro dos Santos. Mergulhei no mundo da tecnologia em 2022, mais
      especificamente no mundo da programação. Hoje em dia atuo mais como desenvolvedor Front-end e
      uso principalmente React e Next.js."
    />
   </div>

   <Paragraph
    className="pb-3"
    text="Entretanto, realizei um curso profissionalizante da Rocketseat chamado Explorer, que é
     orientado a formar desenvolvedores web Fullstack, o qual envolveu Node.js para trabalhar no
     back-end. E mesmo com o término do curso, continuo me aprofundando, pois está claro para mim
     que o perfil de desenvolvedor é o que eu tenho orgulho em apresentar."
   />

   <Paragraph text="Em 2024, iniciei minha graduação em Desenvolvimento de Aplicativos Móveis. Nova etapa da minha trajetória que começa com um forte conhecimento em programação, principalmente em Front-end, em stacks como: Javascript, Typescript, SASS, Tailwind, React.js e Next.js, que são minhas favoritas." />
  </SectionSticky>
 );
}
