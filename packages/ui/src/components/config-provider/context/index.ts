import type { ConfigProviderProps } from '../types/props'
import type { InjectionKey, Ref } from 'vue'

const SYMBOL_NAME = 'config-provider-context'

export type ConfigProviderContext = Partial<ConfigProviderProps>

export const configProviderContextKey: InjectionKey<
  Ref<ConfigProviderContext>
> = Symbol(SYMBOL_NAME)
