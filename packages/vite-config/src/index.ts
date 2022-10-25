import {
  createUiViteCJSConfig,
  createUiViteESConfig,
  createUiViteFullStyleConfig,
  createUiViteUMDConfig,
} from './ui'
import {
  createPackageViteCJSConfig,
  createPackageViteESConfig,
  createPackageViteUMDConfig,
} from './package'
import type { ViteParams } from './types'

export * from './types'

export default function createViteConfig(params: ViteParams) {
  const { strategy } = params
  if (strategy === 'ui') {
    return {
      viteCJSConfig: createUiViteCJSConfig(params),
      viteESConfig: createUiViteESConfig(params),
      viteUMDConfig: createUiViteUMDConfig(params),
      viteFullStyleConfig: createUiViteFullStyleConfig(params),
    }
  } else if (strategy === 'package') {
    return {
      viteCJSConfig: createPackageViteCJSConfig(params),
      viteESConfig: createPackageViteESConfig(params),
      viteUMDConfig: createPackageViteUMDConfig(params),
    }
  } else {
    return {}
  }
}
