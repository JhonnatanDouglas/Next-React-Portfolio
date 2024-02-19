"use client";

import { iLinkProps } from "@/interfaces/standartInterfaces";
import Link from "next/link";

const ButtonDefault = ({ children, goToPage }: iLinkProps) => {
  return (
    <Link
      className="w-full px-4 py-2 font-medium text-center text-gray-100 transition-all duration-300 ease-linear bg-gray-700 rounded-md lg:text-lg text-md dark:text-gray-700 dark:hover:text-gray-100 dark:bg-gray-100 dark:hover:bg-purple-600 hover:bg-purple-600"
      href={goToPage}
    >
      {children}
    </Link>
  );
};

export default ButtonDefault;
