import { ActivatedRouteSnapshot } from '@angular/router';
import { ReuseTabContextComponent } from './reuse-tab-context.component';

/**
 * 复用匹配模式
 */
export enum ReuseTabMatchMode {
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

export interface ReuseTitle {
  text: string;
  i18n?: string;
}

export interface ReuseTabCached {
  title: ReuseTitle;

  url: string;

  /** 是否允许关闭，默认：`true` */
  closable?: boolean;

  /** 当前滚动条位置 */
  position?: [number, number] | null;

  _snapshot: ActivatedRouteSnapshot;

  _handle: any;
}

export interface ReuseTabNotify {
  /** 事件类型 */
  active: string;

  [key: string]: any;
}

export interface ReuseItem {
  url: string;
  title: string;
  closable: boolean;
  index: number;
  active: boolean;
  last: boolean;
}

export interface ReuseContextEvent {
  event: MouseEvent;
  item: ReuseItem;
  comp?: ReuseTabContextComponent;
  customContextMenu?: ReuseCustomContextMenu[];
}

export type CloseType = 'close' | 'closeOther' | 'closeRight' | 'clear' | 'custom' | null;

export interface ReuseContextCloseEvent {
  type: CloseType;
  item: ReuseItem;
  includeNonCloseable: boolean;
}

export interface ReuseContextI18n {
  close?: string;
  closeOther?: string;
  closeRight?: string;
  clear?: string;
}

export interface ReuseCustomContextMenu {
  id: string;
  title: string;
  fn: (item: ReuseItem, menu: ReuseCustomContextMenu) => void;
  disabled?: (item: ReuseItem) => boolean;
}
