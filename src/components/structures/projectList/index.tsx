"use client";

import MiniButton from "@/components/fragments/cvButton";
import DetailsButton from "@/components/fragments/detailsButton";
import { ProjectContext } from "@/contexts/projectsChanges";
import { iProject } from "@/interfaces/standartInterfaces";
import { useContext } from "react";

const Project = ({
  titleProject,
  descriptionProject,
  linkRepository,
  databaseProject,
  databaseProjectExtra,
  conditionProject,
  linkPage,
  linkFigma,
}: iProject) => {
  const { nameProject } = useContext(ProjectContext);

  return (
    <li
      className="p-4 bg-gray-100 border border-gray-400 rounded-lg dark:bg-gray-700"
      key={titleProject}
    >
      <div>
        <div className="flex flex-row justify-between my-2">
          <h3 className="text-lg font-semibold text-gray-700 sm:text-2xl dark:text-gray-100">
            {titleProject}
          </h3>
          {nameProject === conditionProject ? (
            <DetailsButton projectInfo="">Esconder</DetailsButton>
          ) : (
            <DetailsButton projectInfo={conditionProject}>
              Mostrar
            </DetailsButton>
          )}
        </div>
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-200">
          {descriptionProject}
        </p>
        <div className="flex flex-wrap mt-2 text-sm font-semibold text-gray-700 sm:mt-3 dark:text-gray-200">
          <span className="mr-2">Links: </span>
          <div className="flex flex-col gap-1 sm:flex-row">
            <MiniButton goToPage={linkRepository}>
              Repositório em GitHub
            </MiniButton>
            {linkPage ? (
              <MiniButton goToPage={linkPage}>
                Projeto em Funcionamento
              </MiniButton>
            ) : null}
            {linkFigma ? (
              <MiniButton goToPage={linkFigma}>Visualizar Figma</MiniButton>
            ) : null}
          </div>
        </div>
      </div>
      <div>
        {nameProject === conditionProject ? (
          <>
            <h4 className="mt-4 mb-3 font-semibold text-gray-600 lg:text-lg text-md dark:text-gray-200">
              Tecnologias utilizadas no Front-End:
            </h4>
            <ul className="grid grid-cols-1 ml-10 text-sm font-semibold text-gray-600 list-disc lg:text-base lg:mb-2 sm:grid-cols-2 dark:text-gray-200">
              {databaseProject.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
      <div>
        {nameProject === conditionProject && databaseProjectExtra ? (
          <>
            <h4 className="mt-4 mb-3 font-semibold text-gray-600 lg:text-lg text-md dark:text-gray-200">
              Tecnologias utilizadas no Back-End:
            </h4>
            <ul className="grid grid-cols-1 ml-10 text-sm font-semibold text-gray-600 list-disc lg:text-base lg:mb-2 sm:grid-cols-2 dark:text-gray-200">
              {databaseProjectExtra.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </li>
  );
};

export default Project;
