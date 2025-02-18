import { resolve } from 'pathe'
import sirv from 'sirv'
import type { PluginOption } from 'vite'

export default function multiStaticDirs(directories: string[]): PluginOption {
  return {
    name: 'vite-plugin-multi-public-dirs',
    configureServer(server) {
      directories.forEach((dir) => {
        const resolvedDir = resolve(process.cwd(), dir)
        server.middlewares.use(sirv(resolvedDir, { dev: true }))
        console.log(`📂 Servindo arquivos estáticos de: ${dir}`)
      })
    }
  }
}
