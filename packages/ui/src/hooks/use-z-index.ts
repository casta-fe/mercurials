import { computed, ref } from 'vue'
import { DEFAULT_ZINDEX } from '../tokens'
import { useGlobalConfig } from './use-global-config'

const zIndex = ref(0)

export const useZIndex = () => {
  const initialZIndex = useGlobalConfig('zIndex', DEFAULT_ZINDEX)
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value)

  const nextZIndex = () => {
    zIndex.value++
    return currentZIndex.value
  }

  return {
    initialZIndex,
    currentZIndex,
    nextZIndex,
  }
}
