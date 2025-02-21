import { Hookable } from 'hookable';
import { RootStore } from './shared';
declare global {
  type FeatureFlag = {
    [flag: string]: boolean;
  };

  type HooksCaller = Hookable<Hooks, string>;
  
  type Hooks = {
    'app:afterBoot': (hooks: HooksCaller) => void;
    'app:init': () => void;
    'app:beforeRender': () => void;
    'app:afterRender': () => void;
    'app:beforeMount': () => void;
    'app:beforeGetRoutes': () => void;
    'app:signedIn': () => void;
    'app:signedOut': () => void;
  }

  type TRootStore = RootStore;
}

