"use client";

const USER_NAME = process.env.NEXT_PUBLIC_GITHUB_USER;

import { useEffect } from "react";

export default function MarkdownComponent({ targetContent, projectRepoName }) {
  useEffect(() => {
    const imgs = document.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
      if (imgs[i].src.includes("/.github")) {
        imgs[
          i
        ].src = `https://raw.githubusercontent.com/${USER_NAME}/${projectRepoName}/main/.github/preview.png`;
        imgs[i].style = "border-radius: 3px;";
      }
    }
  }, [projectRepoName]);

  return (
    <div
      className="markdown-body bg-transparent text-sm text-black_white lg:text-base"
      dangerouslySetInnerHTML={{ __html: targetContent }}
    />
  );
}
