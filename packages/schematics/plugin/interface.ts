export interface PluginOptions {
  type: 'add' | 'remove';
  /** 项目名 */
  name: string;
  /** 前缀名 */
  projectPrefix: string;
  /** 项目根目录 */
  root: string;
  /** 项目源文件目录，例如：`src` */
  sourceRoot: string;
  /** 命令行指定项目名，使用时务必采用 @name 参数 */
  project?: string;
  /** 包管理类型 */
  packageManager?: 'npm' | 'yarn';
  defaultLanguage?: string;
}
