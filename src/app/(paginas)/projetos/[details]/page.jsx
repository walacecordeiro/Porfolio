import { fetchReadmeRepo } from "@/services/github";
import { notFound } from "next/navigation";
import { SectionSticky } from "@/components/_components/SectionSticky";
import { removeCaracteres } from "@/app/utils/shortFunctions";

export default async function Page({ params }) {
  let README;

  try {
    README = await fetchReadmeRepo(params.details);
  } catch {
    notFound();
  }

  return (
    <SectionSticky
      title={removeCaracteres(params.details, ["_", "-", "."])}
      className="w-full"
    >
      <div className="group relative transition-all lg:opacity-50 lg:hover:!opacity-100 lg:hover:!scale-[1.03] lg:my-16">
        <div className="absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-lg transition-all motion-reduce:transition-none lg:-inset-x-11 lg:block lg:group-hover:bg-background/50 lg:group-hover:border-x-2 lg:group-hover:border-primary/10"></div>
        <div
          className="markdown-body bg-transparent text-sm text-black_white lg:text-base"
          dangerouslySetInnerHTML={{ __html: README }}
        />
      </div>
    </SectionSticky>
  );
}
