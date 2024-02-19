"use client";

import { iChildrenProps } from "@/interfaces/standartInterfaces";

const LayoutHomeMain = ({ children }: iChildrenProps) => {
  return (
    <div className="flex flex-col-reverse flex-grow w-full px-2 pb-10 m-auto mx-auto mb-auto transition-all duration-300 ease-linear lg:pb-20 sm:px-8 pt-28 lg:max-w-screen-xl lg:flex-row">
      {children}
    </div>
  );
};

export default LayoutHomeMain;
