import type { Type } from '@angular/core';
import type { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import type { YNOptions } from '@delon/theme';
import type { CurrencyFormatOptions, CurrencyMegaOptions, FormatMaskOption } from '@delon/util/format';

export interface CellTextUnit {
  text?: string | SafeHtml;
  color?: string;
  unit?: string;
}

export type CellTextType = string | CellTextUnit | undefined | null;

export interface CellTextResult {
  type: CellType;
  result: CellTextUnit;
  safeHtml?: 'text' | 'html' | 'safeHtml';
  options: CellOptions;
}

export type CellFuValue = (value: unknown, options: CellOptions) => Observable<CellTextUnit>;

export type CellWidgetFn = (value: unknown, options: CellOptions) => CellTextUnit;

export interface CellWidget {
  type: 'fn' | 'widget';
  ref: Type<unknown> | CellWidgetFn;
}

export type CellType =
  | 'string'
  | 'number'
  | 'mega'
  | 'currency'
  | 'boolean'
  | 'date'
  | 'img'
  | 'link'
  | 'html'
  | 'badge'
  | 'tag'
  | 'widget';

export interface CellOptions {
  /**
   * 指定渲染类型，若不指定则根据 `value` 类型自动转换
   */
  type?: CellType;

  tooltip?: string;

  /**
   * Format mask, [Document](https://ng-alain.com/util/format/en#formatMask)
   *
   * 格式化掩码, 参考[文档](https://ng-alain.com/util/format/zh#formatMask)
   */
  mask?: string | FormatMaskOption;

  widget?: {
    key?: string;
    data?: unknown;
  };

  /**
   * 日期
   */
  date?: {
    /**
     * 格式化字符，默认：`yyyy-MM-dd HH:mm:ss`
     */
    format?: string;
  };

  /**
   * Large number format filter, [Document](https://ng-alain.com/util/format/en#mega)
   *
   * 大数据格式化，[文档](https://ng-alain.com/util/format/en#mega)
   */
  mega?: CurrencyMegaOptions;

  /**
   * 货币
   */
  currency?: CurrencyFormatOptions;

  /**
   * 布尔
   */
  boolean?: YNOptions;

  /**
   * 图像
   */
  img?: {
    size?: number;
  };

  /**
   * 链接，若指定URL是以 `/` 开头视为路由跳转
   */
  link?: {
    url?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
  };

  /**
   * HTML 配置
   */
  html?: {
    safe?: 'text' | 'html' | 'safeHtml';
  };

  /**
   * 徽章配置
   */
  badge?: {
    data?: CellBadge;
  };

  /**
   * 标签配置
   */
  tag?: {
    data?: CellTag;
  };
}

/**
 * 徽标信息
 */
export interface CellBadge {
  [key: number]: CellBadgeValue;
  [key: string]: CellBadgeValue;
}

export interface CellBadgeValue {
  /**
   * 文本
   */
  text?: string;
  /**
   * 徽标颜色值
   */
  color?: 'success' | 'processing' | 'default' | 'error' | 'warning';
}

/**
 * 标签信息
 */
export interface CellTag {
  [key: number]: CellTagValue;
  [key: string]: CellTagValue;
}

export interface CellTagValue {
  /**
   * 文本
   */
  text?: string;
  /**
   * 颜色值，支持预设和色值
   * - 预设：geekblue,blue,purple,success,red,volcano,orange,gold,lime,green,cyan
   * - 色值：#f50,#ff0
   */
  color?:
    | 'geekblue'
    | 'blue'
    | 'purple'
    | 'success'
    | 'red'
    | 'volcano'
    | 'orange'
    | 'gold'
    | 'lime'
    | 'green'
    | 'cyan'
    | string;
}

export interface CellWidgetData {
  value?: unknown;
  default?: unknown;
  defaultCondition?: unknown;
  options?: CellOptions;
  truncate?: boolean;
}
