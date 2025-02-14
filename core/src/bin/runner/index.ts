import { createServer, build, InlineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'pathe';
import moduleRoutesPlugin from './plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
async function createViteConfig(): Promise<InlineConfig> {

  return {
    plugins: [react(), moduleRoutesPlugin()],
    root: resolve(__dirname, '../../'),
    build: {
      outDir: `${process.cwd()}/dist`,
    }
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