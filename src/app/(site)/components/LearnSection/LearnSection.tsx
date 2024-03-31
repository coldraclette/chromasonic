import { LearnItemType } from '../../types';
import LearnSectionBodyText from './LearnSectionBodyText';
import LearnSectionHeading from './LearnSectionHeading';
import LearnSectionItems from './LearnSectionItems';

interface LearnSectionProps {
  data: {
    byline: string;
    titleLine1: string;
    titleLine2: string;
    textArea1: string;
    textArea2: string;
    items: LearnItemType[];
  };
}

export default function LearnSection({ data }: LearnSectionProps) {
  return (
    <div
      id="learn"
      className="flex h-full w-full flex-col gap-[72px] bg-blue-500 px-5 lg:px-10 pb-[52px] pt-11 lg:gap-[134px] lg:pb-[120px]"
    >
      <div className="flex flex-col gap-11 lg:gap-16">
        <LearnSectionHeading
          byline={data.byline}
          titleLine1={data.titleLine1}
          titleLine2={data.titleLine2}
        />
        <LearnSectionBodyText
          textArea1={data.textArea1}
          textArea2={data.textArea2}
        />
      </div>

      <LearnSectionItems items={data.items} />
    </div>
  );
}
