'use client';

import { motion } from 'framer-motion';

import { cn } from '../../utils/utils';

interface GridItemTextProps {
  text: string;
  text2: string;
  color: string;
}

export default function GridItemText({
  text,
  text2,
  color,
}: GridItemTextProps) {
  return (
    <motion.div
      className="grid px-5 gap-4 lg:grid-cols-2 lg:gap-[42px] lg:px-10"
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
            delay: 0.2,
          },
        },
      }}
    >
      <p className="font-body text-body-mobile lg:text-body">
        <span
          className={cn('', {
            'text-green-200': color === 'green',
            'text-blue-200': color === 'blue',
            'text-red-200': color === 'red',
            'text-pink-200': color === 'pink',
            'text-cyan-200': color === 'cyan',
          })}
        >
          {text}
        </span>
      </p>
      <p className="font-body text-body-mobile lg:text-body">
        <span
          className={cn('', {
            'text-green-200': color === 'green',
            'text-blue-200': color === 'blue',
            'text-red-200': color === 'red',
            'text-pink-200': color === 'pink',
            'text-cyan-200': color === 'cyan',
          })}
        >
          {text2}
        </span>
      </p>
    </motion.div>
  );
}
