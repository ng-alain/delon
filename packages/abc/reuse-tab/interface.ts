import { ActivatedRouteSnapshot } from '@angular/router';
import { NaReuseTabContextComponent } from './reuse-tab-context.component';

/**
 * 复用匹配模式
 */
export enum NaReuseTabMatchMode {
  /**
   * （推荐）按菜单 `Menu` 配置
   *
   * 可复用：
   * - `{ text:'Dashboard' }`
   * - `{ text:'Dashboard', reuse: true }`
   *
   * 不可复用：
   * - `{ text:'Dashboard', reuse: false }`
   */
  Menu,
  /**
   * 按菜单 `Menu` 强制配置
   *
   * 可复用：
   * - `{ text:'Dashboard', reuse: true }`
   *
   * 不可复用：
   * - `{ text:'Dashboard' }`
   * - `{ text:'Dashboard', reuse: false }`
   */
  MenuForce,
  /**
   * 对所有路由有效，可以配合 `excludes` 过滤无须复用路由
   */
  URL,
}

export interface NaReuseTitle {
  text: string;
  i18n?: string;
}

export interface NaReuseTabCached {
  title: NaReuseTitle;

  url: string;

  /** 是否可关闭，默认：`true` */
  closable?: boolean;

  _snapshot: ActivatedRouteSnapshot;

  _handle: any;
}

export interface NaReuseTabNotify {
  /** 事件类型 */
  active: string;

  [key: string]: any;
}

export interface NaReuseItem {
  url: string;
  title: string;
  closable: boolean;
  index: number;
  active: boolean;
  last: boolean;
}

export interface NaReuseContextEvent {
  event: MouseEvent;
  item: NaReuseItem;
  comp?: NaReuseTabContextComponent;
}

export type NaCloseType = 'close' | 'closeOther' | 'closeRight' | 'clear' | null;

export interface NaReuseContextCloseEvent {
  type: NaCloseType;
  item: NaReuseItem;
  includeNonCloseable: boolean;
}

export interface NaReuseContextI18n {
  close?: string;
  closeOther?: string;
  closeRight?: string;
  clear?: string;
}
