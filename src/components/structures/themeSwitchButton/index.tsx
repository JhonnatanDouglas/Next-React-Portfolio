"use client";

import { DarkModeContext } from "@/contexts/darkmode";
import { useContext } from "react";
import sunIcon from "../../../assets/darkmode/sun.svg";
import moonIcon from "../../../assets/darkmode/moon.svg";
import Image from "next/image";

const ButtonThemeSwitch = () => {
  const { handleThemeSwitch, themeMode } = useContext(DarkModeContext);

  return (
    <button
      className="md:w-36"
      onClick={handleThemeSwitch}
    >
      {themeMode ? (
        <>
          <figure className="flex items-center gap-3 p-1 transition-all duration-300 ease-in bg-gray-200 border border-gray-200 rounded-full hover:bg-gray-100 md:rounded-lg dark:border-gray-800 md:px-3 md:py-1">
            <Image
              width={500}
              height={500}
              className="w-5 h-5 md:w-6 md:h-6"
              src={sunIcon}
              alt="sun icon"
            />
            <span className="hidden font-light md:flex md:text-sm md:text-gray-600">
              Light Mode
            </span>
          </figure>
        </>
      ) : (
        <>
          <figure className="flex items-center gap-3 p-1 transition-all duration-300 ease-in bg-gray-700 border border-gray-200 rounded-full hover:bg-gray-900 md:rounded-lg md:px-3 md:py-1">
            <Image
              width={500}
              height={500}
              className="w-5 h-5 md:w-6 md:h-6"
              src={moonIcon}
              alt="moon icon"
            />
            <span className="hidden font-light md:flex md:text-sm md:text-gray-50">
              Dark Mode
            </span>
          </figure>
        </>
      )}
    </button>
  );
};

export default ButtonThemeSwitch;
