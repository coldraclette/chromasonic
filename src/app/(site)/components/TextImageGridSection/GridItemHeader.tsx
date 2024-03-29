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
    <div className="px-5 lg:px-20">
      <motion.h4
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
        className={cn(
          'font-body text-small-heading-mobile font-medium uppercase lg:text-small-heading',
          {
            'text-brightGreen': color === 'green',
            'text-vividBlue': color === 'blue',
            'text-brightOrangeRed': color === 'red',
          }
        )}
      >
        {byline}
      </motion.h4>
      <motion.h3
        className="flex flex-col"
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
        {title.map((title) => (
          <span
            className={cn(
              'font-heading text-[32px] uppercase leading-[30px] lg:text-[65px] lg:leading-[55px]',
              {
                'text-paleGreen': color === 'green',
                'text-salmon': color === 'red',
                'text-blue': color === 'blue',
              }
            )}
            key={title}
          >
            {title}
          </span>
        ))}
      </motion.h3>
    </div>
  );
}
