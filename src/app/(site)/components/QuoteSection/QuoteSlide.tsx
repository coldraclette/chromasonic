import { motion } from 'framer-motion';

import { useSlideBackground } from '../../hooks/useSlideBackground';
import { SlideType } from '../../types';
import { cn } from '../../utils/utils';
import QuoteSlideImage from './QuoteSlideImage';
import QuoteSlideText from './QuoteSlideText';

interface QuoteSlideProps {
  slide: SlideType;
  index: number;
}

export default function QuoteSlide({ slide, index }: QuoteSlideProps) {
  const backgroundClass = useSlideBackground(slide.color);
  const isEven = index % 2 === 0;

  const fadeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2, ease: 'easeInOut' } },
    exit: { opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      key={slide._key}
      variants={fadeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className={cn(
        'relative grid h-full w-full overflow-hidden lg:grid-cols-2',
        backgroundClass
      )}
      viewport={{ once: true, amount: 0.5 }}
    >
      <QuoteSlideImage
        image={slide.image}
        isEven={isEven}
        color={slide.color}
      />
      <QuoteSlideText slide={slide} isEven={isEven} />
    </motion.div>
  );
}
