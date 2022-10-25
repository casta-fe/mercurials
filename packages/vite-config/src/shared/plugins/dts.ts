import Dts from 'vite-plugin-dts'
import type { PluginOption } from 'vite'

export default (packageDir: string): PluginOption =>
  Dts({
    insertTypesEntry: true,
    cleanVueFileName: true,
    skipDiagnostics: false,
    logDiagnostics: true,
    include: [packageDir],
    entryRoot: packageDir,
  })
