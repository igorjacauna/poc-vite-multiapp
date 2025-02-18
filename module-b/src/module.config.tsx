import { ModuleConfig } from '@poc/core/cli'
import { rootStore } from '@poc/core/app';
import React from 'react'
import store, { type ModuleBStore } from './store';

const ModuleBHome = React.lazy(() => import('./pages/ModuleBHome'))

const moduleAConfig: ModuleConfig = {
  moduleName: 'module-a',
  routes: () => ([
    {
      path: '/module-b/home',
      element: <ModuleBHome />
    }
  ]),
  hooks: {
    'app:beforeRender': async () => {
      store.increaseTimer();
      store.increaseTimer();
      await new Promise(resolve => setTimeout(resolve, 1000));
      rootStore.registerStore<ModuleBStore>('ModuleB', store)
    }
  },
}

export default moduleAConfig