import React from 'react'

const ModuleBHome = React.lazy(() => import('./pages/ModuleBHome'))

const moduleAConfig = {
  moduleName: 'module-a',
  routes: [
    {
      path: '/module-b/home',
      element: <ModuleBHome />
    }
  ],
}

export default moduleAConfig