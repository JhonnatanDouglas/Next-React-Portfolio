"use client";

import { iChildrenProps } from "@/interfaces/standartInterfaces";

const LayoutSkillsMain = ({ children }: iChildrenProps) => {
  return (
    <div className="flex flex-col flex-grow w-full p-2 pb-10 m-auto transition-all duration-300 ease-linear pt-28 lg:max-w-screen-xl lg:flex-row lg:pb-16 lg:pt-24 lg:h-min sm:pt-28 sm:px-8">
      {children}
    </div>
  );
};

export default LayoutSkillsMain;
