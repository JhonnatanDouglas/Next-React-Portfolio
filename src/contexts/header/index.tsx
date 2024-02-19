import { iHeaderContext } from "@/interfaces/darkmodeInterfaces";
import { iChildrenProps } from "@/interfaces/standartInterfaces";
import { createContext, useState } from "react";

const HeaderContext = createContext({} as iHeaderContext);

const HeaderProvider = ({ children }: iChildrenProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNav: () => void = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderContext.Provider value={{ toggleNav, isOpen }}>
        {children}
      </HeaderContext.Provider>
    </>
  );
};

export { HeaderProvider, HeaderContext };
