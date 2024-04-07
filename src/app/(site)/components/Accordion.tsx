'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface AccordionProps {
  title: string;
  text: string;
}

export default function Accordion({ title, text }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

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
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
        },
      }}
      className="border-b border-red-50"
    >
      <h3
        onClick={toggleAccordion}
        className="flex cursor-pointer items-center justify-between py-4 font-kraftig leading-[1.313rem] text-red-50 lg:py-[19.2px] lg:text-[22px] lg:leading-[28.5px]"
      >
        {title}
      </h3>
      <div
        className={`transition-max-height overflow-hidden duration-500 ease-in-out ${
          isOpen ? 'max-h-[800px]' : 'max-h-0'
        }`}
      >
        <p className="pb-4 font-body leading-[1.313rem] text-red-50 lg:pb-[19.2px] lg:text-[22px] lg:leading-[28.5px]">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
