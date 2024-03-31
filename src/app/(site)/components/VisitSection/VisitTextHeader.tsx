'use client';

import { motion } from 'framer-motion';

import { cn } from '../../utils/utils';

interface VisitTextHeaderProps {
  byline: string;
  titleLines: string[];
  location: string;
  color: string;
}

export default function VisitTextHeader({
  byline,
  titleLines,
  location,
  color,
}: VisitTextHeaderProps) {
  return (
    <motion.div
      className="flex flex-col gap-1"
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
      <h2 className="text-small-heading-mobile font-medium uppercase lg:text-small-heading">
        <span
          className={cn('', {
            'text-green-400': color === 'green',
            'text-blue-400': color === 'blue',
            'text-red-400': color === 'red',
            'text-pink-400': color === 'pink',
            'text-cyan-400': color === 'cyan',
          })}
        >
          {byline}
        </span>
      </h2>
      <h3 className="flex flex-col font-heading text-[39px] leading-[38px] lg:text-[85px] lg:leading-[75px]">
        {titleLines.map((line, index) => (
          <span
            key={index}
            className={cn('uppercase', {
              'text-blue-400': index === 0 && color === 'blue',
              'text-blue-300': index > 0 && color === 'blue',
              'text-green-400': index === 0 && color === 'green',
              'text-green-300': index > 0 && color === 'green',
              'text-red-400': index === 0 && color === 'red',
              'text-red-300': index > 0 && color === 'red',
              'text-pink-400': index === 0 && color === 'pink',
              'text-pink-200': index > 0 && color === 'pink',
              'text-cyan-400': index === 0 && color === 'cyan',
              'text-cyan-300': index > 0 && color === 'cyan',
            })}
          >
            {line}
          </span>
        ))}
      </h3>
      <p
        className={cn(
          'font-body text-[14px] uppercase leading-[20px] lg:text-[22px] lg:leading-[36px]',
          {
            'text-green-200': color === 'green',
            'text-blue-200': color === 'blue',
            'text-red-200': color === 'red',
            'text-pink-200': color === 'pink',
            'text-cyan-200': color === 'cyan',
          }
        )}
      >
        {location}
      </p>
    </motion.div>
  );
}
