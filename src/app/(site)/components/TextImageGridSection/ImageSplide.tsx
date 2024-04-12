'use client';

import '@splidejs/react-splide/css';

import { useRef } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { motion } from 'framer-motion';

import { urlForImage } from '../../../../../sanity/lib/image';
import { ImageType } from '../../types';

interface ImageSplideProps {
  images: ImageType[];
}

export default function ImageSplide({ images }: ImageSplideProps) {
  const splideRef = useRef(null);

  const handleSlideClick = () => {
    splideRef.current.splide.go('>');
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          },
        },
      }}
      className="pb-5 pt-[14px] lg:pb-11 lg:pt-[50px]"
    >
      <Splide
        ref={splideRef}
        options={{
          type: 'loop',
          perPage: 1,
          arrows: false,
        }}
      >
        {images.map((image: ImageType) => (
          <SplideSlide
            key={image._key}
            className="aspect-4/5 w-full cursor-pointer lg:aspect-auto lg:h-[80vh] lg:min-h-[600px]"
            onClick={handleSlideClick}
          >
            <Image
              src={urlForImage(image)}
              alt="Slide image"
              fill
              className="h-full w-full object-cover"
              quality={100}
              sizes="(max-width: 640px) 1024px, (max-width: 768px) 1024px, (max-width: 1024px) 1024px, 2400px"
            />
          </SplideSlide>
        ))}
      </Splide>
    </motion.div>
  );
}
