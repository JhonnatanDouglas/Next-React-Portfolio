"use client";

import { iChildrenProps } from "@/interfaces/standartInterfaces";

const DefaultLayout = ({ children }: iChildrenProps) => {
  return <main className="flex lg:w-screen lg:h-screen">{children}</main>;
};

export default DefaultLayout;
