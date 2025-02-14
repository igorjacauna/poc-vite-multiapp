import React from 'react'
import moduleB from 'module-b';

const ModuleAHome = React.lazy(() => import('./pages/ModuleAHome'))

const moduleAConfig = {
  moduleName: 'module-a',
  routes: [
    {
      path: '/module-a/home',
      element: <ModuleAHome />
    },
    ...moduleB.routes
  ],
}

export default moduleAConfig