'use client';

import '@splidejs/react-splide/css';

import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { motion } from 'framer-motion';

import { urlForImage } from '../../../../../sanity/lib/image';
import { ImageType } from '../../types';

interface ImageSplideProps {
  images: ImageType[];
}

export default function ImageSplide({ images }: ImageSplideProps) {
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
        options={{
          type: 'loop',
          perPage: 1,
          autoplay: true,
          interval: 4000,
          arrows: false,
        }}
      >
        {images.map((image: ImageType) => (
          <SplideSlide
            key={image._key}
            className="h-52 w-full lg:h-[70vh] lg:min-h-[600px]"
          >
            <Image
              src={urlForImage(image)}
              alt="Slide image"
              fill
              className="h-full w-full object-cover"
            />
          </SplideSlide>
        ))}
      </Splide>
    </motion.div>
  );
}
