import { Plugin } from 'vite'
export default function moduleRoutesPlugin(): Plugin {
  const virtualModuleId = 'virtual:module-routes'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'vite:module-routes',
    enforce: 'pre',

    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },

    async load(id) {
      if (id !== resolvedVirtualModuleId) return
      const code = `
        import hostConfig from './src/module.config';

        export default async function getRoutes() {
          let routes = [...hostConfig.routes];
          return routes;
        }
      `;
      return code
    }
  }
}