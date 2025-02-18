import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { boot } from 'virtual:modules'
import { hooks } from './shared/index.ts'

async function appInit() {
  await hooks.callHook('app:init');
  const Shell = await App();
  await hooks.callHook('app:beforeRender');
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Shell/>
    </StrictMode>,
  )
}

boot(appInit, hooks);
