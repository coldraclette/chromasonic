import { motion } from 'framer-motion';

interface HeroTextMobileProps {
  textLines: string[];
}

export default function HeroTextMobile({ textLines }: HeroTextMobileProps) {
  let globalWordIndex = 0;

  const mobileColors = [
    'text-cyan-400',
    'text-cyan-400',
    'text-cyan-300',
    'text-cyan-200',
    'text-cyan-200',
    'text-cyan-100',
  ];

  return (
    <div className="h2 lg:hidden">
      {textLines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split(' ').map((word, wordIndex) => {
            const colorClass =
              mobileColors[globalWordIndex % mobileColors.length];
            globalWordIndex++;
            return (
              <motion.span
                key={wordIndex}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className={`block font-heading text-[29px] uppercase ${colorClass}`}
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
