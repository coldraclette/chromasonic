'use client';

import { useState } from 'react';
import Link from 'next/link';

import { cn } from '../../utils/utils';
import LogoBlack from '/public/logoBlack.svg';

export default function Header({ ticketLink }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItemClasses =
    'mb-4 font-heading text-big-heading-mobile uppercase leading-[30px] text-grey transition-colors hover:text-[#656565] lg:text-big-heading lg:text-lightGrey';

  return (
    <div className="fixed left-0 top-8 z-20 flex w-full justify-between px-5 lg:top-11 lg:px-10">
      <div
        className="fixed left-0 top-0 z-10 flex h-[130px] w-full justify-between"
        style={{
          background:
            'linear-gradient(0deg, rgba(225, 225, 225, 0.00) 0%, rgba(0, 0, 0, 0.21) 51.86%, rgba(0, 0, 0, 0.51) 100%)',
        }}
      ></div>
      <div
        className={cn(
          'z-20 cursor-pointer font-heading uppercase text-white lg:text-2xl',
          {
            'z-20': !isMenuOpen,
            'z-10': isMenuOpen,
          }
        )}
        onClick={toggleMenu}
      >
        menu
      </div>

      <Link
        className={cn('z-20 font-heading uppercase text-white lg:text-2xl', {
          'z-20': !isMenuOpen,
          'z-10': isMenuOpen,
        })}
        href={ticketLink || ''}
      >
        Tickets
      </Link>

      <div
        className={`fixed left-0 top-0 h-screen w-full  transform bg-black px-5 lg:h-auto lg:px-10 lg:pb-12 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-500 ease-in-out`}
        style={{ zIndex: 10 }}
      >
        <div className="mb-10 flex pt-11">
          <div
            className="cursor-pointer font-heading uppercase text-white"
            onClick={toggleMenu}
          >
            close
          </div>
          <div className="absolute left-1/2 top-20 z-10 hidden h-10 -translate-x-1/2 justify-center px-5 lg:top-11 lg:flex">
            <LogoBlack />
          </div>
        </div>

        <div className="flex h-full flex-col text-white">
          <Link onClick={toggleMenu} className={menuItemClasses} href="/">
            Home
          </Link>
          <Link onClick={toggleMenu} className={menuItemClasses} href="/#learn">
            learn
          </Link>
          <Link onClick={toggleMenu} className={menuItemClasses} href="/#visit">
            visit
          </Link>
          <Link
            onClick={toggleMenu}
            className={menuItemClasses}
            href="/#connect"
          >
            connect
          </Link>
          <Link onClick={toggleMenu} className={menuItemClasses} href="/faq">
            faq
          </Link>
        </div>
      </div>
    </div>
  );
}
