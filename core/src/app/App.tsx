// packages/core/src/App.tsx
import { Suspense } from 'react'
import { BrowserRouter, useRoutes, RouteObject } from 'react-router'
import { getRoutes } from 'virtual:modules'
import CoreLayout from './layouts/CoreLayout'
import { hooks } from './shared'

type AppRoutesProps = {
  pages: RouteObject[]
}
function AppRoutes({ pages }: AppRoutesProps) {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <CoreLayout />,
      children: pages
    }
  ]

  return useRoutes(routes)
}

export default async function App() {
  await hooks.callHook('app:beforeGetRoutes');
  const pages = await getRoutes();
  await hooks.callHook('app:beforeMount');
  return () => (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <AppRoutes pages={pages} />
      </Suspense>
    </BrowserRouter>
  )
}