import { resolve } from 'path'
import createViteConfig from '@mercurials/vite-config'
import type { UserConfigExport } from 'vite'

const packageDir = resolve(__dirname, './src')
const entry = resolve(__dirname, './src/index.ts')
const outDir = resolve(__dirname, 'dist/es')

export default (): UserConfigExport =>
  createViteConfig({
    strategy: 'package',
    packageDir,
    entry,
    outDir,
  }).viteESConfig!
