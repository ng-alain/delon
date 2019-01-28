import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SGConfig {
  /**
   * 间距，默认：`32`
   */
  gutter?: number = 32;
  /**
   * 列数，默认：`2`
   */
  col?: number = 2;
}
