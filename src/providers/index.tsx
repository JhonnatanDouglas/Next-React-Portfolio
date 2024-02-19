"use client";

import { BackgroundProvider } from "@/contexts/background";
import { DarkThemeProvider } from "@/contexts/darkmode";
import { RepositoryProvider } from "@/contexts/fromRepository";
import { HeaderProvider } from "@/contexts/header";
import { ProjectProvider } from "@/contexts/projectsChanges";
import { iChildrenProps } from "@/interfaces/standartInterfaces";

export const Providers = ({ children }: iChildrenProps) => {
  return (
    <>
      <HeaderProvider>
        <BackgroundProvider>
          <DarkThemeProvider>
            <ProjectProvider>
              <RepositoryProvider>{children}</RepositoryProvider>
            </ProjectProvider>
          </DarkThemeProvider>
        </BackgroundProvider>
      </HeaderProvider>
    </>
  );
};
