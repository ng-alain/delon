import { Injectable } from '@angular/core';

@Injectable()
export class AdPageHeaderConfig {
    /**
     * 首页文本，若指定空表示不显示
     */
    home?: string = '首页';
    /**
     * 首页链接
     */
    home_link?: string = '/';
    /**
     * 首页链接国际化参数
     */
    home_i18n?: string;
    /**
     * 自动生成导航，以当前路由从主菜单中定位
     */
    autoBreadcrumb?: boolean = true;
}
