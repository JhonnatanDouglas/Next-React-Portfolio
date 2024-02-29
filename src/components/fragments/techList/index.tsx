"use client";

import { iTechListDev } from "@/interfaces/standartInterfaces";
import { Tooltip } from "@material-tailwind/react";
import Image from "next/image";

const TechList = ({ dev, database, mode }: iTechListDev) => {
  return (
    <>
      <div className="mt-4">
        <ul className="flex flex-wrap items-center gap-2 mt-2 mb-2 text-center lg:mt-4 lg:mb-4 lg:flex-row">
          <h2 className="text-base font-semibold text-gray-700 sm:text-xl dark:text-gray-100">
            {dev}
          </h2>
          {database.map(({ id, link, alt, name }) => (
            <li
              className="hover:animate-pulse"
              key={id}
            >
              <Tooltip
                className="bg-gray-600 dark:bg-gray-100 text-gray-50 dark:text-gray-800 px-[8px] py-[1px] font-mono"
                content={name}
                placement={mode}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 0 },
                }}
              >
                <Image
                  width={500}
                  height={500}
                  className="w-8 bg-gray-100 border border-gray-800 dark:border-gray-600 sm:w-10 rounded-xl by-6 dark:bg-gray-900 lg:w-12"
                  src={link}
                  alt={alt}
                />
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TechList;
