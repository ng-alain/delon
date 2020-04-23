import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';

/**
 * @deprecated `SVConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
@Injectable({ providedIn: 'root' })
export class SVConfig {
  constructor() {
    deprecation10Cog(`SVConfig`);
  }
  /** 大小 */
  size: 'small' | 'large';
  /** 间距，默认：`32` */
  gutter = 32;
  /** 布局，默认：`horizontal` */
  layout = 'horizontal';
  /** 列数，默认：`3` */
  col = 3;
  /** 是否显示默认值，当内容为空值时显示 `-`，默认：`true` */
  default = true;
  /** `label` 固定宽度，若 `null` 或 `undefined` 表示非固定，默认：`null` */
  labelWidth: number | null = null;
}
