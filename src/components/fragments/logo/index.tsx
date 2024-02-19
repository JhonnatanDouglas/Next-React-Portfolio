"use client";

import { DarkModeContext } from "@/contexts/darkmode";
import Link from "next/link";
import { useContext } from "react";
import whiteLogo from "../../../assets/imgs/logo/white-jhonnatandev-logo.png";
import Image from "next/image";

const HeaderLogo = () => {
  const { themeMode } = useContext(DarkModeContext);

  return (
    <>
      {themeMode ? (
        <figure className="w-40 sm:w-48">
          <Link href="/">
            <Image
              src={whiteLogo}
              alt="Marca, Logo | JhonnatanDev | Portfólio | Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End | Kenzie Academy Brasil | Programador Web, React | Desenvolvedor Junior"
            />
          </Link>
        </figure>
      ) : (
        <figure className="w-40 sm:w-48">
          <Link href="/">
            <Image
              src={whiteLogo}
              alt="Marca, Logo | JhonnatanDev | Portfólio | Jhonnatan Douglas Ferreira Araujo - Desenvolvedor Web FullStack, Back-End e Front-End | Kenzie Academy Brasil | Programador Web, React | Desenvolvedor Junior"
            />
          </Link>
        </figure>
      )}
    </>
  );
};

export default HeaderLogo;
