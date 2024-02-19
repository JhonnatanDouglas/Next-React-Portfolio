"use client";

import { RepositoryContext } from "@/contexts/fromRepository";
import { iSocialLinks } from "@/interfaces/socialInterfaces";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const FooterLinks = () => {
  const { getAllFooterLinks } = useContext(RepositoryContext);
  const [footerLinks, setFooterLinks] = useState<[] | iSocialLinks[]>([]);

  useEffect(() => {
    (async () => {
      const datafooterLinks = await getAllFooterLinks();
      setFooterLinks(datafooterLinks);
    })();
  }, [getAllFooterLinks]);

  return (
    <ul className="flex flex-wrap items-center gap-3 mt-3 text-sm font-medium sm:mt-0">
      {footerLinks.map(({ id, link, img, alt }) => (
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
