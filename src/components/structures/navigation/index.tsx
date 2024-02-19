"use client";

import { HeaderContext } from "@/contexts/header";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

const NavLinks = () => {
  return (
    <>
      <Link href="/">
        <span className="text-sm font-semibold text-gray-100 transition-all duration-100 ease-linear border-gray-100 dark:hover:border-purple-400 hover:border-purple-400 hover:text-purple-300 dark:hover:text-purple-300 sm:text-base dark:border-gray-800 hover:border-b-2 dark:text-gray-100">
          Início
        </span>
      </Link>
      <Link href="/skills">
        <span className="text-sm font-semibold text-gray-100 transition-all duration-100 ease-linear border-gray-100 dark:hover:border-purple-400 hover:border-purple-400 hover:text-purple-300 dark:hover:text-purple-300 sm:text-base dark:border-gray-800 hover:border-b-2 dark:text-gray-100">
          Habilidades
        </span>
      </Link>
      <Link href="/projects">
        <span className="text-sm font-semibold text-gray-100 transition-all duration-100 ease-linear border-gray-100 dark:hover:border-purple-400 hover:border-purple-400 hover:text-purple-300 dark:hover:text-purple-300 sm:text-base dark:border-gray-800 hover:border-b-2 dark:text-gray-100">
          Projetos
        </span>
      </Link>
      <Link href="/contact">
        <span className="text-sm font-semibold text-gray-100 transition-all duration-100 ease-linear border-gray-100 dark:hover:border-purple-400 hover:border-purple-400 hover:text-purple-300 dark:hover:text-purple-300 sm:text-base dark:border-gray-800 hover:border-b-2 dark:text-gray-100">
          Contato
        </span>
      </Link>
    </>
  );
};

const HeaderNav = () => {
  const { toggleNav, isOpen } = useContext(HeaderContext);
  return (
    <>
      <nav className="flex items-center w-full">
        <div className="justify-between hidden gap-4 md:flex">
          <NavLinks />
        </div>
        <div className="h-6 md:hidden">
          <button onClick={toggleNav}>
            {isOpen ? (
              <X className="text-gray-100 dark:text-gray-100" />
            ) : (
              <Menu className="text-gray-100 dark:text-gray-100" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};
export { HeaderNav, NavLinks };
