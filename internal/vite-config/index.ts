import {
  createUiViteCJSConfig,
  createUiViteESConfig,
  createUiViteFullStyleConfig,
  createUiViteUMDConfig,
} from './src/ui'
import {
  createPackageViteCJSConfig,
  createPackageViteESConfig,
  createPackageViteUMDConfig,
} from './src/package'
import type { ViteParams } from './src/types'

export * from './src/types'

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
