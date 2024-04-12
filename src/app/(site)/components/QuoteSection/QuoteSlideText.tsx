import { useMemo } from 'react';

import { SlideType } from '../../types';
import { cn } from '../../utils/utils';

interface QuoteSlideTextProps {
  isEven: boolean;
  slide: SlideType;
}

export default function QuoteSlideText({ isEven, slide }: QuoteSlideTextProps) {
  const textColors = {
    'green-200': 'text-green-200',
    'green-300': 'text-green-300',
    'pink-200': 'text-pink-200',
    'pink-300': 'text-pink-300',
    'red-200': 'text-red-200',
    'red-300': 'text-red-300',
    'blue-200': 'text-blue-200',
    'blue-300': 'text-blue-300',
    'cyan-200': 'text-cyan-200',
    'cyan-300': 'text-cyan-300',
  };

  const getTextClassName = (
    lineIndex: number,
    slideColor: string | undefined
  ) => {
    const baseClass = '';
    const colorKey = `${slideColor}-${lineIndex === 2 ? '300' : '200'}`;
    const colorClass = textColors[colorKey] || '';
    const textAlignClass = lineIndex === 2 ? 'text-right' : '';
    return cn(baseClass, colorClass, textAlignClass);
  };

  const lines = [slide.line1, slide.line2, slide.line3];

  const randomMiddleQuotePosition = useMemo(() => {
    if (slide.randomizeMiddleLine || !slide.middleLinePosition) {
      const min = 30;
      const max = 70;
      return Math.floor(Math.random() * (max - min + 1) + min);
    } else {
      switch (slide.middleLinePosition) {
        case 'top':
          return 10;
        case 'middle':
          return 50;
        case 'bottom':
          return 75;
        default:
          return 50;
      }
    }
  }, [slide]);

  const justifyContentClasses = useMemo(() => {
    const options = ['justify-start', 'justify-center', 'justify-end'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }, []);

  return (
    <div
      className={cn(
        'absolute z-10 flex h-full flex-col justify-between p-5 lg:relative lg:p-10',
        {
          'order-1': !isEven,
          'order-2': isEven,
        }
      )}
    >
      <p
        className={`font-heading text-heading2-small uppercase leading-[35px] lg:text-heading2-medium xl:text-heading2-large ${getTextClassName(0, slide.color)}`}
      >
        {lines[0]}
      </p>
      <div
        className={`relative flex h-full w-full items-center py-2 ${justifyContentClasses}`}
      >
        <p
          className={`absolute font-heading text-heading2-small uppercase leading-[35px] lg:text-heading2-medium xl:text-heading2-large ${getTextClassName(1, slide.color)}`}
          style={{
            top: `${randomMiddleQuotePosition}%`,
          }}
        >
          {lines[1]}
        </p>
      </div>
      <p
        className={`font-heading text-heading2-small uppercase leading-[35px] lg:text-heading2-medium xl:text-heading2-large ${getTextClassName(2, slide.color)}`}
      >
        {lines[2]}
      </p>
    </div>
  );
}
