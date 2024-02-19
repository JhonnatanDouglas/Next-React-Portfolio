import { iProjects } from "@/interfaces/projectsInterfaces";
import { iRepository } from "@/interfaces/repositoryInterfaces";
import { iSkillTechs } from "@/interfaces/skillsInterfaces";
import { iSocialLinks } from "@/interfaces/socialInterfaces";
import { iChildrenProps } from "@/interfaces/standartInterfaces";
import { iTechCategory } from "@/interfaces/techsItemsInterfaces";
import { api } from "@/services";
import { createContext } from "react";

const RepositoryContext = createContext({} as iRepository);

const RepositoryProvider = ({ children }: iChildrenProps) => {
  const getAllProjects = async () => {
    try {
      const { data } = await api.get("/allProjects.json");
      const projects: iProjects[] = data;
      return projects;
    } catch (error) {
      console.error("Não foi possível carregar a lista de Projetos.");
      return [];
    }
  };

  const getAllSkills = async () => {
    try {
      const { data } = await api.get("/allSkillsList.json");
      const skills: iSkillTechs[] = data;
      return skills;
    } catch (error) {
      console.error("Não foi possível carregar a lista de Habilidades.");
      return [];
    }
  };

  const getAllContactLinks = async () => {
    try {
      const { data } = await api.get("/allSocialLinks.json");
      const contacts: iSocialLinks[] = data;
      return contacts;
    } catch (error) {
      console.error("Não foi possível carregar a lista de Contatos.");
      return [];
    }
  };

  const getAllFooterLinks = async () => {
    try {
      const { data } = await api.get("/allFooterSocialLinks.json");
      const footerLinks: iSocialLinks[] = data;
      return footerLinks;
    } catch (error) {
      console.error("Não foi possível carregar a lista de Links do Rodapé.");
      return [];
    }
  };

  const getAllLanguages = async () => {
    try {
      const { data } = await api.get("/allTechsList.json");
      const languages: iTechCategory[] = data;
      return languages;
    } catch (error) {
      console.error("Não foi possível carregar a lista de Linguagens.");
      return [];
    }
  };

  return (
    <>
      <RepositoryContext.Provider
        value={{
          getAllProjects,
          getAllSkills,
          getAllContactLinks,
          getAllFooterLinks,
          getAllLanguages,
        }}
      >
        {children}
      </RepositoryContext.Provider>
    </>
  );
};

export { RepositoryProvider, RepositoryContext };
