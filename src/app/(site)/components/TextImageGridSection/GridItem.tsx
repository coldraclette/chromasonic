import { motion } from 'framer-motion';

import { ImageType } from '../../types';
import { cn } from '../../utils/utils';
import GridItemHeader from './GridItemHeader';
import GridItemText from './GridItemText';
import ImageSplide from './ImageSplide';

interface GridItemProps {
  item: {
    _key: string;
    title: string[];
    byline: string;
    textArea: string;
    color: string;
    images: ImageType[];
  };
}

export default function GridItem({ item }: GridItemProps) {
  return (
    <div key={item._key} className="flex flex-col gap-5 lg:gap-20">
      <GridItemHeader
        title={item.title}
        byline={item.byline}
        textArea={item.textArea}
        color={item.color}
      />
      <ImageSplide images={item.images} />
      <GridItemText text={item.textArea} color={item.color} />
    </div>
  );
}
