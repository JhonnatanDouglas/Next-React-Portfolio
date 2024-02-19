import { RepositoryContext } from "@/contexts/fromRepository";
import { iSkillTechs } from "@/interfaces/skillsInterfaces";
import { useContext, useEffect, useState } from "react";

const SkillsList = () => {
  const { getAllSkills } = useContext(RepositoryContext);
  const [skillList, setSkillList] = useState<iSkillTechs[] | []>([]);

  useEffect(() => {
    (async () => {
      const dataSkillList = await getAllSkills();
      setSkillList(dataSkillList);
    })();
  }, [getAllSkills]);

  return (
    <ul className="grid grid-cols-1 ml-10 text-sm font-semibold text-gray-600 list-disc sm:text-base sm:grid-cols-2 dark:text-gray-200">
      {skillList.map(({ id, name }) => (
        <li
          className="mr-6"
          key={id}
        >
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
