import Accordion from './Accordion';

interface AccordionGridProps {
  faqItems: { _key: string; question: string; answer: string }[];
}

export default function AccordionGrid({ faqItems }: AccordionGridProps) {
  const firstArray = faqItems.filter((_, index) => index % 2 === 0);
  const secondArray = faqItems.filter((_, index) => index % 2 === 1);

  return (
    <div className="pb-[38px] pt-[55px] lg:pb-[132px] lg:pt-[94px]">
      <div className="hidden grid-cols-2 gap-10 lg:grid">
        <div className="">
          {firstArray.map((item) => (
            <Accordion
              key={item._key}
              title={item.question}
              text={item.answer}
            />
          ))}
        </div>
        <div>
          {secondArray.map((item) => (
            <Accordion
              key={item._key}
              title={item.question}
              text={item.answer}
            />
          ))}
        </div>
      </div>
      <div className="grid lg:hidden">
        {faqItems.map((item) => (
          <Accordion key={item._key} title={item.question} text={item.answer} />
        ))}
      </div>
    </div>
  );
}
