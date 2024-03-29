'use client';

import { motion } from 'framer-motion';

import { cn } from '../../utils/utils';
import Byline from '../Byline';
import TextContent from '../TextContent';

interface VisitTextProps {
  byline: string;
  titleLines: string[];
  location: string;
  textArea: string;
  text: any[];
  color: string;
}

export default function VisitText({
  byline,
  titleLines,
  location,
  textArea,
  text,
  color,
}: VisitTextProps) {
  return (
    <div className="flex flex-col justify-between gap-[50px] px-5 py-10 lg:px-10 lg:py-32">
      <div className="flex flex-col gap-1">
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
        >
          <Byline color="text-vividBlue2" text={byline} />
        </motion.div>
        <motion.h3
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
          className="flex flex-col font-heading text-[39px] leading-[38px] lg:text-[85px] lg:leading-[75px]"
        >
          {titleLines.map((line, index) => (
            <span
              key={index}
              className={cn('', {
                'text-vividBlue2': index === 0 && color === 'blue',
                'text-royalBlue2': index > 0 && color === 'blue',
                'text-brightGreen2': index === 0 && color === 'green',
                'text-paleGreen2': index > 0 && color === 'green',
              })}
            >
              {line}
            </span>
          ))}
        </motion.h3>
        <motion.p
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
          className={cn(
            'font-body text-[14px] leading-[20px] lg:text-[22px] lg:leading-[36px]',
            {
              'text-cornflowerBlue': color === 'blue',
              'text-lightGreen3': color === 'green',
            }
          )}
        >
          {location}
        </motion.p>
      </div>
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
        className="grid gap-10 lg:grid-cols-2"
      >
        <p
          className={cn(
            'font-body text-[14px] font-medium leading-[16px] lg:text-[22px] lg:leading-[28px]',
            {
              'text-softBlue3': color === 'blue',
              'text-lightGreen3': color === 'green',
            }
          )}
        >
          {textArea}
        </p>
        <TextContent
          text={text}
          color={color}
          className="font-body text-[14px] font-medium uppercase leading-[16px] lg:text-[22px] lg:leading-[24px]"
        />
      </motion.div>
    </div>
  );
}
