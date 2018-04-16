import { Injectable } from '@angular/core';

@Injectable()
export class AdDescListConfig {
    /**
     * 布局方式
     */
    layout?: 'horizontal' | 'vertical' = 'horizontal';

    /**
     * 列表项间距，单位为 `px`
     */
    gutter?: number = 32;

    /**
     * 列表型号
     */
    size?: 'small' | 'large';
}
