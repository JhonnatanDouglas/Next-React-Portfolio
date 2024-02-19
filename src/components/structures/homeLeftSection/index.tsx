import PageButtonGroup from "../buttonGroup";
import WhoIAm from "../whoIAm";

const HomeLeftSection = () => {
  return (
    <section className="flex flex-col justify-center w-full p-4 bg-gray-900 border rounded-b-lg lg:rounded-l-lg lg:rounded-none bg-opacity-5 lg:p-8 dark:border-gray-700 backdrop-blur-sm">
      <WhoIAm />
      <PageButtonGroup
        buttonOne="Habilidades"
        routeOne="/skills"
        buttonTwo="Projetos"
        routeTwo="/projects"
        buttonThree="Contato"
        routeThree="/contact"
      />
    </section>
  );
};

export default HomeLeftSection;
