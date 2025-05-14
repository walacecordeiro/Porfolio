import { fetchAllContentRepo } from "@/services/github";
import { notFound } from "next/navigation";
import { SectionSticky } from "@/components/_components/SectionSticky";
import { removeCaracteres } from "@/app/utils/shortFunctions";
import ButtonPrimary from "@/components/_components/ButtonPrimary";

export default async function Page({ params }) {
  let CONTENT;
  try {
    CONTENT = await fetchAllContentRepo(params.details);
  } catch (error) {
    // console.error("Erro ao buscar conteúdo: ", error);
    notFound();
  }

  return (
    <SectionSticky
      title={removeCaracteres(params.details, ["_", "-", "."])}
      className="group w-full"
    >
      <div className="relative transition-all lg:opacity-50 lg:hover:!opacity-100 lg:hover:!scale-[1.03] lg:my-16">
        <div className="absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-lg transition-all lg:-inset-x-11 lg:block lg:group-hover:bg-background/50 lg:group-hover:border-x-2 lg:group-hover:border-primary/10"></div>

        <div
          className="markdown-body bg-transparent text-sm text-black_white lg:text-base"
          dangerouslySetInnerHTML={{ __html: CONTENT.readmeContent }}
        />
      </div>
      {CONTENT.infoRepo.homepage && (
        <div className="flex gap-4 w-fit self-end justify-self-end sticky bottom-4 transition-all lg:flex-row lg:opacity-0 lg:group-hover:opacity-100 mt-5">
          <ButtonPrimary
            innerText="Demo"
            url={CONTENT.infoRepo.homepage}
            className="bg-black px-7 py-1 ring-1 ring-primary/10 hover:ring-transparent"
          />
        </div>
      )}
    </SectionSticky>
  );
}
