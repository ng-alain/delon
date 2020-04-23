import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';

/**
 * @deprecated `ImageConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
@Injectable({ providedIn: 'root' })
export class ImageConfig {
  constructor() {
    deprecation10Cog(`ImageConfig`);
  }
  /**
   * 默认大小，默认值：`64`，单位：px
   */
  size?: number = 64;

  /**
   * 错误图片
   */
  error?: string = './assets/img/logo.svg';
}
