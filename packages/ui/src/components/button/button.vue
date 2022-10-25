<script lang="ts">
import { computed, defineComponent, unref } from 'vue'
import AButton from 'ant-design-vue/es/button'
import { useAttrs, useDisabled, useNamespace } from '../../hooks'
import { buttonProps as props } from './types/props'

const ns = useNamespace('button')

export default defineComponent({
  name: ns.n,
  components: { AButton },
  inheritAttrs: false,
  props,
  setup(props) {
    const attrs = useAttrs({ excludeDefaultKeys: false })
    const disabled = useDisabled()
    const getBindValue = computed(() => ({ ...unref(attrs), ...props }))

    return {
      ns,
      disabled,
      getBindValue,
    }
  },
})
</script>

<template>
  <AButton :class="[ns.b(), ns.is('disabled', disabled)]" v-bind="getBindValue">
    <template #default="data">
      <div
        v-if="!loading && preIcon"
        :icon="preIcon"
        :size="iconSize"
        :color="preIconColor"
      />
      <template v-if="!loading">
        <slot v-bind="data || {}" />
      </template>
      <div
        v-if="!loading && postIcon"
        :icon="postIcon"
        :size="iconSize"
        :color="postIconColor"
      />
    </template>
  </AButton>
</template>
