'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { LearnItemType } from '../../types';
import { cn } from '../../utils/utils';
import Byline from '../Byline';

interface LearnSectionProps {
  data: {
    byline: string;
    titleLine1: string;
    titleLine2: string;
    textArea1: string;
    textArea2: string;
    items: LearnItemType[];
  };
}

export default function LearnSection({ data }: LearnSectionProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div
      id="learn"
      className="flex h-full w-full flex-col gap-16 bg-deepPink px-5 pb-40 pt-10 lg:px-10 lg:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <Byline text={data.byline} color="text-brightOrangeRed" />
        <h3 className="flex flex-col font-heading text-visit-heading-mobile lg:text-visit-heading">
          <span className="text-salmon">{data.titleLine1}</span>
          <span className="text-salmonLight">{data.titleLine2}</span>
        </h3>
      </motion.div>

      <motion.div
        className="grid gap-10 lg:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <p className="font-body text-body-mobile text-lightCoral lg:text-body">
          {data.textArea1}
        </p>
        <p className="font-body text-body-mobile text-lightCoral lg:text-body">
          {data.textArea2}
        </p>
      </motion.div>

      <div className="flex flex-col gap-11 lg:flex-row lg:gap-10">
        {data.items.map((item, index) => {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              key={item._key}
              className="flex items-center justify-center gap-6 lg:flex-col lg:gap-12 lg:text-center"
            >
              <div
                className={cn('relative w-1/2 lg:w-auto lg:flex-1', {
                  'order-2 lg:order-none': index === 1,
                })}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  height={400}
                  width={400}
                  className="max-h-[140px] object-contain lg:max-h-[250px]"
                />
              </div>
              <div className="flex w-1/2 flex-col gap-4 lg:w-full">
                <h4 className="font-heading text-[22px] text-lightCoral lg:text-[30px]">
                  {item.title}
                </h4>
                <p className="font-body text-[14px] leading-[16.5px] text-lightCoral lg:px-10 lg:text-[18px] lg:leading-[22px]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
