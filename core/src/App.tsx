// packages/core/src/App.tsx
import { Suspense } from 'react'
import { BrowserRouter, useRoutes, RouteObject } from 'react-router'
import getRoutes from 'virtual:module-routes'
import CoreLayout from './layouts/CoreLayout'

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
  const pages = await getRoutes();
  console.log(pages);
  return () => (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <AppRoutes pages={pages} />
      </Suspense>
    </BrowserRouter>
  )
}