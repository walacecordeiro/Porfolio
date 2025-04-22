import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "html5",
  "css3",
  "tailwindcss",
  "sass",
  "javascript",
  "typescript",
  "python",
  "django",
  "react",
  "nextdotjs",
  "git",
  "github",
  "figma",
];
// const slugs = [
//   "typescript",
//   "javascript",
//   "dart",
//   "java",
//   "react",
//   "flutter",
//   "android",
//   "html5",
//   "css3",
//   "nodedotjs",
//   "express",
//   "nextdotjs",
//   "prisma",
//   "amazonaws",
//   "postgresql",
//   "firebase",
//   "nginx",
//   "vercel",
//   "testinglibrary",
//   "jest",
//   "cypress",
//   "docker",
//   "git",
//   "jira",
//   "github",
//   "gitlab",
//   "visualstudiocode",
//   "androidstudio",
//   "sonarqube",
//   "figma",
// ];

export function IconCloudGlobe() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return <IconCloud images={images} />;
}
