import TextLink from "@/components/_components/TextLink";
import Image from "next/image";

export default function NotFound() {
 return (
  <div className="flex flex-col justify-center items-center w-fit h-fit mx-auto">
   <Image
    width={500}
    height={500}
    className="w-full h-auto"
    alt="imagem de conteúdo não encontrado"
    src="/images/404.svg"
   />
   <div className="flex flex-col justify-center items-center">
    <h2>Conteúdo não encontrado</h2>
    <TextLink innerText="Voltar ao início" url="/" className="flex-row-reverse gap-4" />
   </div>
  </div>
 );
}
