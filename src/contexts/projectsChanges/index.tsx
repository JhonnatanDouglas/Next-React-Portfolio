"use client";

import { iProjectContext } from "@/interfaces/projectsChangesInterfaces";
import { iChildrenProps } from "@/interfaces/standartInterfaces";
import { createContext, useState } from "react";

const ProjectContext = createContext({} as iProjectContext);

const ProjectProvider: ({ children }: iChildrenProps) => JSX.Element = ({
  children,
}) => {
  const [nameProject, setNameProject] = useState<string>("");
  const [categoryDev, setCategoryDev] = useState<string>("");

  const changeName = (name: string) => {
    if (name === "kenzieFeed") {
      setNameProject("kenzieFeed");
    } else if (name === "kenzieHub") {
      setNameProject("kenzieHub");
    } else if (name === "nuKenzie") {
      setNameProject("nuKenzie");
    } else if (name === "kanvas") {
      setNameProject("kanvas");
    } else if (name === "bandKamp") {
      setNameProject("bandKamp");
    } else if (name === "kenzieBuster") {
      setNameProject("kenzieBuster");
    } else if (name === "agendaDeContatos") {
      setNameProject("agendaDeContatos");
    } else {
      setNameProject("");
    }
  };

  const changeDevCategory = (category: string) => {
    if (category === "frontend") {
      setNameProject("");
      setCategoryDev("frontend");
    } else if (category === "backend") {
      setNameProject("");
      setCategoryDev("backend");
    } else if (category === "fullstack") {
      setNameProject("");
      setCategoryDev("fullstack");
    } else {
      setCategoryDev("");
    }
  };

  return (
    <>
      <ProjectContext.Provider
        value={{
          nameProject,
          changeName,
          categoryDev,
          setCategoryDev,
          changeDevCategory,
        }}
      >
        {children}
      </ProjectContext.Provider>
    </>
  );
};

export { ProjectProvider, ProjectContext };
