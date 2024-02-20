"use client";

import { useEffect } from "react";

interface iErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: iErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="w-screen h-screen flex">
      <div className=" m-auto">
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className="lg:text-8xl text-4xl sm:text-6xl font-bold text-gray-700 dark:text-gray-200">
            Ops!
          </h1>

          <p className="lg:text-4xl text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-200 my-4">
            Algo Deu Errado
          </p>
          <button
            onClick={reset}
            className="w-full px-4 py-2 font-medium text-center text-gray-100 transition-all duration-300 ease-linear bg-gray-700 rounded-md lg:text-lg text-md dark:text-gray-700 dark:hover:text-gray-100 dark:bg-gray-100 dark:hover:bg-purple-600 hover:bg-purple-600"
          >
            Tente Novamente
          </button>
        </div>
      </div>
    </main>
  );
};

export default Error;
