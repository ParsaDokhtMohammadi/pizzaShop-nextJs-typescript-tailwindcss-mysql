"use client";
import React, { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<"" | "dark">("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const htmlClasses = document.documentElement.classList;
      setTheme(htmlClasses.contains("dark") ? "dark" : "");
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window === "undefined") return;

    const html = document.documentElement.classList;
    if (html.contains("dark")) {
      html.remove("dark");
      setTheme("");
    } else {
      html.add("dark");
      setTheme("dark");
    }
  };

  return (
    <div className="relative flex items-center border border-primary rounded-full w-16 h-8 px-0.5 justify-between">
      <div
        className={`flex rounded-full bg-primary p-1 cursor-pointer hover:bg-primary-hover  text-white transition-transform duration-500 ease-in-out z-10`}
        style={{
          transform: theme === "dark" ? "translateX(-32px)" : "translateX(0)",
        }}
        onClick={toggleTheme}
      >
        {theme === "dark" ? <LuMoon size={18} /> : <LuSun size={18} />}
      </div>
      <div className="flex w-16 pl-2 pr-0.5 justify-between items-center absolute z-[0] text-accent">
        <LuSun size={18} />
        <LuMoon size={18} />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
