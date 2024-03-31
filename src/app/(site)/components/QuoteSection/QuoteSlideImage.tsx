import Image from 'next/image';

import { urlForImage } from '../../../../../sanity/lib/image';
import { ImageType } from '../../types';
import { cn } from '../../utils/utils';

interface QuoteSlideImageProps {
  image: ImageType;
  isEven: boolean;
  color: string;
}

export default function QuoteSlideImage({
  image,
  isEven,
  color,
}: QuoteSlideImageProps) {
  const colorMapping = {
    green: '#04AA55',
    pink: '#A606BC',
    blue: '#4208D5',
    red: '#CC014B',
    cyan: '#1A82E9',
  };
  const backgroundColor = colorMapping[color] || color;

  return (
    <div
      className={cn(
        `image-mix-blend-mode relative before:bg-[${backgroundColor}] before:absolute before:left-0 before:top-0 before:h-full before:w-full `,
        { 'order-1': isEven, 'order-2': !isEven }
      )}
    >
      <Image
        src={urlForImage(image)}
        alt="Slide image"
        fill
        className="z-[1] h-full w-full object-cover mix-blend-luminosity"
      />
    </div>
  );
}
