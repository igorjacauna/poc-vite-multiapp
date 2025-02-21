import React from 'react'
import type { ModuleConfig } from '@poc/core/cli'

import { rootStore } from '@poc/core/app';

import moduleAStore from './store';

const ModuleAHome = React.lazy(() => import('./pages/ModuleAHome'))

const moduleAConfig: ModuleConfig = {
  moduleName: 'module-a',
  routes: () => ([
    {
      path: '/feature-flags',
      Component: ModuleAHome
    },
  ]),
  menuEntries: () => {
    return [{
      label: 'FeatureFlags',
      route: '/feature-flags'
    }];
  },
  hooks: {
    'app:beforeMount': async () => {
      if (location.pathname === '/module-a') {
        location.href = '/'
      }
    },
    'cli:boot': async () => {
      rootStore.registerStore('FeatureFlags', moduleAStore);
      await moduleAStore.fetchFeatureFlags();
    }
  },
  dependencies: [
    '@poc/module-b'
  ]
}

export default moduleAConfig