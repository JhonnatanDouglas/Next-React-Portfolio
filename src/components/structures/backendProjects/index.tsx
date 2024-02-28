"use client";

import { RepositoryContext } from "@/contexts/fromRepository";
import { iProjects } from "@/interfaces/projectsInterfaces";
import { useContext } from "react";
import Project from "../projectList";

const BackEndProjects = () => {
  const { allProjects } = useContext(RepositoryContext);

  return (
    <ul className="flex flex-col h-full gap-4 pr-2 my-6 mr-2 overflow-y-auto md:max-h-projects xl:my-4 lg:mt-8">
      {allProjects.map(
        ({
          id,
          stack,
          condition,
          title,
          description,
          repository,
          techs,
        }: iProjects) =>
          stack === "backend" ? (
            <Project
              key={id}
              titleProject={title}
              descriptionProject={description}
              linkRepository={repository}
              databaseProject={techs.backend}
              conditionProject={condition}
            />
          ) : null
      )}
    </ul>
  );
};

export default BackEndProjects;
