"use client";

import { RepositoryContext } from "@/contexts/fromRepository";
import { useContext } from "react";
import Project from "../projectList";

const FrontEndProjects = () => {
  const { allProjects } = useContext(RepositoryContext);

  return (
    <ul className="flex flex-col h-full gap-4 pr-2 my-6 mr-2 overflow-y-auto md:max-h-projects xl:my-4 lg:mt-8">
      {allProjects.map(
        ({
          stack,
          id,
          title,
          description,
          repository,
          techs,
          condition,
          page,
        }) =>
          stack === "frontend" ? (
            <Project
              key={id}
              titleProject={title}
              descriptionProject={description}
              linkRepository={repository}
              databaseProject={techs.frontend}
              conditionProject={condition}
              linkPage={page}
            />
          ) : null
      )}
    </ul>
  );
};

export default FrontEndProjects;
