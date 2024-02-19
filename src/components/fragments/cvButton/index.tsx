"use client";
import { iLinkProps } from "@/interfaces/standartInterfaces";

const MiniButton = ({ children, goToPage }: iLinkProps) => {
  return (
    <a
      className="px-2 py-0 mr-2 text-xs font-medium text-center text-gray-100 transition-all duration-300 ease-linear bg-purple-600 border border-purple-600 rounded-md dark:hover:border-gray-100 dark:border-purple-600 hover:text-gray-700 hover:border-gray-700 dark:text-gray-100 dark:hover:text-gray-100 dark:bg-purple-600 dark:hover:bg-gray-700 hover:bg-gray-100"
      href={goToPage}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default MiniButton;
