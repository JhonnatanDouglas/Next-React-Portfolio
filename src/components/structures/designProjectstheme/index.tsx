"use client";

import ImageDevSection from "@/components/fragments/devImageProfile";
import { ProjectContext } from "@/contexts/projectsChanges";
import { useContext } from "react";
import techProjectsImage from "../../../assets/imgs/imagesDesigns/developer.png";
import kenzieFeedImg from "../../../assets/imgs/showImageProject/kenzieFeedLight.png";
import kenzieHubImg from "../../../assets/imgs/showImageProject/kenzieHubLight.png";
import nuKenzieImg from "../../../assets/imgs/showImageProject/nuKenzieLight.png";
import agendaDeContatosImg from "../../../assets/imgs/showImageProject/agendaDeContatos.png";
import backendImg from "../../../assets/imgs/showImageProject/backendImg.png";

const ProjectsImagesTheme = () => {
  const { nameProject } = useContext(ProjectContext);

  return (
    <>
      {nameProject === "kenzieFeed" ? (
        <ImageDevSection
          messageImageOwner="Arte Criada por Jhonnatan Douglas"
          imageDefault={kenzieFeedImg}
          altDefault="Arte Criada por Jhonnatan Douglas | Portfólio - Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Kenzie Academy Brasil - Programador Web"
          linkTech="https://github.com/grupo7-T17/kenzie-feed"
        />
      ) : nameProject === "kenzieHub" ? (
        <ImageDevSection
          messageImageOwner="Arte Criada por Jhonnatan Douglas"
          imageDefault={kenzieHubImg}
          altDefault="Arte Criada por Jhonnatan Douglas | Portfólio - Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Kenzie Academy Brasil - Programador Web"
          linkTech="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub_JhonnatanDouglas"
        />
      ) : nameProject === "nuKenzie" ? (
        <ImageDevSection
          messageImageOwner="Arte Criada por Jhonnatan Douglas"
          imageDefault={nuKenzieImg}
          altDefault="Arte Criada por Jhonnatan Douglas | Portfólio - Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Kenzie Academy Brasil - Programador Web"
          linkTech="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie_JhonnatanDouglas"
        />
      ) : nameProject === "kanvas" ? (
        <ImageDevSection
          messageImageOwner="Arte gratuita"
          imageDefault={backendImg}
          altDefault="Arte gratuita | Portfólio - Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Kenzie Academy Brasil - Programador Web"
          linkTech="https://github.com/JhonnatanDouglas"
        />
      ) : nameProject === "bandKamp" ? (
        <ImageDevSection
          messageImageOwner="Arte gratuita"
          imageDefault={backendImg}
          altDefault="Arte gratuita | Portfólio - Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Kenzie Academy Brasil - Programador Web"
          linkTech="https://github.com/JhonnatanDouglas"
        />
      ) : nameProject === "kenzieBuster" ? (
        <ImageDevSection
          messageImageOwner="Arte gratuita"
          imageDefault={backendImg}
          altDefault="Arte gratuita | Portfólio - Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Kenzie Academy Brasil - Programador Web"
          linkTech="https://github.com/JhonnatanDouglas"
        />
      ) : nameProject === "agendaDeContatos" ? (
        <ImageDevSection
          messageImageOwner="Arte Criada por Jhonnatan Douglas"
          imageDefault={agendaDeContatosImg}
          altDefault="Arte Criada por Jhonnatan Douglas | Portfólio - Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Kenzie Academy Brasil - Programador Web"
          linkTech="https://github.com/JhonnatanDouglas"
        />
      ) : (
        <ImageDevSection
          messageImageOwner="Work illustrations by Storyset"
          imageDefault={techProjectsImage}
          altDefault="Work illustrations by Storyset"
          linkTech="https://storyset.com/work"
        />
      )}
    </>
  );
};

export default ProjectsImagesTheme;
