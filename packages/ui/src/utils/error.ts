import { PKG_CAMELCASE_NAME } from '@mercurials/constants'
import { isString } from './types'

class ComponentError extends Error {
  constructor(m: string) {
    super(m)
    this.name = `${PKG_CAMELCASE_NAME}Error`
  }
}

export function throwError(scope: string, m: string): never {
  throw new ComponentError(`[${scope}] ${m}`)
}

export function debugWarn(err: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: Error = isString(scope)
      ? new ComponentError(`[${scope}] ${message}`)
      : scope

    console.warn(error)
  }
}
