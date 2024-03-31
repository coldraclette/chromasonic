export const useSlideBackground = (color: string): string => {
  switch (color) {
    case 'green':
      return 'bg-green-500';
    case 'pink':
      return 'bg-pink-500';
    case 'blue':
      return 'bg-blue-500';
    case 'red':
      return 'bg-red-500';
    case 'cyan':
      return 'bg-cyan-500';
    default:
      return 'bg-green-500';
  }
};
