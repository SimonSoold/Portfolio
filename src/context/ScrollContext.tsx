import { createContext } from 'react';

export interface IsNear {
    isNearTop: boolean;
    isNearBottom: boolean;
}
export const ScrollContext = createContext<{
  isNear: IsNear;
  setIsNear: React.Dispatch<React.SetStateAction<IsNear>>;
} | null>(null);