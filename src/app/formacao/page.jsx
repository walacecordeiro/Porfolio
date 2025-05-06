import Card from "@/components/_components/Card";
import { SectionSticky } from "@/components/_components/SectionSticky";
import { data } from "./data";

export default async function formationPage() {
  return (
    <SectionSticky title="Formação" className="lg:pt-14">
      <ul className="group/list">
        {data
          .filter((formation) => formation.level === "formação")
          .map((formation) => (
            <Card
              key={formation.id}
              href=""
              innerDate={formation.innerDate}
              innerTitle={formation.innerTitle}
              innerSubTitle={formation.innerSubTitle}
              innerDescription={formation.innerDescription}
              tags={formation.tags}
            />
          ))}
        <SectionSticky title="Cursos Complementares">
          {data
            .filter((formation) => formation.level === "curso")
            .map((formation) => (
              <Card
                key={formation.id}
                href=""
                innerDate={formation.innerDate}
                innerTitle={formation.innerTitle}
                innerSubTitle={formation.innerSubTitle}
                innerDescription={formation.innerDescription}
                tags={formation.tags}
              />
            ))}
        </SectionSticky>
        <SectionSticky title="Idiomas">
          {data
            .filter((formation) => formation.level === "idioma")
            .map((formation) => (
              <Card
                key={formation.id}
                href=""
                innerDate={formation.innerDate}
                innerTitle={formation.innerTitle}
                innerSubTitle={formation.innerSubTitle}
                innerDescription={formation.innerDescription}
                tags={formation.tags}
              />
            ))}
        </SectionSticky>
      </ul>
    </SectionSticky>
  );
}
