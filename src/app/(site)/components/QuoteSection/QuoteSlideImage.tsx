import Image from 'next/image';

import { urlForImage } from '../../../../../sanity/lib/image';
import { ImageType } from '../../types';
import { cn } from '../../utils/utils';

interface QuoteSlideImageProps {
  image: ImageType;
  isEven: boolean;
}

export default function QuoteSlideImage({
  image,
  isEven,
}: QuoteSlideImageProps) {
  return (
    <div className={cn(`relative`, { 'order-1': isEven, 'order-2': !isEven })}>
      <Image
        src={urlForImage(image)}
        alt="Slide image"
        fill
        className="z-[1] h-full w-full object-cover mix-blend-luminosity"
      />
    </div>
  );
}
