import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "html5",
  "css3",
  "tailwindcss",
  "sass",
  "javascript",
  "typescript",
  "nextdotjs",
  "dotnet",
  "blazor",
  "react",
  "git",
  "github",
  "figma",
];

export function IconCloudGlobe() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex w-fit h-auto items-center justify-center overflow-hidden rounded-full bg-foreground/10 shadow-xl shadow-black/10">
      <IconCloud images={images} />
    </div>
  );
}
