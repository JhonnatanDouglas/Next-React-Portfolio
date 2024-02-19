"use client";

import { RepositoryContext } from "@/contexts/fromRepository";
import { iSocialLinks } from "@/interfaces/socialInterfaces";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const ContactButtons = () => {
  const { getAllContactLinks } = useContext(RepositoryContext);
  const [contactLinks, setContactLinks] = useState<iSocialLinks[] | []>([]);

  useEffect(() => {
    (async () => {
      const dataContactLinks = await getAllContactLinks();
      setContactLinks(dataContactLinks);
    })();
  }, [getAllContactLinks]);

  return (
    <ul className="flex flex-wrap items-center justify-around gap-4 lg:flex-wrap ter md:justify-center md:flex-nowrap lg:justify-center sm:flex-row">
      {contactLinks.map(({ id, link, name, img, alt }: iSocialLinks) => (
        <li
          className="flex flex-col w-full md:w-auto md:flex-row "
          key={id}
        >
          <a
            className="flex flex-row justify-center px-4 font-semibold text-gray-700 transition-all duration-300 ease-in bg-gray-100 border border-gray-800 rounded-lg h-14 lg:justify-around lg:w-40 hover:bg-gray-700 dark:hover:bg-gray-100 dark:text-gray-100 dark:hover:text-gray-700 dark:border-gray-100 hover:text-gray-100 dark:bg-gray-700"
            href={link}
            target="_blank"
          >
            <div className="flex flex-row items-center justify-start w-32 gap-1 md:w-28">
              <figure className="flex flex-row items-center w-12 h-14">
                <Image
                  width={500}
                  height={500}
                  className="w-10 h-10 "
                  src={img}
                  alt={alt}
                />
              </figure>
              <p className="text-md lg:text-base">{name}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactButtons;
