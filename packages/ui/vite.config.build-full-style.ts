import { resolve } from 'path'
import createViteConfig from '@mercurials/vite-config'
import type { UserConfigExport } from 'vite'

const packageDir = resolve(__dirname, './src/style')
const entry = resolve(__dirname, './src/style/index.less')
const outDir = resolve(__dirname, 'dist/umd')

export default (): UserConfigExport =>
  createViteConfig({
    strategy: 'ui',
    packageDir,
    entry,
    outDir,
  }).viteFullStyleConfig!
