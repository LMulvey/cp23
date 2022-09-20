import { type EffectCallback, useEffect, useState, useRef } from 'react';

/**
 * @see https://stackoverflow.com/a/72319081/368691
 */
export const useMount = (effect: EffectCallback) => {
  const ref = useRef<ReturnType<EffectCallback>>(undefined);

  const [mounted, setMounted] = useState<boolean>(false);
  const [invoked, setInvoked] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  useEffect(() => {
    if (!mounted) {
      return () => {};
    }

    setInvoked(true);

    if (invoked) {
      return ref.current;
    }

    ref.current = effect();

    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setInvoked, invoked, mounted]);
};
