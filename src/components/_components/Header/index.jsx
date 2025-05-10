import Link from "next/link";
import Navigation from "../Navigation";
import MobileNavigation from "../MobileNavigation";
import { Paragraph } from "../Paragraph";
import Image from "next/image";
import { fetchUserProfile } from "@/services/github";
import Loading from "@/app/loading";

export default async function Header() {
  const profileData = await fetchUserProfile();

  if (!profileData) return <Loading />;

  return (
    <header className="lg:sticky lg:top-0 lg:h-screen lg:py-24 md:items-start flex flex-col justify-center items-center ">
      <Link
        href="/"
        className="flex flex-col w-fit items-center gap-2 sm:flex-row"
      >
        <Image
          src={profileData.avatar_url}
          width={120}
          height={0}
          alt="Pequena imagem do projeto"
          className="h-fit rounded-full"
        />
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-4xl font-bold tracking-tight text-black_white sm:text-3xl">
            {profileData?.name}
          </h1>
          <h2 className="text-md opacity-80 font-medium tracking-tight text-black_white-foreground sm:text-md">
            {profileData?.location}
          </h2>
        </div>
      </Link>
      <Paragraph
        className="mt-4 text-center text-sm text-paragraph max-w-sm leading-normal sm:text-base md:text-start"
        text={profileData?.bio}
      />

      <Navigation displayMobile="hidden" displayDesktop="block" />
      <MobileNavigation />
    </header>
  );
}
