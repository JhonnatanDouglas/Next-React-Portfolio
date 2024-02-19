import AnimationMode from "@/components/animatedPage/animation";
import ImageLeftDesign from "@/components/fragments/imageLeftDesign";
import LayoutSkillsMain from "@/components/fragments/layoutsMain/layoutContact";
import DefaultLayout from "@/components/fragments/layoutsMain/layoutDefault";
import SkillsRightSection from "@/components/structures/skillsRightSection";
import coddingDesignImage from "../../assets/imgs/imagesDesigns/coding.png";

const SkillsPage = () => {
  return (
    <>
      <AnimationMode>
        <DefaultLayout>
          <LayoutSkillsMain>
            <ImageLeftDesign
              linkImageOwner="https://storyset.com/work"
              messageImageOwner="Work illustrations by Storyset"
              imageDesign={coddingDesignImage}
              imageAlt="Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Programador Web - JavaScript - TypeScript - React - Desenvolvedor Junior - HTML5 - CSS3 - Web Semântica - JavaScript (ES6) - Lógica de programação - Controle de versão com git - Programação Funcional - Metodologias Ágeis - Noções de UX - Noções de UI - Interação com backend através de APIs (Application Programming Interfaces) - React - Hooks - State Management - Componentização, uso de bibliotecas de componentes - Consumo de APIs - NodeJs - Express - Banco de dados SQL - PostgreSQL - Construção de APIs RESTful - Programação assíncrona - Programação Orientada a Objetos - Scrum - Github - Javascript - Typescript - ReactJS - Node - Express - PostgreSQL - Styled-Components - Tailwind - GIT"
            />
            <SkillsRightSection />
          </LayoutSkillsMain>
        </DefaultLayout>
      </AnimationMode>
    </>
  );
};

export default SkillsPage;
