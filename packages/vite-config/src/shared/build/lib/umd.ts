import { UI_NAME } from '@mercurials/constants'
import { createExternal, createOutputGlobals, onwarn } from '../../rollup'
import type { ViteParams } from '../../../types'
import type { BuildOptions } from 'vite'

export default (params: ViteParams): BuildOptions => {
  const { entry, outDir } = params
  const external = createExternal()
  const globals = createOutputGlobals()

  return {
    emptyOutDir: false,
    outDir,
    lib: {
      entry,
      name: UI_NAME,
      formats: ['umd'],
      fileName: (target): string => {
        return `index.${target}.js`
      },
    },
    rollupOptions: {
      external,
      output: {
        format: 'umd',
        exports: 'named',
        globals,
      },
      onwarn,
    },
  }
}
