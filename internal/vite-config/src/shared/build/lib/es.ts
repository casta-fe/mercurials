import { createExternal, onwarn } from '../../rollup'
import type { BuildOptions } from 'vite'
import type { ViteParams } from '../../../types'

export default (params: ViteParams): BuildOptions => {
  const { packageDir, entry, outDir } = params
  const external = createExternal()

  return {
    target: 'modules',
    minify: true, // 压缩
    chunkSizeWarningLimit: 2, // 超过 2kb 警告提示
    reportCompressedSize: false,
    emptyOutDir: false,
    outDir,
    lib: {
      entry,
      formats: ['es'],
      fileName: (): string => {
        return 'index.mjs'
      },
    },
    rollupOptions: {
      external,
      output: {
        preserveModules: true,
        preserveModulesRoot: packageDir,
        sourcemap: true,
      },
      onwarn,
    },
  }
}
