import { motion } from 'framer-motion';

import { cn } from '../../utils/utils';

interface HeroTextMobileProps {
  textLines: string[];
}

export default function HeroTextMobile({ textLines }: HeroTextMobileProps) {
  let globalWordIndex = 0;

  const mobileColors = [
    'text-cyan-300',
    'text-cyan-300',
    'text-cyan-200',
    'text-cyan-200',
    'text-cyan-100',
    'text-cyan-100',
  ];

  return (
    <div className="h2 lg:hidden">
      {textLines.map((line, index) => (
        <motion.h2
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className={cn(
            'font-heading text-heading2-small uppercase leading-[34px]',
            {
              'text-cyan-300': index === 0,
              'text-cyan-200': index === 1,
              'text-cyan-100': index > 1,
            }
          )}
        >
          {line}
        </motion.h2>
      ))}
      {/* {textLines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split(' ').map((word, wordIndex) => {
            const colorClass =
              mobileColors[globalWordIndex % mobileColors.length];
            globalWordIndex++;
            return (
              <motion.span
                key={wordIndex}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className={`block font-heading text-[29px] uppercase ${colorClass}`}
              >
                {word}
              </motion.span>
            );
          })} */}
      {/* </div> */}
      {/* ))} */}
    </div>
  );
}
