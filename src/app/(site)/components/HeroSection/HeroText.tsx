'use client';

import { motion } from 'framer-motion';

import { cn } from '../../utils/utils';
import HeroTextDesktop from './HeroTextDesktop';
import HeroTextMobile from './HeroTextMobile';

interface HeroTextProps {
  animatedTextLines: string[];
}

export default function HeroText({ animatedTextLines }: HeroTextProps) {
  return (
    <motion.div
      className="absolute bottom-16 left-0 px-5 lg:px-10"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.4,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <HeroTextDesktop textLines={animatedTextLines} />
      <HeroTextMobile textLines={animatedTextLines} />
    </motion.div>
  );
}
