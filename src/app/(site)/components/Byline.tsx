interface BylineProps {
  text: string;
  color?: string;
}

export default function Byline({ text, color }: BylineProps) {
  return (
    <h2
      className={`font-body text-small-heading-mobile lg:text-small-heading font-medium ${color}`}
    >
      {text}
    </h2>
  );
}
