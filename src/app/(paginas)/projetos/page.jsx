import { SectionSticky } from "@/components/_components/SectionSticky";
import Card from "../../../components/_components/Card";
import TextLink from "@/components/_components/TextLink";
import { GoProjectSymlink } from "react-icons/go";
import { fetchUserRepos } from "@/services/github";
import { formatDate, removeCaracteres } from "../../utils/shortFunctions";

const USER_NAME = process.env.NEXT_PUBLIC_GITHUB_USER;

export default async function ProjectsPage() {
  const profileRepos = await fetchUserRepos();

  return (
    <SectionSticky title="Projetos públicos" className="lg:pt-14">
      <ul className="group/list">
        {profileRepos.map((repo) => {
          return (
            <Card
              key={repo.id}
              href={`/projetos/${repo.name}`}
              innerDate={formatDate(repo.pushed_at)}
              innerImage={`https://raw.githubusercontent.com/${USER_NAME}/${repo.name}/main/.github/preview.png`}
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
