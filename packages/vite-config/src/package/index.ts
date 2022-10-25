import {
  createDtsPlugin,
  createJsxPlugin,
  createVuePlugin,
} from '../shared/plugins'
import {
  createCJSBuildOptions,
  createESBuildOptions,
  createUMDBuildOptions,
} from '../shared/build'
import type { UserConfigExport } from 'vite'
import type { ViteParams } from '../types'

export const createPackageViteCJSConfig = (
  params: ViteParams
): UserConfigExport => {
  const { packageDir } = params
  const plugins = [
    createVuePlugin(),
    createJsxPlugin(),
    createDtsPlugin(packageDir),
  ]
  const build = createCJSBuildOptions(params)

  return {
    mode: 'production',
    plugins,
    build,
  }
}

export const createPackageViteESConfig = (
  params: ViteParams
): UserConfigExport => {
  const { packageDir } = params
  const plugins = [
    createVuePlugin(),
    createJsxPlugin(),
    createDtsPlugin(packageDir),
  ]
  const build = createESBuildOptions(params)

  return {
    mode: 'production',
    plugins,
    build,
  }
}

export const createPackageViteUMDConfig = (
  params: ViteParams
): UserConfigExport => {
  // const { packageDir } = params
  // const plugins = [createVuePlugin(), createJsxPlugin(), createDtsPlugin(packageDir),]
  const plugins = [createVuePlugin(), createJsxPlugin()]
  const build = createUMDBuildOptions(params)

  return {
    mode: 'production',
    plugins,
    build,
  }
}
