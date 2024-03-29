'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useInView } from 'framer-motion';

import { urlForImage } from '../../../../../sanity/lib/image';
import { SlideType } from '../../types';
import { cn } from '../../utils/utils';

interface QuoteSectionProps {
  data: {
    slides: SlideType[];
  };
}

export default function QuoteSection({ data }: QuoteSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    if (data.slides.length <= 1 || !isInView) {
      return;
    }

    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveSlideIndex((current) => (current + 1) % data.slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView, data.slides.length]);

  if (!data || !data.slides.length) return null;

  const fadeAnimation = {
    initial: { opacity: 0 },
    animate: {
      opacity: isInView ? 1 : 0,
      transition: { ease: [0.76, 0, 0.24, 1], duration: 0.4 },
    },
    exit: { opacity: 0 },
  };

  const isEven = (index: number) => index % 2 === 0;

  return (
    <div className="flex h-[90vh] w-full items-center justify-center" ref={ref}>
      <div
        className={cn('relative h-full w-full', {
          'bg-black': !data.slides[activeSlideIndex].color,
          'bg-darkGreen': data.slides[activeSlideIndex].color === 'green',
          'bg-lightPurple': data.slides[activeSlideIndex].color === 'purple',
          'bg-deepPink': data.slides[activeSlideIndex].color === 'red',
          'bg-darkPurple': data.slides[activeSlideIndex].color === 'blue',
          'bg-lightBlue': data.slides[activeSlideIndex].color === 'lightBlue',
        })}
      >
        {isInView && (
          <motion.div
            key={data.slides[activeSlideIndex]._key}
            variants={fadeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid h-full w-full lg:grid-cols-2 "
            viewport={{ once: true, amount: 0.5 }}
          >
            <div
              className={cn('relative', {
                'order-1': isEven(activeSlideIndex),
                'order-2': !isEven(activeSlideIndex),
              })}
            >
              <Image
                src={urlForImage(data.slides[activeSlideIndex].image)}
                alt="Slide image"
                fill
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className={cn(
                'absolute z-10 flex h-full w-full flex-col justify-between p-10 lg:relative',
                {
                  'order-1': !isEven(activeSlideIndex),
                  'order-2': isEven(activeSlideIndex),
                }
              )}
            >
              {[
                data.slides[activeSlideIndex].line1,
                data.slides[activeSlideIndex].line2,
                data.slides[activeSlideIndex].line3,
              ].map((line, index) => (
                <p
                  className={cn(
                    'font-heading text-[39px] uppercase leading-[40px] lg:text-quote-heading',
                    {
                      'text-right': index === 2,
                      'text-lightGreen':
                        data.slides[activeSlideIndex].color === 'green' &&
                        (index === 0 || index === 1),
                      'text-paleGreen3':
                        data.slides[activeSlideIndex].color === 'green' &&
                        index === 2,
                      'text-lightPink2':
                        data.slides[activeSlideIndex].color === 'purple' &&
                        (index === 0 || index === 1),
                      'text-neonPink':
                        data.slides[activeSlideIndex].color === 'purple' &&
                        index === 2,
                      'text-lightRed':
                        data.slides[activeSlideIndex].color === 'red' &&
                        (index === 0 || index === 1),
                      'text-brightRed2':
                        data.slides[activeSlideIndex].color === 'red' &&
                        index === 2,
                      'text-quoteLightBlue':
                        data.slides[activeSlideIndex].color === 'lightBlue' &&
                        (index === 0 || index === 1),
                      'text-quoteLightBlue2':
                        data.slides[activeSlideIndex].color === 'lightBlue' &&
                        index === 2,
                      'text-quoteBlue':
                        data.slides[activeSlideIndex].color === 'blue' &&
                        (index === 0 || index === 1),
                      'text-quoteBlue2':
                        data.slides[activeSlideIndex].color === 'blue' &&
                        index === 2,
                    }
                  )}
                  key={index}
                >
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
