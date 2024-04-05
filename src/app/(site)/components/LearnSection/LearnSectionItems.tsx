'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { LearnItemType } from '../../types';
import { cn } from '../../utils/utils';

interface LearnSectionItemsProps {
  items: LearnItemType[];
}

export default function LearnSectionItems({ items }: LearnSectionItemsProps) {
  return (
    <div className="flex flex-col gap-11 lg:grid lg:grid-cols-3 lg:gap-10">
      {items.map((item, index) => {
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
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
              },
            }}
            key={item._key}
            className="flex items-center justify-center gap-6 lg:flex-col lg:justify-start lg:gap-12 lg:text-center"
          >
            <div
              className={cn(
                'relative flex w-1/2 items-center lg:h-[261px] lg:w-auto',
                {
                  'order-2 lg:order-none': index === 1,
                }
              )}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                height={400}
                width={400}
                className={cn('max-h-[140px] object-contain lg:max-h-[250px]', {
                  'h-[160px]': index === 0,
                  'h-[233px]': index === 1,
                  'h-[250px]': index === 2,
                })}
              />
            </div>
            <div className="flex w-1/2 flex-col gap-4 lg:w-full">
              <h4 className="font-heading text-heading3-mobile uppercase text-blue-100 lg:text-heading3">
                {item.title}
              </h4>
              <p className="font-body text-[12.6px] text-xs text-blue-100 lg:px-10  lg:text-[18px] lg:leading-[28px] ">
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
