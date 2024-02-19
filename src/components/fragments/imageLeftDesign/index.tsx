"use client";

import { iLeftDesign } from "@/interfaces/standartInterfaces";
import Image from "next/image";

const ImageLeftDesign = ({
  linkImageOwner,
  messageImageOwner,
  imageDesign,
  imageAlt,
}: iLeftDesign) => {
  return (
    <section className="flex flex-row items-center justify-center px-2 py-6 transition-all duration-300 ease-linear bg-gray-700 rounded-t-lg rounded-b-none sm:py-16 lg:rounded-l-lg lg:w-6/12 lg:rounded-none sm:px-10 lg:px-5 lg:py-12 dark:bg-purple-800 hover:bg-purple-800 dark:hover:bg-gray-700">
      <figure>
        <a
          className="cursor-auto"
          href={linkImageOwner}
          target="_blank"
          title={messageImageOwner}
        >
          <Image
            width={500}
            height={500}
            className="w-60 lg:w-96 sm:w-full sm:max-w-lg"
            src={imageDesign}
            alt={imageAlt}
          />
        </a>
      </figure>
    </section>
  );
};

export default ImageLeftDesign;
