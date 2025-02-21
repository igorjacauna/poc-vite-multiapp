import { ModuleConfig } from '@poc/core/cli'
import { hooks, rootStore } from '@poc/core/app';
import React from 'react'
import { initAuth } from './helpers/auth';
import userStore from './store/userStore';

const Login = React.lazy(() => import('./pages/Login'))

const moduleAConfig: ModuleConfig = {
  moduleName: 'module-a',
  routes: () => {
    return [
      {
        path: '/login',
        element: <Login />
      }
    ];
  },
  menuEntries() {
    return [
      {
        label: 'Feature flags',
        route: '/feature-flags',
      }
    ]
  },
  hooks: {
    'cli:afterBoot': async () => {
      rootStore.registerStore('User', userStore)
      userStore.setToken('balbalblalb')
      hooks.callHook('app:signedIn');
    },
    'app:signedIn': () => {
      if (location.pathname === '/login') location.href = '/'
    },
    'app:signedOut': () => {
      console.log('Logoutiou')
      userStore.setToken('')
      userStore.setUser({ name: '', email: '' })
      if (location.pathname !== '/login') location.href = '/login'
    }
  },
}

export default moduleAConfig