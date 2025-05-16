/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SafeImage({ src, href, ...props }) {
  const [exists, setExists] = useState(null);

  useEffect(() => {
    let isMounted = true;
    if (!src) return setExists(false);
    fetch(src, { method: "HEAD" })
      .then((res) => {
        if (isMounted) setExists(res.ok);
      })
      .catch(() => {
        if (isMounted) setExists(false);
      });
    return () => {
      isMounted = false;
    };
  }, [src]);

  if (exists === null) return <p>Verificando se tem imagem...</p>; // ou um skeleton/loading se quiser
  if (!exists) return null; // ou um fallback

  return (
    <Link href={href}>
      <img src={src} alt={props.alt} {...props} />
    </Link>
  );
}
