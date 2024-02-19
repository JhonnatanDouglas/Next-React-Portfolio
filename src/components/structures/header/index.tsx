'use client';

import HeaderLogo from '@/components/fragments/logo';
import { useContext } from 'react';
import { HeaderNav, NavLinks } from '../navigation';
import ButtonThemeSwitch from '../themeSwitchButton';
import { HeaderContext } from '@/contexts/header';

const HeaderDefault = () => {
  const { isOpen } = useContext(HeaderContext);

  return (
    <>
      <header className='shadow-md transition-all duration-300 ease-linear dark:bg-gray-700 bg-gray-700 backdrop-blur-sm dark:backdrop-blur-sm fixed top-0 left-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-700 dark:border-gray-200 pb-1'>
        <div className='flex items-center justify-between w-full px-2 py-2 mx-auto transition-all duration-300 ease-linear md:max-w-screen-xl sm:px-8'>
          <HeaderLogo />
          <div className='flex h-8 ml-auto sm:mr-3'>
            <HeaderNav />
          </div>
          <div className='ml-2 align-middle h-min sm:ml-0'>
            <ButtonThemeSwitch />
          </div>
        </div>
        {isOpen ? (
          <div className='flex flex-row items-center w-full mb-1 md:hidden justify-evenly'>
            <NavLinks />
          </div>
        ) : null}
      </header>
    </>
  );
};

export default HeaderDefault;
