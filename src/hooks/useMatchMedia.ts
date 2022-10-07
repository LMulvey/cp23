import { useEffect, useState } from 'react';
import { isBrowser } from '@/utilities/isBrowser';

export const useMatchMedia = (mediaQueryString: string): boolean => {
  const [matches, setMatches] = useState<boolean>(() =>
    isBrowser ? matchMedia(mediaQueryString).matches : false
  );

  useEffect(() => {
    const mediaQueryList: MediaQueryList = matchMedia(mediaQueryString);

    const handleChange = (): void => {
      setMatches(mediaQueryList.matches);
    };

    handleChange();

    mediaQueryList.addEventListener('change', handleChange);

    return (): void => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [mediaQueryString]);

  return matches;
};
