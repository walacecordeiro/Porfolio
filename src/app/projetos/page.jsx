import { SectionSticky } from "@/components/_components/SectionSticky";
import Card from "../../components/_components/Card";
import { data } from "./data";
import TextLink from "@/components/_components/TextLink";
import { GoProjectSymlink } from "react-icons/go";
import { fetchUserRepos } from "@/services/github";

export default async function ProjectsPage() {
  const profileRepos = await fetchUserRepos(
    process.env.NEXT_PUBLIC_GITHUB_USER
  );
  
  const filter = profileRepos.filter(repo => repo.description != null & repo.visibility == "public")
  console.log(filter);

  return (
    <SectionSticky title="Projetos em Destaque" className="lg:pt-14">
      <ul className="group/list">
        {profileRepos
          .filter((repo) => repo.description != null & repo.private != true)
          .map((repo) => (
            <Card
              key={repo.id}
              href={repo.html_url}
              innerTitle={repo.full_name}
              innerDescription={repo.description}
              tags={repo.topics}
            />
          ))}
        <SectionSticky title="Projetos">
          {profileRepos
            .filter((repo) => repo.highlight === false)
            .map((repo) => (
              <Card
                key={repo.id}
                href={repo.html_url}
                innerTitle={repo.full_name}
                innerDescription={repo.description}
                tags={repo.topics}
              />
            ))}
        </SectionSticky>
      </ul>
      <TextLink innerText="Ver todos os projetos">
        <GoProjectSymlink className="inline-block h-4 w-4 shrink-0 -translate-y-px transition-all group-hover:translate-x-2 group-focus-visible:translate-x-2" />
      </TextLink>
    </SectionSticky>
  );
}
