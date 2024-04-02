'use client';

import { motion } from 'framer-motion';

interface LearnSectionBodyTextProps {
  textArea1: string;
  textArea2: string;
}

export default function LearnSectionBodyText({
  textArea1,
  textArea2,
}: LearnSectionBodyTextProps) {
  return (
    <motion.div
      className="grid lg:gap-[42px] lg:grid-cols-2"
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
      <p className="font-body text-body-mobile text-blue-100 lg:text-body lg:font-medium">
        {textArea1}
      </p>
      <p className="font-body text-body-mobile text-blue-100 lg:text-body lg:font-medium">
        {textArea2}
      </p>
    </motion.div>
  );
}
