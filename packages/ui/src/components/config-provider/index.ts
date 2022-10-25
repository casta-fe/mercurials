import { withInstall } from '../../utils'
import ConfigProvider from './config-provider'

export * from './context'
export * from './types/props'
export * from './config-provider'
export const TaConfigProvider = withInstall(ConfigProvider)
export default TaConfigProvider
