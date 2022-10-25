import { defineComponent, renderSlot } from 'vue'
import { provideGlobalConfig, useNamespace } from '../../hooks'
import { configProviderProps } from './types/props'

const ns = useNamespace('config-provider')

const ConfigProvider = defineComponent({
  name: ns.n,
  props: configProviderProps,

  setup(props, { slots }) {
    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})

export type ConfigProviderInstance = InstanceType<typeof ConfigProvider>

export default ConfigProvider
