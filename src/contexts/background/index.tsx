"use client";

import { iBackgroundContext } from "@/interfaces/darkmodeInterfaces";
import { iChildrenProps } from "@/interfaces/standartInterfaces";
import { createContext, useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const BackgroundContext = createContext({} as iBackgroundContext);

const BackgroundProvider = ({ children }: iChildrenProps) => {
  const particlesInit: (engine: Engine) => Promise<void> = useCallback(
    async (engine: Engine) => {
      await loadSlim(engine);
    },
    []
  );

  const particlesLoaded: () => Promise<void> = useCallback(async () => {}, []);

  return (
    <>
      <BackgroundContext.Provider value={{ particlesInit, particlesLoaded }}>
        {children}
      </BackgroundContext.Provider>
    </>
  );
};

export { BackgroundProvider, BackgroundContext };
