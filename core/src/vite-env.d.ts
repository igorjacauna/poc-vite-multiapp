/// <reference types="vite/client" />
declare module 'virtual:module-routes' {
  import { RouteObject } from 'react-router-dom'
  const getRoutes: () => Promise<RouteObject[]>;
  export default getRoutes
}