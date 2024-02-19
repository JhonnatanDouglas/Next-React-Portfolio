"use client";

import { iRightImage } from "@/interfaces/standartInterfaces";
import Image from "next/image";

const DeveloperSection = ({ imageDefault, altDefault }: iRightImage) => {
  return (
    <section className="flex flex-row items-center justify-center px-6 py-6 transition-all duration-300 ease-linear bg-gray-700 rounded-t-lg dark:bg-opacity-100 dark:backdrop-blur-none lg:rounded-r-lg lg:rounded-none sm:px-10 sm:py-6 lg:px-0 lg:py-0 dark:bg-purple-800 hover:bg-purple-800 dark:hover:bg-gray-700">
      <figure className="lg:m-8">
        <Image
          className="transition-all duration-300 ease-linear border-8 border-gray-100 border-double rounded-full dark:border-gray-100 w-60 lg:max-w-[610px] sm:w-full sm:max-w-sm"
          src={imageDefault}
          alt={altDefault}
        />
      </figure>
    </section>
  );
};

export default DeveloperSection;
