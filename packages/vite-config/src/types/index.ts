export interface ViteParams {
  /** 打包策略，ui、ui-pro、apps/** 的包需要定制，其他包均为库模式 */
  strategy: string
  /** 包路径 */
  packageDir: string
  /** 入口文件 */
  entry: string
  /** 打包后出口文件目录 */
  outDir: string
}
