import { motion } from 'framer-motion';

import { cn } from '../../utils/utils';

interface GridItemTextProps {
  text: string;
  color: string;
}

export default function GridItemText({ text, color }: GridItemTextProps) {
  return (
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
            delay: 0.2,
          },
        },
      }}
      className={cn('px-5 font-body text-body-mobile lg:px-20 lg:text-body', {
        'text-lightGreen2': color === 'green',
        'text-softBlue2': color === 'blue',
        'text-salmonLight': color === 'red',
      })}
    >
      {text}
    </motion.p>
  );
}
