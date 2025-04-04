"use client";

import Link from "next/link";
import Navigation from "../Navigation";
import MobileNavigation from "../MobileNavigation";
import { Paragraph } from "../Paragraph";

import { useEffect, useState } from 'react';
import { fetchUserRepos, fetchUserProfile } from '@/services/github';

export default function Header({ gitHubUserName }) {
  const [profileData, setProfileData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(profileData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profile = await fetchUserProfile(gitHubUserName);
        const repos = await fetchUserRepos(gitHubUserName);
        
        setProfileData(profile);
        setReposData(repos);
      } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [gitHubUserName]);

  if (!profileData) return <div>Carregando...</div>;

  return (
    <header className="lg:sticky lg:top-0 lg:h-screen lg:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <Link href="/">{profileData?.name}</Link>
      </h1>
      <h2 className="mt-3 text-md font-medium tracking-tight text-slate-200 sm:text-xl">
        {profileData?.location}
      </h2>
      <Paragraph
        className="mt-4 text-sm max-w-sm leading-normal sm:text-base"
        text={profileData.bio}
      />

      <Navigation displayMobile="hidden" displayDesktop="block" />
      <MobileNavigation />
    </header>
  );
}
