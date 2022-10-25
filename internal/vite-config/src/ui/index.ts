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

export const createUiViteCJSConfig = (params: ViteParams): UserConfigExport => {
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

export const createUiViteESConfig = (params: ViteParams): UserConfigExport => {
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

export const createUiViteUMDConfig = (params: ViteParams): UserConfigExport => {
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

export const createUiViteFullStyleConfig = (
  params: ViteParams
): UserConfigExport => {
  const build = createUMDBuildOptions(params)

  return {
    build,
  }
}
