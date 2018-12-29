export interface App {
  // tslint:disable-next-line:no-any
  [key: string]: any;
  /** Name for app */
  name?: string;
  /** Description for app */
  description?: string;
}

export interface User {
  // tslint:disable-next-line:no-any
  [key: string]: any;
  /** Name for current user */
  name?: string;
  /** Avatar for current user */
  avatar?: string;
  /** Email for current user */
  email?: string;
}

export interface Layout {
  // tslint:disable-next-line:no-any
  [key: string]: any;
  /** Whether to fold menu */
  collapsed: boolean;
  /** Current language */
  lang: string;
  /** Color weak */
  colorWeak: boolean;
}

export interface SettingsNotify {
  type: 'layout' | 'app' | 'user';
  /** Update `key` name, limited `layout` type */
  name?: string;
  // tslint:disable-next-line:no-any
  value: any;
}
