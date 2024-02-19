"use client";

import ButtonDefault from "@/components/fragments/button";
import { iButtonGroup } from "@/interfaces/standartInterfaces";

const PageButtonGroup = ({
  buttonOne,
  buttonTwo,
  buttonThree,
  routeOne,
  routeTwo,
  routeThree,
}: iButtonGroup) => {
  return (
    <div className="flex flex-col items-center gap-2 mb-4 md:gap-4 lg:mt-10 xl:mt-2 sm:mt-2 sm:flex-row justify-evenly">
      <ButtonDefault goToPage={routeOne}>{buttonOne}</ButtonDefault>
      <ButtonDefault goToPage={routeTwo}>{buttonTwo}</ButtonDefault>
      <ButtonDefault goToPage={routeThree}>{buttonThree}</ButtonDefault>
    </div>
  );
};

export default PageButtonGroup;
