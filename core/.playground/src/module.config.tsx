import type { ModuleConfig } from '../../src/bin/types';
import React from 'react'

const Playground = React.lazy(() => import('./pages'))

const moduleAConfig: ModuleConfig = {
  moduleName: 'playground',
  routes: () => ([
    {
      path: '/playground',
      element: <Playground />
    },
  ]),
  hooks: {
    'app:init': async () => {
      console.log('\n\n\nAntes de tudo...');
      return new Promise(resolve => setTimeout(resolve, 5000));
    },
  },
  dependencies: []
}

export default moduleAConfig