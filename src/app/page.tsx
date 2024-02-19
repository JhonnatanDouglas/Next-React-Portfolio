import AnimationMode from "@/components/animatedPage/animation";
import DeveloperSection from "@/components/fragments/imageRightDesign";
import DefaultLayout from "@/components/fragments/layoutsMain/layoutDefault";
import LayoutHomeMain from "@/components/fragments/layoutsMain/layoutHome";
import HomeLeftSection from "@/components/structures/homeLeftSection";
import devImage from "../assets/imgs/profile/JhonnatanDevProfile.jpg";

const Home = () => {
  return (
    <>
      <AnimationMode>
        <DefaultLayout>
          <LayoutHomeMain>
            <HomeLeftSection />
            <DeveloperSection
              imageDefault={devImage}
              altDefault="Portfólio - Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End - Kenzie Academy Brasil - Programador Web - JavaScript - TypeScript - React - Desenvolvedor Junior - HTML5 - CSS3 - Web Semântica - JavaScript (ES6) - Lógica de programação - Controle de versão com git - Programação Funcional - Metodologias Ágeis - Noções de UX - Noções de UI - Interação com backend através de APIs (Application Programming Interfaces) - React - Hooks - State Management - Componentização, uso de bibliotecas de componentes - Consumo de APIs - NodeJs - Express - Banco de dados SQL - PostgreSQL - Construção de APIs RESTful - Programação assíncrona - Programação Orientada a Objetos - Scrum - Github - Javascript - Typescript - ReactJS - Node - Express - PostgreSQL - Styled-Components - Tailwind - GIT"
            />
          </LayoutHomeMain>
        </DefaultLayout>
      </AnimationMode>
    </>
  );
};

export default Home;
