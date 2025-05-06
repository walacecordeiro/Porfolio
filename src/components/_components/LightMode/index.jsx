"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function LightMode({ className }) {
  const { theme, setTheme } = useTheme();

  function toggleMode() {
    const newMode = theme === "light" ? "dark" : "light";
    setTheme(newMode);
  }

  return (
    <div className={`${className} z-50`}>
      <Button
        onClick={() => toggleMode()}
        variant="ghost"
        className="shadow-md shadow-background"
        size="icon"
      >
        <Sun className="transition-all animate-[spin_10s_linear_infinite] dark:hidden" />
        <Moon className="transition-all animate-[bounce_5s_linear_infinite] -mb-2 hidden dark:block" />
      </Button>
    </div>
  );
}
