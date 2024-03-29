'use client';

import { motion } from 'framer-motion';

import { TextProps } from '../../types';
import TextContent from '../TextContent';
import SignUp from './SignUp';
import Socials from './Socials';

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
      className="flex h-full w-full flex-col gap-20 bg-darkGreen p-5 lg:gap-44 px-5 pt-10 lg:px-10 lg:py-32"
    >
      <motion.div
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
        className="grid lg:grid-cols-2 gap-8"
      >
        <SignUp
          signUpText={data.signUpInvitationText}
          investorText={data.investorInquiresText}
        />
        <Socials
          instagramLink={data.instagramLink}
          email={data.email}
          contact={data.contactLink}
        />
      </motion.div>
      <img src="/logoGreen.png" alt="logo" />
    </div>
  );
}
