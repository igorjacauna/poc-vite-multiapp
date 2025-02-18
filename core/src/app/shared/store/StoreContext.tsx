// StoreContext.tsx
import { createContext } from 'react';
import { rootStore } from './rootStore';
import type { RootStore } from './rootStore';

const StoreContext = createContext<RootStore>(rootStore);

export default StoreContext;