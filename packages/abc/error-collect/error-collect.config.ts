import { Injectable } from '@angular/core';
import { deprecation10Cog } from '@delon/util';

/**
 * @deprecated `ErrorCollectConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
@Injectable({ providedIn: 'root' })
export class ErrorCollectConfig {
  constructor() {
    deprecation10Cog(`ErrorCollectConfig`);
  }
  /**
   * 监听频率
   */
  freq?: number = 500;
  /**
   * 顶部偏移值
   */
  offsetTop?: number = 65 + 64 + 8 * 2;
}
