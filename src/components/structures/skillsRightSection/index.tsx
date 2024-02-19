"use client";

import SkillsList from "@/components/fragments/skillList";
import TechList from "@/components/fragments/techList";
import { RepositoryContext } from "@/contexts/fromRepository";
import { iTechCategory } from "@/interfaces/techsItemsInterfaces";
import { useContext, useEffect, useState } from "react";

const SkillsRightSection = () => {
  const { getAllLanguages } = useContext(RepositoryContext);
  const [skillLanguages, setSkillsLanguages] = useState<[] | iTechCategory[]>(
    []
  );

  useEffect(() => {
    (async () => {
      const dataSkillLanguages = await getAllLanguages();
      setSkillsLanguages(dataSkillLanguages);
    })();
  }, [getAllLanguages]);

  return (
    <section className="flex flex-col justify-center w-full p-4 bg-gray-900 border rounded-b-lg dark:text-gray-100 lg:rounded-r-lg lg:rounded-none bg-opacity-5 lg:p-8 dark:border-gray-700 backdrop-blur-sm">
      <div>
        <h3 className="mb-4 text-2xl font-semibold sm:text-3xl">
          Principais Tecnologias
        </h3>
      </div>
      <div>
        {skillLanguages.map((skill) =>
          skill.stack === "frontend" ? (
            <TechList
              key={skill.id}
              database={skill.list}
              dev="Front-End: "
            />
          ) : null
        )}
        {skillLanguages.map((skill) =>
          skill.stack === "backend" ? (
            <TechList
              key={skill.id}
              database={skill.list}
              dev="Back-End: "
            />
          ) : null
        )}
      </div>
      <div className="my-6">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-gray-700 sm:text-2xl dark:text-gray-100">
            Habilidades
          </h3>
        </div>
        <SkillsList />
      </div>
      {skillLanguages.map((skill) =>
        skill.stack === "extra" ? (
          <TechList
            key={skill.id}
            database={skill.list}
            dev="Extras: "
          />
        ) : null
      )}
    </section>
  );
};

export default SkillsRightSection;
