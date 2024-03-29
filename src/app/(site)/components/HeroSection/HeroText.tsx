'use client';

import { motion } from 'framer-motion';

import { cn } from '../../utils/utils';

interface HeroTextProps {
  animatedTextLines: string[];
}

export default function HeroText({ animatedTextLines }: HeroTextProps) {
  const mobileColors = [
    'text-deepSkyBlue',
    'text-deepSkyBlue2',
    'text-ceruleanBlue',
    'text-ceruleanBlue',
    'text-lightSkyBlue',
    'text-veryLightSkyBlue',
  ];

  let globalWordIndex = 0;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="absolute bottom-0 left-0 px-5 pb-10 lg:px-10 lg:pb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Desktop view */}
      <div className="hidden lg:block">
        {animatedTextLines.map((line, index) => (
          <motion.h2
            key={index}
            variants={childVariants}
            className={cn('font-heading uppercase', {
              'text-deepSkyBlue2': index === 0,
              'text-lightSkyBlue': index === 1,
              'text-veryLightSkyBlue': index > 1,
            })}
          >
            {line}
          </motion.h2>
        ))}
      </div>
      {/* Mobile view */}
      <div className="h2 lg:hidden">
        {animatedTextLines.map((line, lineIndex) => (
          <div key={lineIndex}>
            {line.split(' ').map((word, wordIndex) => {
              const colorClass =
                mobileColors[globalWordIndex % mobileColors.length];
              globalWordIndex++;
              return (
                <motion.span
                  key={wordIndex}
                  variants={childVariants}
                  className={`block font-heading uppercase ${colorClass}`}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
