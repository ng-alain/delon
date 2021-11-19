import { Schema as ComponentSchema } from '@schematics/angular/component/schema';

export interface Schema extends ComponentSchema {
  /**
   * 指定目标路径，支持 `bus/list` 写法 (Specifies relative path, could be set like `bus/list`.)
   */
  target?: string;
  /**
   * 指定选择器名不加前缀 (Without prefix to selectors), Default: `false`
   */
  withoutPrefix?: boolean;
  /**
   * 组件名不加模块名前缀 (Without prefix to component name), Default: `false`
   */
  withoutModulePrefixInComponentName?: boolean;
  /**
   * 指定是否使用模态框 (Specifies using modal mode)
   */
  modal?: boolean;
}
