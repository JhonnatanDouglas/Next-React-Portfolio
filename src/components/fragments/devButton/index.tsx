"use client";

import { ProjectContext } from "@/contexts/projectsChanges";
import { iDevProps } from "@/interfaces/standartInterfaces";
import { useContext } from "react";

const DevButton = ({ children, devTitle }: iDevProps) => {
  const { changeDevCategory } = useContext(ProjectContext);
  return (
    <button
      onClick={() => changeDevCategory(devTitle)}
      className="px-2 py-1 mr-2 text-sm font-medium text-center text-gray-100 transition-all duration-300 ease-linear bg-purple-600 border border-purple-600 rounded-md cursor-pointer lg:text-base dark:hover:border-gray-100 dark:border-purple-600 hover:text-gray-700 hover:border-gray-700 dark:text-gray-100 dark:hover:text-gray-100 dark:bg-purple-600 dark:hover:bg-gray-700 hover:bg-gray-100"
    >
      {children}
    </button>
  );
};

export default DevButton;
