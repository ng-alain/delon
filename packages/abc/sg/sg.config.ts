import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';

/**
 * @deprecated `SGConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
@Injectable({ providedIn: 'root' })
export class SGConfig {
  constructor() {
    deprecation10Cog(`SGConfig`);
  }
  /**
   * 间距，默认：`32`
   */
  gutter?: number = 32;
  /**
   * 列数，默认：`2`
   */
  col?: number = 2;
}
