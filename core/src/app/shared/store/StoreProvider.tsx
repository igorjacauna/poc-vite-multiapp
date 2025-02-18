import { ReactNode } from 'react';
import { rootStore } from './rootStore';
import StoreContext from './StoreContext';

interface StoreProviderProps {
  children: ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  );
};