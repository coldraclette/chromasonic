'use client';

import { motion } from 'framer-motion';

interface LearnSectionHeadingProps {
  byline: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3?: string;
}

export default function LearnSectionHeading({
  byline,
  titleLine1,
  titleLine2,
  titleLine3,
}: LearnSectionHeadingProps) {
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
    >
      <h2 className="font-kraftig text-[16px] text-small-heading-mobile font-medium uppercase text-blue-400 lg:text-small-heading">
        {byline}
      </h2>
      <h3 className="flex flex-col pt-1 font-heading text-heading2-small leading-[34px] lg:text-[75px] lg:leading-[70px]">
        <span className="text-blue-400">{titleLine1}</span>
        <span className="text-blue-300">{titleLine2}</span>
        {titleLine3 && <span className="text-blue-200">{titleLine3}</span>}
      </h3>
    </motion.div>
  );
}
