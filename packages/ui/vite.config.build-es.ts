import { resolve } from 'path'
import createViteConfig from '@mercurials/vite-config'
import type { UserConfigExport } from 'vite'

const packageDir = resolve(__dirname, './src')
const entry = resolve(__dirname, './src/components/index.ts')
const outDir = resolve(__dirname, 'dist/es')

export default (): UserConfigExport =>
  createViteConfig({
    strategy: 'ui',
    packageDir,
    entry,
    outDir,
  }).viteESConfig!
