"use client";

import MiniButton from "@/components/fragments/cvButton";

const CvContact: () => JSX.Element = () => {
  return (
    <div className="flex flex-wrap items-center my-8 sm:my-4 sm:flex-row">
      <h3 className="mb-1 mr-2 text-lg font-semibold text-gray-700 sm:text-xl dark:text-gray-100">
        Acesse meu currículo:{" "}
      </h3>
      <div className="flex flex-row">
        <MiniButton goToPage="https://drive.google.com/file/d/1Tg1rG_zpypIafWcn-wCtZUphx48gqlDl/view">
          Visualizar
        </MiniButton>
        <MiniButton goToPage="https://drive.google.com/uc?export=download&id=1Tg1rG_zpypIafWcn-wCtZUphx48gqlDl">
          Download
        </MiniButton>
      </div>
    </div>
  );
};

export default CvContact;
