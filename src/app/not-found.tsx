"use client";

import ButtonDefault from "@/components/fragments/button";

const NotFound = () => {
  return (
    <main className="w-screen h-screen flex">
      <div className=" m-auto">
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className="lg:text-8xl text-4xl sm:text-6xl font-bold text-gray-700 dark:text-gray-200">
            404
          </h1>
          <p className="lg:text-4xl text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-200 my-4">
            Página Não Encontrada
          </p>
          <ButtonDefault goToPage="/">Voltar ao Início</ButtonDefault>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
