import React from 'react'
import type { ModuleConfig } from '@poc/core/cli'

const ModuleAHome = React.lazy(() => import('./pages/ModuleAHome'))

const moduleAConfig: ModuleConfig = {
  moduleName: 'module-a',
  routes: () => ([
    {
      path: '/',
      Component: ModuleAHome
    },
  ]),
  hooks: {
    'app:beforeMount': async () => {
      if (location.pathname === '/module-a') {
        location.href = '/'
      }
    },
    'cli:boot': () => {
      console.log('module-a booted')
    }
  },
  dependencies: [
    '@poc/module-b'
  ]
}

export default moduleAConfig