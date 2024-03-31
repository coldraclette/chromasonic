'use client';

import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

import { useAutomaticSlide } from '../../hooks/useAutomaticSlide';
import { useSlideBackground } from '../../hooks/useSlideBackground';
import { SlideType } from '../../types';
import QuoteSlide from './QuoteSlide';

interface QuoteSectionProps {
  data: {
    slides: SlideType[];
  };
}

export default function QuoteSection({ data }: QuoteSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const backgroundColorClass = useSlideBackground(
    data.slides[activeSlideIndex].color
  );

  useAutomaticSlide(isInView, data.slides.length, setActiveSlideIndex);

  if (!data || !data.slides.length) return null;

  return (
    <div
      className={`flex h-[90vh] w-full items-center justify-center lg:min-h-[700px] ${backgroundColorClass}`}
      ref={ref}
    >
      {isInView && (
        <QuoteSlide
          key={data.slides[activeSlideIndex]._key}
          slide={data.slides[activeSlideIndex]}
          index={activeSlideIndex}
        />
      )}
    </div>
  );
}
