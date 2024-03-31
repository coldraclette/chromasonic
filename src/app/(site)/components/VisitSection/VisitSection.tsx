import { ImageType } from '../../types';
import { cn } from '../../utils/utils';
import VisitImage from './VisitImage';
import VisitText from './VisitText';

interface VisitSectionProps {
  data: {
    _key: string;
    byline: string;
    titleLines: string[];
    image: ImageType;
    location: string;
    textArea: string;
    text: any[];
    color: string;
  }[];
}
export default function VisitSection({ data }: VisitSectionProps) {
  if (!data) return null;
  return (
    <div id="visit">
      {data.map((section) => (
        <div
          className={cn('flex w-full flex-col lg:pb-[73px] ', {
            'bg-green-500': section.color === 'green',
            'bg-blue-500': section.color === 'blue',
            'bg-red-500': section.color === 'red',
            'bg-pink-500': section.color === 'pink',
            'bg-cyan-500': section.color === 'cyan',
          })}
          key={section._key}
        >
          <VisitImage image={section.image} />
          <VisitText
            byline={section.byline}
            titleLines={section.titleLines}
            location={section.location}
            textArea={section.textArea}
            text={section.text}
            color={section.color}
          />
        </div>
      ))}
    </div>
  );
}
