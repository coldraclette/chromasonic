import Link from 'next/link';
import { PortableText, PortableTextComponents } from '@portabletext/react';

import { TextProps } from '../types';
import { cn } from '../utils/utils';

interface TextContentProps {
  text: TextProps[];
  color?: string;
  className?: string;
}

export default function TextContent({
  text,
  color,
  className,
}: TextContentProps) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => (
        <p
          className={`text-content-p mb-4 min-h-[1px] last-of-type:mb-0 2xl:mb-5 ${className}`}
        >
          {children}
        </p>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value?.href?.startsWith('/')
          ? 'noreferrer noopener'
          : undefined;
        const target = !value?.href?.startsWith('/') ? '_blank' : undefined;
        return (
          <Link
            className="underline"
            href={value.href || ""}
            target={target}
            rel={rel}
          >
            {children}
          </Link>
        );
      },
      // bold
      strong: ({ children }) => (
        <strong className="font-bold">{children}</strong>
      ),
    },
  };

  return (
    <div
      className={cn(`${className}`, {
        'text-softBlue3': color === 'blue',
        'text-lightGreen3': color === 'green',
      })}
    >
      <PortableText value={text} components={components} />
    </div>
  );
}
