import { computed, unref } from 'vue'
import { useProp } from './use-prop'
import type { MaybeRef } from '@vueuse/core'

export const useDisabled = (fallback?: MaybeRef<boolean | undefined>) => {
  const disabled = useProp<boolean>('disabled')
  return computed(() => disabled.value || unref(fallback) || false)
}
