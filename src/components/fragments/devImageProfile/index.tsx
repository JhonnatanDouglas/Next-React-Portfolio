"use client";

import { iRightImage } from "@/interfaces/standartInterfaces";
import Image from "next/image";

const ImageDevSection = ({
  imageDefault,
  altDefault,
  linkTech,
  messageImageOwner,
}: iRightImage) => {
  return (
    <section className="flex flex-row items-center justify-center w-full max-w-md px-0 py-6 transition-all duration-300 ease-linear bg-gray-700 rounded-t-lg sm:max-w-5xl dark:bg-opacity-100 dark:backdrop-blur-none lg:rounded-r-lg lg:rounded-none sm:px-10 sm:py-6 lg:px-2 lg:py-2 backdrop-blur-sm lg:max-w-md dark:bg-purple-800 hover:bg-purple-800 dark:hover:bg-gray-700">
      <figure className="lg:m-1">
        <a
          className="cursor-auto"
          title={messageImageOwner}
          href={linkTech}
          target="_blank"
        >
          <Image
            width={500}
            height={500}
            className="transition-all duration-300 ease-linear w-60 lg:max-w-none sm:w-full sm:max-w-sm"
            src={imageDefault}
            alt={altDefault}
          />
        </a>
      </figure>
    </section>
  );
};

export default ImageDevSection;
