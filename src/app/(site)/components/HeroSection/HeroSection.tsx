import Image from 'next/image';

import { urlForImage } from '../../../../../sanity/lib/image';
import { ImageType } from '../../types';
import HeroText from './HeroText';

interface HeroSectionProps {
  data: {
    backgroundImage: ImageType;
    animatedTextLines: string[];
  };
}

export default function HeroSection({ data }: HeroSectionProps) {
  const { backgroundImage, animatedTextLines } = data;

  return (
    <div className="relative h-[90vh] w-full bg-blue">
      <div className="flex justify-center">
        <img className="absolute top-0 z-10 lg:w-1/4 pt-20 lg:pt-8 px-5" src="/logoBlue.png" />
      </div>
      <Image
        src={urlForImage(backgroundImage)}
        alt=""
        fill
        className="h-full w-full object-cover"
      />
      <HeroText animatedTextLines={animatedTextLines} />
    </div>
  );
}
