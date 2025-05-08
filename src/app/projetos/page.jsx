import { SectionSticky } from "@/components/_components/SectionSticky";
import Card from "../../components/_components/Card";
import TextLink from "@/components/_components/TextLink";
import { GoProjectSymlink } from "react-icons/go";
import { fetchUserRepos } from "@/services/github";
import { formatDate, removeCaracteres } from "../utils/shortFunctions";

export default async function ProjectsPage() {
  const profileRepos = await fetchUserRepos(
    process.env.NEXT_PUBLIC_GITHUB_USER
  );

  return (
    <SectionSticky title="Projetos públicos" className="lg:pt-14">
      <ul className="group/list">
        {profileRepos
          .filter((repo) => (repo.description != null) & (repo.private != true))
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
          .map((repo) => {
            return (
              <Card
                key={repo.id}
                href={repo.html_url}
                innerDate={formatDate(repo.pushed_at)}
                innerTitle={removeCaracteres(repo.name, ["_", "-", "."])}
                innerDescription={repo.description}
                tags={repo.topics}
              />
            );
          })}
      </ul>
      <TextLink
        innerText="Ver repositórios no GitHub"
        url={profileRepos[0].owner.html_url}
        target="blank"
      >
        <GoProjectSymlink className="inline-block h-4 w-4 shrink-0 -translate-y-px transition-all group-hover:translate-x-2 group-focus-visible:translate-x-2" />
      </TextLink>
    </SectionSticky>
  );
}
