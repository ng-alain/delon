import { Direction } from '@angular/cdk/bidi';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface App {
  [key: string]: NzSafeAny;
  /** Name for app */
  name?: string;
  /** Description for app */
  description?: string;
}

export interface User {
  [key: string]: NzSafeAny;
  /** Name for current user */
  name?: string;
  /** Avatar for current user */
  avatar?: string;
  /** Email for current user */
  email?: string;
}

export interface Layout {
  [key: string]: NzSafeAny;
  /** Whether to fold menu */
  collapsed: boolean;
  /** Current language */
  lang: string;
  /** Color weak */
  colorWeak: boolean;
  /** Direction of the text */
  direction: Direction;
}

export interface SettingsNotify {
  type: 'layout' | 'app' | 'user';
  /** Update `key` name, limited `layout` type */
  name?: string;
  value: NzSafeAny;
}
