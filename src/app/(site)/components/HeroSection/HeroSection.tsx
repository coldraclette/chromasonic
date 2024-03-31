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
    <div className="relative h-[90vh] min-h-[600px] w-full bg-blue">
      <div className="flex justify-center">
        <div className="absolute top-20 z-10 flex h-10 w-full justify-center px-5 lg:top-11 lg:h-12">
          <LogoBlue />
        </div>
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
