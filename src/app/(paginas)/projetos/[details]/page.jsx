import { fetchReadmeRepo } from "@/services/github";
import { notFound } from "next/navigation";
import { SectionSticky } from "@/components/_components/SectionSticky";

export default async function Page({ params }) {
  let README;

  try {
    README = await fetchReadmeRepo(params.details);
  } catch (error) {
    notFound();
  }

  console.log(README);

  return (
    <SectionSticky title="Teste" titleStickyOnMobile="Teste" normalCase>
      <div
        className="markdown-body p-6"
        dangerouslySetInnerHTML={{ __html: README }}
      />
    </SectionSticky>
  );
}
