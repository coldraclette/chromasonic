import VisitTextContent from './VisitTextContent';
import VisitTextHeader from './VisitTextHeader';

interface VisitTextProps {
  byline: string;
  titleLines: string[];
  location: string;
  textArea: string;
  text: any[];
  color: string;
}

export default function VisitText({
  byline,
  titleLines,
  location,
  textArea,
  text,
  color,
}: VisitTextProps) {
  return (
    <div className="flex flex-col justify-between gap-[130px] px-5 pb-11 pt-10 lg:px-10 lg:pb-0">
      <VisitTextHeader
        byline={byline}
        titleLines={titleLines}
        location={location}
        color={color}
      />
      <VisitTextContent textArea={textArea} text={text} color={color} />
    </div>
  );
}
