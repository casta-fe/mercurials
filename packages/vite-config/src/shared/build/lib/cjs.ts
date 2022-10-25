import { createExternal, onwarn } from '../../rollup'
import type { ViteParams } from '../../../types'
import type { BuildOptions } from 'vite'

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
      formats: ['cjs'],
      fileName: (): string => {
        return 'index.cjs'
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
