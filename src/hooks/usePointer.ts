import { useContext } from 'react';
import { PointerContext } from '@/contexts/PointerContext';

export const usePointer = () => {
  const pointer = useContext(PointerContext);
  return pointer;
};
