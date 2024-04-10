import { motion } from 'framer-motion';

import { cn } from '../../utils/utils';

interface HeroTextDesktopProps {
  textLines: string[];
}

export default function HeroTextDesktop({ textLines }: HeroTextDesktopProps) {
  const formatText = (text: string) => {
    const parts = text.split('+');

    return parts.reduce((acc, part, index) => {
      if (index < parts.length - 1) {
        return [
          ...acc,
          part,
          <span key={index} style={{ marginRight: '5px' }}>
            +
          </span>,
        ];
      } else {
        return [...acc, part];
      }
    }, []);
  };
  return (
    <div className="hidden lg:block">
      {textLines.map((line, index) => (
        <motion.h2
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className={cn('font-heading uppercase lg:text-[75px] leading-[70px]', {
            'text-cyan-300': index === 0,
            'text-cyan-200': index === 1,
            'text-cyan-100': index > 1,
          })}
        >
          {formatText(line)}
        </motion.h2>
      ))}
    </div>
  );
}
