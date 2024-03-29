import Image from 'next/image';

import { urlForImage } from '../../../../sanity/lib/image';
import { ImageType } from '../types';

interface BackgroundImagePageProps {
  image: ImageType;
}
export default function BackgroundImagePage({
  image,
}: BackgroundImagePageProps) {
  return (
    <div className="relative h-[230px] lg:h-[535px]">
      <Image
        src={urlForImage(image)}
        alt=""
        fill
        className=" h-full w-full object-cover"
      />
    </div>
  );
}
