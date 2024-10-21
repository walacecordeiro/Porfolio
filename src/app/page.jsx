import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
 "html5",
 "css3",
 "tailwindcss",
 "sass",
 "styledcomponents",
 "typescript",
 "javascript",
 "react",
 "nodedotjs",
 "nextdotjs",
 "shadcnui",
 "vercel",
 "git",
 "github",

 "visualstudiocode",
 "googleads",
 "canva",
 "figma",

 // "gitlab",
 // "express",
 // "dart",
 // "java",
 // "flutter",
 // "android",
 // "prisma",
 // "amazonaws",
 // "postgresql",
 // "firebase",
 // "nginx",
 // "testinglibrary",
 // "jest",
 // "cypress",
 // "docker",
 // "jira",
 // "androidstudio",
 // "sonarqube",
];

export default function Home() {
 return (
  <main>
   <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-full bg-white/5 p-5">
    <IconCloud iconSlugs={slugs} />
   </div>
  </main>
 );
}
