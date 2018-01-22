import { Injectable } from '@angular/core';

@Injectable()
export class ProHeaderConfig {
    /**
     * 首页文本，若指定空表示不显示
     */
    home?: string = '首页';
    /**
     * 首页链接
     */
    home_link?: string = '/';
    home_i18n?: string;
}
