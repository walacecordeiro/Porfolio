"use client";

import { useEffect, useState } from "react";

function MouseMove() {
 const [position, setPosition] = useState({ x: 0, y: 0 });

 useEffect(() => {
  const handleMouseMove = (event) => {
   setPosition({ x: event.clientX, y: event.clientY });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
   window.removeEventListener("mousemove", handleMouseMove);
  };
 }, []);

 return (
  <div
   style={{
    position: "absolute",
    zIndex: -1,
    left: `${position.x - 600}px`,
    top: `${position.y - 600}px`,
    width: "1200px",
    height: "1200px",
    borderRadius: "50%",
    pointerEvents: "none",
    // boxShadow: "0 0 10px 5px rgba(128, 0, 255, 0.5)", // Usar apenas para se guiar
    background:
     "radial-gradient(circle at 50% 50%, rgba(29, 78, 216, 0.15) 0%, rgba(29, 78, 216, 0) 50%)",
   }}
  />
 );
}

export default MouseMove;
