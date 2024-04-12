'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { urlForImage } from '../../../../../sanity/lib/image';
import { ImageType } from '../../types';

interface VisitImageProps {
  image: ImageType;
}

export default function VisitImage({ image }: VisitImageProps) {
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
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.3,
          },
        },
      }}
      className="relative h-[280px] w-full lg:h-[60vh] lg:min-h-[650px]"
    >
      <Image
        src={urlForImage(image)}
        alt=""
        fill
        className="h-full w-full object-cover"
        quality={100}
        sizes="(max-width: 640px) 1024px, (max-width: 768px) 1024px, (max-width: 1024px) 1024px, 2400px"
      />
    </motion.div>
  );
}
