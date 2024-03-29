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
