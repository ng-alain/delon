import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SEConfig {
  /**
   * 大小，默认：`default`
   * - `compact` 紧凑型，强制忽略 `error`、`extra` 展示
   */
  size: 'default' | 'compact' = 'default';
  /**
   * 布局类型，等同 `nzLayout`
   * - `inline` 时强制大小为 `compact`
   */
  nzLayout: 'horizontal' | 'vertical' | 'inline' = 'horizontal';
  /**
   * 间距，当 `nzLayout:horizontal` 时有效，默认：`32`
   */
  gutter?: number = 32;
  /**
   * 列数，默认：`2`
   */
  col?: number = 2;
  /**
   * 标签文本宽度，单位：`px`，默认：`150`
   */
  labelWidth?: number = 150;
  /**
   * 是否立即呈现错误视觉
   */
  firstVisual?: boolean = false;
}
