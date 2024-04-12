import Image from 'next/image';

import { urlForImage } from '../../../../sanity/lib/image';
import { ImageType } from '../types';
import LogoRed from '/public/logoRed.svg';

interface BackgroundImagePageProps {
  image: ImageType;
}
export default function BackgroundImagePage({
  image,
}: BackgroundImagePageProps) {
  return (
    <div className="relative h-[230px] lg:h-[535px]">
      <div className="absolute top-20 z-10 flex h-10 w-full justify-center px-5 lg:top-11">
        <LogoRed />
      </div>
      <Image
        src={urlForImage(image)}
        alt=""
        fill
        className=" h-full w-full object-cover"
        quality={100}
        sizes="(max-width: 640px) 1024px, (max-width: 768px) 1024px, (max-width: 1024px) 1024px, 2400px"
        priority
      />
    </div>
  );
}
