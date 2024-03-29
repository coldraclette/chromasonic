import Image from 'next/image';

import { urlForImage } from '../../../../../sanity/lib/image';
import { ImageType } from '../../types';
import { cn } from '../../utils/utils';
import Byline from '../Byline';
import TextContent from '../TextContent';
import VisitImage from './Image';
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
          className={cn(
            'flex w-full flex-col',
            {
              'bg-darkPurple': section.color === 'blue',
              'bg-darkGreen': section.color === 'green',
            }
          )}
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
