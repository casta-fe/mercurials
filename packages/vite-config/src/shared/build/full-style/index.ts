import type { BuildOptions } from 'vite'
import type { ViteParams } from '../../../types'

export default (params: ViteParams): BuildOptions => {
  const { entry, outDir } = params

  return {
    outDir,
    emptyOutDir: false,
    rollupOptions: {
      input: entry,
      output: {
        assetFileNames: '[name].[ext]',
      },
    },
  }
}
