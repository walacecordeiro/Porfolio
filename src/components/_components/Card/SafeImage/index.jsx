"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SafeImage({ src, ...props }) {
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

  return <Image src={src} alt={props.alt} {...props} />;
}
