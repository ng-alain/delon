export interface App {
  name?: string;
  description?: string;
  year?: number;
  // tslint:disable-next-line:no-any
  [key: string]: any;
}

export interface User {
  name?: string;
  avatar?: string;
  email?: string;
  // tslint:disable-next-line:no-any
  [key: string]: any;
}

export interface Layout {
  /** 是否固定顶部菜单 */
  fixed: boolean;
  /** 是否折叠右边菜单 */
  collapsed: boolean;
  /** 是否固定宽度 */
  boxed: boolean;
  /** 语言环境 */
  lang: string;
  /** 当前主题 */
  theme: string;
  // tslint:disable-next-line:no-any
  [key: string]: any;
}

export interface SettingsNotify {
  type: 'layout' | 'app' | 'user';
  /** 更新 `key`，限 `layout` 有效 */
  name?: string;
  // tslint:disable-next-line:no-any
  value: any;
}
