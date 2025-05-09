"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { GiSun } from "react-icons/gi";
import { RxMoon } from "react-icons/rx";

import { Button } from "@/components/ui/button";

import { handleClickComponent } from "@/app/utils/handleClickComponent";

export function LightMode({ className }) {
  const { theme, setTheme } = useTheme();

  function toggleMode() {
    const newMode = theme === "light" ? "dark" : "light";
    setTheme(newMode);
  }

  return (
    <div className={`${className} z-50`}>
      <Button
        onClick={() => {
          toggleMode();
          handleClickComponent("closeSheet");
        }}
        variant="ghost"
        className="shadow-md bg-muted-foreground/10 text-primary hover:bg-black/80 hover:text-primary transition-all duration-500"
        size="icon"
      >
        <GiSun
          size={25}
          className="hover:text-orange-300 transition-all animate-[spin_10s_linear_infinite] dark:hidden"
        />
        <RxMoon
          size={25}
          className="hover:text-teal-200 transition-all animate-[bounce_5s_linear_infinite] -mb-2 hidden dark:block"
        />
      </Button>
    </div>
  );
}
