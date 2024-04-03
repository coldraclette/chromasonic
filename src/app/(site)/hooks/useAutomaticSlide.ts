import { useEffect } from 'react';

export const useAutomaticSlide = (
  isInView: boolean,
  slidesLength: number,
  setActiveSlideIndex: (updateFn: (currentIndex: number) => number) => void
) => {
  useEffect(() => {
    if (slidesLength <= 1 || !isInView) {
      return;
    }

    const interval = setInterval(() => {
      setActiveSlideIndex((current: number) => {
        const nextIndex = (current + 1) % slidesLength;
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView, slidesLength, setActiveSlideIndex]);
};
