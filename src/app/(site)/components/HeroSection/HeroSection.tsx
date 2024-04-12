import Image from 'next/image';

import { urlForImage } from '../../../../../sanity/lib/image';
import { ImageType } from '../../types';
import HeroText from './HeroText';
import LogoBlue from '/public/logoBlue.svg';

interface HeroSectionProps {
  data: {
    backgroundImage: ImageType;
    animatedTextLines: string[];
  };
}

export default function HeroSection({ data }: HeroSectionProps) {
  const { backgroundImage, animatedTextLines } = data;

  return (
    <div className="bg-blue relative h-[95vh] min-h-[600px] w-full">
      <div className="flex justify-center">
        <div className="absolute top-20 z-10 flex h-10 w-full justify-center px-5 lg:top-11">
          <LogoBlue />
        </div>
      </div>
      <Image
        src={urlForImage(backgroundImage)}
        alt=""
        fill
        className="h-full w-full object-cover"
        quality={100}
        sizes="(max-width: 640px) 1024px, (max-width: 768px) 1024px, (max-width: 1024px) 1024px, 2400px"
        priority
      />
      <HeroText animatedTextLines={animatedTextLines} />
    </div>
  );
}
