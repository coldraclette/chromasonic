'use client';

import { useState } from 'react';
import Link from 'next/link';

import { cn } from '../../utils/utils';
import LogoBlack from '/public/logoBlack.svg';

export default function Header({ ticketLink }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed left-0 top-8 lg:top-11 z-20 flex w-full justify-between px-5 lg:px-10">
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
          <div className=" flex h-12 w-full justify-center px-5">
            <LogoBlack />
          </div>
        </div>

        <div className="flex h-full flex-col text-white">
          <Link
            onClick={toggleMenu}
            className="lg:text-lightGrey mb-4 font-heading text-big-heading-mobile uppercase text-grey lg:text-big-heading"
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            className="lg:text-lightGrey mb-4 font-heading text-big-heading-mobile uppercase text-grey lg:text-big-heading"
            href="/#learn"
          >
            learn
          </Link>
          <Link
            onClick={toggleMenu}
            className="lg:text-lightGrey mb-4 font-heading text-big-heading-mobile uppercase text-grey lg:text-big-heading"
            href="/#visit"
          >
            visit
          </Link>
          <Link
            onClick={toggleMenu}
            className="lg:text-lightGrey mb-4 font-heading text-big-heading-mobile uppercase text-grey lg:text-big-heading"
            href="/#connect"
          >
            connect
          </Link>
          <Link
            onClick={toggleMenu}
            className="lg:text-lightGrey mb-4 font-heading text-big-heading-mobile uppercase text-grey lg:text-big-heading"
            href="/faq"
          >
            faq
          </Link>
        </div>
      </div>
    </div>
  );
}
