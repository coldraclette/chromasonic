interface BylineProps {
  text: string;
  color?: string;
}

export default function Byline({ text, color }: BylineProps) {
  return (
    <h2 className={`text-byline lg:text-byline font-body uppercase font-medium ${color}`}>
      {text}
    </h2>
  );
}
