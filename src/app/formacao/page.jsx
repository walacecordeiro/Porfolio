import Card from "@/components/_components/Card";

export default function formationPage() {
 return (
  <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
   <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
     Formação
    </h2>
   </div>
   <div>
    <ol className="group/list">
     <Card
      href=""
      innerDate="12/11/2020 atual"
      innerTitle="Formação 1 exemplo"
      innerSubTitle="Instituição aqui"
      innerDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus facilis optio, accusamus doloremque saepe amet illo excepturi maiores harum. Ipsa ut ea sunt quibusdam, perferendis ratione aperiam quis accusamus tempora!"
      tags={["comunicação", "atendimento ao cliente", "colaboração"]}
     />
     <Card
      href=""
      innerDate="12/11/2020 atual"
      innerTitle="Formação 2 exemplo"
      innerSubTitle="Instituição aqui"
      innerDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus facilis optio, accusamus doloremque saepe amet illo excepturi maiores harum. Ipsa ut ea sunt quibusdam, perferendis ratione aperiam quis accusamus tempora!"
      tags={["comunicação", "atendimento ao cliente", "colaboração"]}
     />
    </ol>
   </div>
  </section>
 );
}
