"use client";

import { useEffect } from "react";

export default function MarkdownComponent({ targetContent, sha_images }) {
  useEffect(() => {
    const divs = document.getElementsByTagName("img");
    for (let i = 0; i < divs.length; i++) {
      if (divs[i].src.includes("/projetos/")) {
        divs[
          i
        ].src = `https://raw.githubusercontent.com/walacecordeiro/Porfolio/main/.github/preview.png
        `;
        console.log("Sim tem");
      } else {
        console.log("Não tem");
      }
      divs[i].style.backgroundColor = "red";
    }
  }, []);

  return (
    <>
      <div
        className="markdown-body bg-transparent text-sm text-black_white lg:text-base"
        dangerouslySetInnerHTML={{ __html: targetContent }}
      />
    </>
  );
}
