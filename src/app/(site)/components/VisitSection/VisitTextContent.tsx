'use client';

import { motion } from 'framer-motion';

import { cn } from '../../utils/utils';
import TextContent from '../TextContent';

interface VisitTextContentProps {
  textArea: string;
  text: any[];
  color: string;
}

export default function VisitTextContent({
  textArea,
  text,
  color,
}: VisitTextContentProps) {
  return (
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
      className="grid gap-[42px] lg:grid-cols-2"
    >
      <p
        className={cn(
          'font-body text-body-mobile lg:text-body lg:font-medium',
          {
            'text-green-100': color === 'green',
            'text-blue-100': color === 'blue',
            'text-red-100': color === 'red',
            'text-pink-100': color === 'pink',
            'text-cyan-100': color === 'cyan',
          }
        )}
      >
        {textArea}
      </p>
      <TextContent
        text={text}
        color={color}
        className="font-kraftig tracking-[0.66px] text-[14px] uppercase leading-[16px] lg:text-[22px] lg:leading-[24px]"
      />
    </motion.div>
  );
}
