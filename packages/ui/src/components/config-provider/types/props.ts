import { DEFAULT_COMPONENT_PREFIX } from '../../../tokens'
import type { ExtractPropTypes } from 'vue'

export const configProviderProps = {
  namespace: {
    type: String,
    default: DEFAULT_COMPONENT_PREFIX,
  },
  zIndex: Number,
} as const

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>
