"use client";

import { iDarkModeContext } from "@/interfaces/darkmodeInterfaces";
import { iChildrenProps } from "@/interfaces/standartInterfaces";
import { getCookie, setCookie } from "cookies-next";
import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext({} as iDarkModeContext);

const DarkThemeProvider = ({ children }: iChildrenProps) => {
  const [themeMode, setThemeMode] = useState<boolean>(
    () => getCookie("@Theme") === "true"
  );

  useEffect(() => {
    const updateTheme = () => {
      document.documentElement.classList.toggle("dark", themeMode);
      setCookie("@Theme", String(themeMode));
    };
    updateTheme();
  }, [themeMode]);

  const handleThemeSwitch = () => {
    setThemeMode((previousTheme) => !previousTheme);
  };

  return (
    <DarkModeContext.Provider value={{ handleThemeSwitch, themeMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkThemeProvider, DarkModeContext };
