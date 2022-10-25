import type { RollupWarning } from 'rollup'

export function onwarn(warning: RollupWarning) {
  const { code, message } = warning
  // 确定是引用的类库报错后可以在这里屏蔽
  const HideWarningCodes = ['UNUSED_EXTERNAL_IMPORT', 'MIXED_EXPORTS']
  if (HideWarningCodes.some((warningCode) => warningCode === code)) {
    return
  }
  console.info(`rollup report: ${code} , \n message is: ${message}`)
}
