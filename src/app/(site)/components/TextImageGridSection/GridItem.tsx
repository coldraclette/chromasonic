import { ImageType, TextImageGridSectionType } from '../../types';
import GridItemHeader from './GridItemHeader';
import GridItemText from './GridItemText';
import ImageSplide from './ImageSplide';

interface GridItemProps {
  item: TextImageGridSectionType;
}

export default function GridItem({ item }: GridItemProps) {
  return (
    <div
      key={item._key}
      className="flex flex-col pb-[100px] pt-11 last:pb-0 lg:pb-[100px] lg:pt-11"
    >
      <GridItemHeader
        title={item.title}
        byline={item.byline}
        textArea={item.textArea}
        color={item.color}
      />
      <ImageSplide images={item.images} />
      <GridItemText
        text={item.textArea}
        text2={item.textArea2}
        color={item.color}
      />
    </div>
  );
}
