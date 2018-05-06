import { Injectable } from '@angular/core';

@Injectable()
export class AdErrorCollectConfig {
  /**
   * 监听频率
   */
  freq?: number = 500;
  /**
   * 顶部偏移值
   */
  offsetTop?: number = 65 + 64 + 8 * 2;
}
