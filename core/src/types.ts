import { RouteObject } from 'react-router'

export interface ModuleConfig {
  moduleName: string
  routes: RouteObject[]
  dependencies?: string[]
}