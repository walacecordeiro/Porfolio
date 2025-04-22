"use client";

import Link from "next/link";
import Navigation from "../Navigation";
import MobileNavigation from "../MobileNavigation";
import { Paragraph } from "../Paragraph";
import Image from "next/image";

import { useEffect, useState } from "react";
import { fetchUserRepos, fetchUserProfile } from "@/services/github";

export default function Header({ gitHubUserName }) {
  const [profileData, setProfileData] = useState(null);
  // const [reposData, setReposData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await fetchUserProfile(gitHubUserName);
        // const repos = await fetchUserRepos(gitHubUserName);

        setProfileData(profile);
        // setReposData(repos);
      } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [gitHubUserName]);

  if (!profileData) return <div>Carregando...</div>;

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
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-3xl">
            {profileData?.name}
          </h1>
          <h2 className="text-md opacity-80 font-medium tracking-tight text-slate-200 sm:text-md">
            {profileData?.location}
          </h2>
        </div>
      </Link>
      <Paragraph
        className="mt-4 text-sm max-w-sm leading-normal sm:text-base"
        text={profileData?.bio}
      />

      <Navigation displayMobile="hidden" displayDesktop="block" />
      <MobileNavigation />
    </header>
  );
}
