"use client";

import AnimationMode from "@/components/animatedPage/animation";
import DevButton from "@/components/fragments/devButton";
import DefaultLayout from "@/components/fragments/layoutsMain/layoutDefault";
import LayoutProjectsMain from "@/components/fragments/layoutsMain/layoutProjects";
import BackEndProjects from "@/components/structures/backendProjects";
import ProjectsImagesTheme from "@/components/structures/designProjectstheme";
import FrontEndProjects from "@/components/structures/frontendProjects";
import FullstackProjects from "@/components/structures/fullstackProjects";
import { ProjectContext } from "@/contexts/projectsChanges";
import { useContext } from "react";

const ProjectsPage = () => {
  const { categoryDev } = useContext(ProjectContext);

  return (
    <>
      <AnimationMode>
        <DefaultLayout>
          <LayoutProjectsMain>
            <section className="flex flex-col justify-center w-full p-4 text-gray-700 transition-all duration-300 ease-linear bg-gray-900 border rounded-b-lg dark:text-gray-100 lg:rounded-l-lg lg:rounded-none bg-opacity-5 lg:p-8 dark:border-gray-700 backdrop-blur-sm">
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-100">
                  Projetos
                </h3>
                <p className="mt-4 text-sm font-semibold sm:text-base">
                  Nesta área, você poderá visualizar meus projetos mais
                  recentes. Primeiramente clique para abrir os projetos do
                  Front-End ou Back-End. Depois clique em &quot;Mostrar&quot;
                  para obter informações adicionais sobre cada projeto.
                </p>

                <p className="mt-2 text-sm font-semibold sm:text-base">
                  Agradeço o interesse em conhecer mais sobre o meu trabalho.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 p-4">
                <DevButton devTitle="frontend">Projetos Front-End </DevButton>
                <DevButton devTitle="fullstack">Projetos Fullstack </DevButton>
                <DevButton devTitle="backend">Projetos Back-End</DevButton>
              </div>
              {categoryDev === "frontend" ? (
                <FrontEndProjects />
              ) : categoryDev === "backend" ? (
                <BackEndProjects />
              ) : categoryDev === "fullstack" ? (
                <FullstackProjects />
              ) : (
                <div className="flex items-center justify-center h-full text-center bg-gray-300 rounded-md dark:bg-gray-700">
                  <p className="px-4 text-base font-semibold py-14 sm:text-xl">
                    Selecione acima quais projetos deseja visualizar.
                  </p>
                </div>
              )}
            </section>
            <ProjectsImagesTheme />
          </LayoutProjectsMain>
        </DefaultLayout>
      </AnimationMode>
    </>
  );
};

export default ProjectsPage;
