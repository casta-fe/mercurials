import getAButtonProps from 'ant-design-vue/es/button/buttonTypes'
import type { ExtractPropTypes } from 'vue'

export const buttonProps = {
  /** extends */
  ...getAButtonProps(),
  /**
   * Text before icon.
   */
  preIcon: { type: String },
  preIconColor: { type: String },
  /**
   * Text after icon.
   */
  postIcon: { type: String },
  postIconColor: { type: String },
  /**
   * preIcon and postIcon icon size.
   * @default: 14
   */
  iconSize: { type: Number, default: 14 },
  disabled: Boolean,
  /** auth */
  permission: { type: String },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
