import Card from "@/components/_components/Card";
import { SectionSticky } from "@/components/_components/SectionSticky";

export default function ExperiencePage() {
 return (
  <SectionSticky titleStickyOnMobile="Experiência">
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
  </SectionSticky>
 );
}
