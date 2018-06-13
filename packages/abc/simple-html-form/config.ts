import { Injectable } from '@angular/core';

@Injectable()
export class AdSHFConfig {
  /**
   * 列数，默认：`2`
   */
  col? = 2;
  /**
   * 标签文本宽度，单位：`px`，默认：`100`
   */
  labelWidth? = 100;
}
