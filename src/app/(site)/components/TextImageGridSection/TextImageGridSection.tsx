import { TextImageGridSectionType } from '../../types';
import GridItem from './GridItem';

interface TextImageGridSectionProps {
  data: TextImageGridSectionType[];
}

export default function TextImageGridSection({
  data,
}: TextImageGridSectionProps) {
  return (
    <div className="flex h-full w-full flex-col bg-black pb-[76px] lg:pb-[173px]">
      {data.map((item, index) => {
        return <GridItem key={index} item={item} />;
      })}
    </div>
  );
}
