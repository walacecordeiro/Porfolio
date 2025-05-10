import Link from "next/link";
import Tag from "../Tag/tag";
import { Paragraph } from "../Paragraph";

export default function Card({
  href,
  innerDate,
  innerTitle,
  innerSubTitle,
  innerDescription,
  tags,
}) {
  const previewDescription = targetDescription(innerDescription, 120);

  function targetDescription(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  }

  return (
    <li className="mb-12">
      {/** Componente usado nas páginas: formação e projetos */}
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:hover:!scale-110 lg:group-hover/list:opacity-50 lg:group-hover/list:scale-90">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

        {innerDate && (
          <div className="z-10 text-xs font-semibold text-slate-500 sm:col-span-2">
            {innerDate}
          </div>
        )}

        <div className="z-10 sm:order-2 sm:col-span-6">
          <Link
            className={`${
              href === "" && "cursor-default"
            } flex items-baseline font-medium leading-tight text-slate-200 transition-all hover:text-teal-300 focus-visible:text-teal-300 group/link text-base`}
            href={href}
            scroll={false}
          >
            <div className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></div>
            <span className="w-full">
              <div className={`flex items-center ${!innerSubTitle && "pb-2"}`}>
                {innerTitle}
              </div>
              {innerSubTitle && (
                <p className="text-slate-500 pb-2">{innerSubTitle}</p>
              )}
            </span>
          </Link>

          {href === "" ? (
            <Paragraph className="text-sm" text={innerDescription} />
          ) : (
            <Paragraph text={previewDescription} />
          )}

          {tags.length > 0 && (
            <ul className="mt-4 flex gap-2 flex-wrap">
              {tags.map((tag, index) => (
                <li key={index}>
                  <Tag innerText={tag} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}
