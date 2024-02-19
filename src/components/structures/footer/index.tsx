"use client";

import FooterLinks from "@/components/fragments/footerLinks";
import FooterOwner from "@/components/fragments/footerOwner";

const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 w-full mt-auto bg-gray-700 border-t shadow-md border-t-gray-700 dark:border-t-gray-200 lg:fixed dark:bg-gray-700">
      <div className="flex flex-col-reverse items-center justify-center w-full max-w-screen-xl gap-4 px-8 py-3 mx-auto sm:justify-between sm:flex-row md:flex md:items-center md:justify-between">
        <FooterOwner />
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;
