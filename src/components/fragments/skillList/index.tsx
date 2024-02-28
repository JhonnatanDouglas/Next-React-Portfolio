import { RepositoryContext } from "@/contexts/fromRepository";
import { useContext } from "react";

const SkillsList = () => {
  const { allSkills } = useContext(RepositoryContext);

  return (
    <ul className="grid grid-cols-1 ml-10 text-sm font-semibold text-gray-600 list-disc sm:text-base sm:grid-cols-2 dark:text-gray-200">
      {allSkills.map(({ id, name }) => (
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
