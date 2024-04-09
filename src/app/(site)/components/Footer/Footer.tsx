'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { TextProps } from '../../types';
import SignUp from './SignUp';
import Socials from './Socials';
import LogoGreen from '/public/logoGreen.svg';

interface FooterProps {
  data: {
    firstColumn: TextProps[];
    secondColumn: TextProps[];
    email: string;
    instagramLink: string;
    signUpInvitationText: string;
    investorInquiresText: string;
    contactLink: string;
  };
}

export default function Footer({ data }: FooterProps) {
  return (
    <div
      id="connect"
      className="h-full w-full bg-green-500 px-5 pb-6 pt-7 lg:px-10 lg:pb-11 lg:pt-[60px]"
    >
      <motion.div
        className="flex flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.4,
            },
          },
        }}
      >
        <div className="grid gap-8 pb-[84px] lg:grid-cols-2 lg:pb-[177px]">
          <SignUp
            signUpText={data.signUpInvitationText}
            investorText={data.investorInquiresText}
          />
          <Socials
            instagramLink={data.instagramLink}
            email={data.email}
            contact={data.contactLink}
          />
        </div>
        <Link href="/" className="w-full">
          <div className="flex h-16 items-center justify-center overflow-hidden lg:h-auto">
            <Image src="logoGreen.svg" width={1000} height={40} alt="Logo" className='w-full h-auto' />
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
