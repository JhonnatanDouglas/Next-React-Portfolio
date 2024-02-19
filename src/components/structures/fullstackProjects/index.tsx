"use client";

import { RepositoryContext } from "@/contexts/fromRepository";
import { iProjects } from "@/interfaces/projectsInterfaces";
import { useContext, useEffect, useState } from "react";
import Project from "../projectList";

const FullstackProjects = () => {
  const { getAllProjects } = useContext(RepositoryContext);
  const [projects, setProjects] = useState<iProjects[] | []>([]);

  useEffect(() => {
    (async () => {
      const dataProjects = await getAllProjects();
      setProjects(dataProjects);
    })();
  }, [getAllProjects]);

  return (
    <ul className="flex flex-col h-full gap-4 pr-2 my-6 mr-2 overflow-y-auto md:max-h-projects xl:my-4 lg:mt-8">
      {projects.map(
        ({
          stack,
          id,
          title,
          description,
          repository,
          techs,
          condition,
          figma,
        }) =>
          stack === "fullstack" ? (
            <Project
              key={id}
              titleProject={title}
              descriptionProject={description}
              linkRepository={repository}
              databaseProjectExtra={techs.backend}
              databaseProject={techs.frontend}
              conditionProject={condition}
              linkFigma={figma}
            />
          ) : null
      )}
    </ul>
  );
};

export default FullstackProjects;
