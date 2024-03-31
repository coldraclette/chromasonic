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
      className="border-red-50 border-b"
    >
      <h3
        onClick={toggleAccordion}
        className="text-red-50 flex cursor-pointer items-center justify-between py-4 font-medium lg:text-[22px] lg:leading-[28.5px]"
      >
        {title}
      </h3>
      <div
        className={`transition-max-height overflow-hidden duration-500 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="text-red-50 pb-4 lg:text-[22px] lg:leading-[28.5px]">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
