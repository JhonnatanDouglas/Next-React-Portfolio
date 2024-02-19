"use client";

import { iChildrenProps } from "@/interfaces/standartInterfaces";

const LayoutProjectsMain = ({ children }: iChildrenProps) => {
  return (
    <div className="flex flex-col-reverse flex-grow w-full p-2 pb-10 m-auto transition-all duration-300 ease-linear pt-28 pb-auto lg:pt-28 xl:pt-0 lg:max-w-screen-xl lg:flex-row lg:pb-20 sm:pt-28 xl:mb-0 xl:mt-28 sm:px-8 ">
      {children}
    </div>
  );
};

export default LayoutProjectsMain;
