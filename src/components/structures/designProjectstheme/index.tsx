"use client";

import ImageDevSection from "@/components/fragments/devImageProfile";
import { ProjectContext } from "@/contexts/projectsChanges";
import { useContext } from "react";
import techProjectsImage from "../../../assets/imgs/imagesDesigns/developer.png";

const ProjectsImagesTheme = () => {
  const { nameProject } = useContext(ProjectContext);

  return (
    <>
      {nameProject === "kenzieFeed" ? (
        <ImageDevSection
          messageImageOwner="Arte Criada por Jhonnatan Douglas"
          imageDefault="https://raw.githubusercontent.com/JhonnatanDouglas/PortBack/main/showImageProject/kenzieFeedLight.png"
          altDefault="Arte Criada por Jhonnatan Douglas | Portfólio - Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Kenzie Academy Brasil - Programador Web"
          linkTech="https://github.com/grupo7-T17/kenzie-feed"
        />
      ) : nameProject === "kenzieHub" ? (
        <ImageDevSection
          messageImageOwner="Arte Criada por Jhonnatan Douglas"
          imageDefault="https://raw.githubusercontent.com/JhonnatanDouglas/PortBack/main/showImageProject/kenzieHubLight.png"
          altDefault="Arte Criada por Jhonnatan Douglas | Portfólio - Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Kenzie Academy Brasil - Programador Web"
          linkTech="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub_JhonnatanDouglas"
        />
      ) : nameProject === "nuKenzie" ? (
        <ImageDevSection
          messageImageOwner="Arte Criada por Jhonnatan Douglas"
          imageDefault="https://raw.githubusercontent.com/JhonnatanDouglas/PortBack/main/showImageProject/nuKenzieLight.png"
          altDefault="Arte Criada por Jhonnatan Douglas | Portfólio - Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Kenzie Academy Brasil - Programador Web"
          linkTech="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie_JhonnatanDouglas"
        />
      ) : nameProject === "kanvas" ? (
        <ImageDevSection
          messageImageOwner="Arte gratuita"
          imageDefault="https://raw.githubusercontent.com/JhonnatanDouglas/PortBack/main/showImageProject/backendImg.png"
          altDefault="Arte gratuita | Portfólio - Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Kenzie Academy Brasil - Programador Web"
          linkTech="https://github.com/JhonnatanDouglas"
        />
      ) : nameProject === "bandKamp" ? (
        <ImageDevSection
          messageImageOwner="Arte gratuita"
          imageDefault="https://raw.githubusercontent.com/JhonnatanDouglas/PortBack/main/showImageProject/backendImg.png"
          altDefault="Arte gratuita | Portfólio - Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Kenzie Academy Brasil - Programador Web"
          linkTech="https://github.com/JhonnatanDouglas"
        />
      ) : nameProject === "kenzieBuster" ? (
        <ImageDevSection
          messageImageOwner="Arte gratuita"
          imageDefault="https://raw.githubusercontent.com/JhonnatanDouglas/PortBack/main/showImageProject/backendImg.png"
          altDefault="Arte gratuita | Portfólio - Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Kenzie Academy Brasil - Programador Web"
          linkTech="https://github.com/JhonnatanDouglas"
        />
      ) : nameProject === "agendaDeContatos" ? (
        <ImageDevSection
          messageImageOwner="Arte Criada por Jhonnatan Douglas"
          imageDefault="https://raw.githubusercontent.com/JhonnatanDouglas/PortBack/main/showImageProject/agendaDeContatos.png"
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
