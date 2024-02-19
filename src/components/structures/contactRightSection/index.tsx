"use client";

import ContactButtons from "@/components/fragments/contactButtons";
import CvContact from "../cvContact";

const ContactRightSection = () => {
  return (
    <section className="flex flex-col justify-center w-full p-4 bg-gray-900 border rounded-b-lg dark:text-gray-100 lg:rounded-r-lg lg:rounded-none bg-opacity-5 lg:p-8 dark:border-gray-700 backdrop-blur-sm">
      <div className="mb-8">
        <div>
          <h3 className="text-2xl font-semibold sm:text-3xl">Contato</h3>
          <div className="my-2 font-semibold text-gray-600 lg:my-6 dark:text-gray-200">
            <p className="text-sm sm:text-base">
              Estou super animado em aplicar tudo o que aprendi e aprimorar
              minhas habilidades em um ambiente profissional desafiador.
            </p>
            <p className="mt-2 text-sm sm:text-base">
              Se quiser entrar em contato comigo, fique à vontade para me
              encontrar nas redes sociais abaixo:
            </p>
          </div>
        </div>
        <div className="my-6">
          <ContactButtons />
        </div>
        <div className="mt-8 font-semibold text-gray-600 dark:text-gray-200">
          <p className="text-sm sm:text-base">
            Será um prazer conversar com você sobre possíveis oportunidades de
            trabalho! Estou disponível para trocar ideias e explorar novas
            possibilidades.
          </p>
          <CvContact />
          <p className="mt-6 text-xl text-center sm:text-start sm:text-2xl">
            Aguardo o seu contato! 😄
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactRightSection;
