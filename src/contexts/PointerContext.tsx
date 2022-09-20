import { type ReactNode, createContext, useState, useMemo } from 'react';
import { useMount } from '@/hooks/useMount';

type Pointer = {
  current: {
    x: number;
    y: number;
  };
};

const pointerInitialValue = {
  current: { x: 0, y: 0 },
};

const calculatePointerPosition = (
  position: { x: number; y: number },
  viewport: { height: number; width: number }
) => ({
  current: {
    x: position.x - viewport.width / 2,
    y: -position.y + viewport.height / 2,
  },
  // gl: {
  // },
  // glNormalized: {
  // x: (position.x / viewport.width) * 2 - 1,
  // y: -(position.y / viewport.height) * 2 + 1,
  // },
});

const getMouseXY = (event: MouseEvent) => {
  return { x: event.clientX, y: event.clientY };
};

const getTouchXY = (event: TouchEvent) => {
  return {
    x: event.changedTouches[0]?.clientX ?? 0,
    y: event.changedTouches[0]?.clientY ?? 0,
  };
};

export const PointerContext = createContext<Pointer>(pointerInitialValue);

export const PointerProvider = ({ children }: { children: ReactNode }) => {
  const [pointer, setPointer] = useState<Pointer>(pointerInitialValue);
  const getViewport = useMemo(() => {
    if (typeof window === 'undefined') {
      return {
        height: 0,
        width: 0,
      };
    } else {
      return {
        height: window.innerHeight,
        width: window.innerWidth,
      };
    }
  }, []);

  const handlePointer = (event: MouseEvent | TouchEvent): void => {
    const newPointer = calculatePointerPosition(
      'clientX' in event ? getMouseXY(event) : getTouchXY(event),
      getViewport
    );
    setPointer(newPointer);
  };

  useMount(() => {
    document.addEventListener('mousemove', handlePointer);
    document.addEventListener('touchmove', handlePointer);

    return () => {
      document.removeEventListener('mousemove', handlePointer);
      document.removeEventListener('touchmove', handlePointer);
    };
  });

  return (
    <PointerContext.Provider value={pointer}>
      {children}
    </PointerContext.Provider>
  );
};
