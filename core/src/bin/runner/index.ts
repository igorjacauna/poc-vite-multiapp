import { createServer, build, InlineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'pathe';
import modulesPlugin from './plugins/modules';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
async function createViteConfig(): Promise<InlineConfig> {

  const root = resolve(__dirname, "../../src/app");

  return {
    plugins: [react(), modulesPlugin()],
    root,
    build: {
      outDir: `${process.cwd()}/dist`,
    },
    envPrefix: 'BO_',
    optimizeDeps: {
      include: ['cookie'],
    },
  }
}

export async function startDevServer() {
  const viteConfig = await createViteConfig()
  const server = await createServer(viteConfig)
  await server.listen()
  server.printUrls();
}

export async function buildApp() {
  const viteConfig = await createViteConfig()
  const output = await build(viteConfig)
  console.log(output)
}