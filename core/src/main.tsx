import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

async function init() {
  const Shell = await App();
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Shell/>
    </StrictMode>,
  )
}

init();
