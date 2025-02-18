import { useContext } from 'react';
import StoreContext from './StoreContext';

export function useStore() {
  return useContext(StoreContext);
}

export * from './rootStore';
export * from './StoreContext';
export * from './StoreProvider';