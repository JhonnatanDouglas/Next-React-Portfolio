"use client";

import { RepositoryContext } from "@/contexts/fromRepository";
import Image from "next/image";
import { useContext } from "react";

const FooterLinks = () => {
  const { allFooterLinks } = useContext(RepositoryContext);

  return (
    <ul className="flex flex-wrap items-center gap-3 mt-3 text-sm font-medium sm:mt-0">
      {allFooterLinks.map(({ id, link, img, alt }) => (
        <li key={id}>
          <a
            href={link}
            target="_blank"
          >
            <Image
              width={500}
              height={500}
              className="w-6 rounded-md hover:animate-pulse"
              src={img}
              alt={alt}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
