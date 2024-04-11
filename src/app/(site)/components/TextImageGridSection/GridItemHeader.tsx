'use client';

import { motion } from 'framer-motion';

import { cn } from '../../utils/utils';

interface GridItemHeaderProps {
  title: string[];
  byline: string;
  textArea: string;
  color?: string;
}

export default function GridItemHeader({
  title,
  byline,
  textArea,
  color,
}: GridItemHeaderProps) {
  return (
    <motion.div
      className="px-5 lg:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        },
      }}
    >
      <h4
        className={cn(
          'font-kraftig text-small-heading-mobile font-medium uppercase lg:text-small-heading',
          {
            'text-green-400': color === 'green',
            'text-blue-400': color === 'blue',
            'text-red-400': color === 'red',
            'text-pink-400': color === 'pink',
            'text-cyan-400': color === 'cyan',
          }
        )}
      >
        {byline}
      </h4>
      <h3 className="flex flex-col text-heading2-small leading-[34px] xl:leading-[65px] lg:text-heading2-medium xl:text-heading2-large">
        {title.map((title) => (
          <span
            className={cn('font-heading uppercase', {
              'text-green-200': color === 'green',
              'text-blue-200': color === 'blue',
              'text-red-200': color === 'red',
              'text-pink-200': color === 'pink',
              'text-cyan-200': color === 'cyan',
            })}
            key={title}
          >
            {title}
          </span>
        ))}
      </h3>
    </motion.div>
  );
}
