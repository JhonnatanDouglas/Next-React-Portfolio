"use client";

import Link from "next/link";
import reactImg from "../../../assets/icons/react.svg";
import nextJsImg from "../../../assets/icons/nextjs.svg";
import Image from "next/image";

const FooterOwner = () => {
  return (
    <div className="flex flex-col items-center gap-1 text-sm font-semibold text-gray-100 md:flex-row sm:flex-row sm:text-center dark:text-gray-100">
      <div className="flex flex-col-reverse md:gap-1 md:flex-row text-center">
        <span>
          © 2024
          <strong className="ml-1 font-semibold">
            <Link
              href="/contact"
              className="hover:underline"
            >
              - JhonnatanDev
            </Link>
          </strong>
        </span>
        <span className="hidden md:block"> | </span>
        <span>Desenvolvido em NextJs com React</span>
      </div>
      <div className="group-[]: flex flex-row ml-1">
        <Image
          className="w-8 mt-1 sm:mt-0 md:w-6 hover:animate-spin group-hover:animate-spin-slow animate-spin-slow"
          src={reactImg}
          alt="Portfólio | Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End | Kenzie Academy Brasil | Programador Web, React | Desenvolvedor Junior"
        />
      </div>
    </div>
  );
};

export default FooterOwner;
