import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorCollectConfig {
  /**
   * 监听频率
   */
  freq?: number = 500;
  /**
   * 顶部偏移值
   */
  offsetTop?: number = 65 + 64 + 8 * 2;
}
