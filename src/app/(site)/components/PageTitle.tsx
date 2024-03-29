'use client';

import { motion } from 'framer-motion';

interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <motion.h2
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
      className="text-salmon2 text-[39px] leading-[40px] lg:text-[85px] lg:leading-[80px]"
    >
      {title}
    </motion.h2>
  );
}
