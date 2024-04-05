import { motion } from 'framer-motion';

import { cn } from '../../utils/utils';

interface HeroTextDesktopProps {
  textLines: string[];
}

export default function HeroTextDesktop({ textLines }: HeroTextDesktopProps) {
  return (
    <div className="hidden lg:block">
      {textLines.map((line, index) => (
        <motion.h2
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className={cn('lg:text-[75px] font-heading uppercase', {
            'text-cyan-400': index === 0,
            'text-cyan-200': index === 1,
            'text-cyan-100': index > 1,
          })}
        >
          {line}
        </motion.h2>
      ))}
    </div>
  );
}
