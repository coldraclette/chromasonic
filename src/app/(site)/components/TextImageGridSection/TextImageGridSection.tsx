'use client';

import { motion } from 'framer-motion';

import { ImageType, TextImageGridSectionType } from '../../types';
import { cn } from '../../utils/utils';
import GridItem from './GridItem';
import GridHeader from './GridItemHeader';
import ImageSplide from './ImageSplide';
import TextColumn from './TextColumn';

interface TextImageGridSectionProps {
  data: TextImageGridSectionType[];
}

export default function TextImageGridSection({
  data,
}: TextImageGridSectionProps) {
  return (
    <div className="flex h-full w-full flex-col gap-40 lg:gap-80 bg-black pt-10 pb-40 lg:pb-80 lg:py-32">
      {data.map((item, index) => {
        return <GridItem key={index} item={item} />;
      })}
    </div>
  );
}
