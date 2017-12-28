import { InjectionToken } from '@angular/core';

export const DM_OPTIONS_TOKEN = new InjectionToken<MockOptions>('DM_OPTIONS_TOKEN');
export const DM_USER_OPTIONS_TOKEN = new InjectionToken<MockOptions>('DM_USER_OPTIONS_TOKEN');

export interface MockOptions {
    /** 规则定义数据 */
    data: any;
    /** 请求延迟，单位：毫秒，默认：`300` */
    delay?: number;
    /** 是否强制所有请求都Mock，`true` 表示当请求的URL不存在时直接返回 404 错误，`false` 表示未命中时发送真实HTTP请求 */
    force?: boolean;
    /** 是否打印 Mock 请求信息，弥补浏览器无Network信息 */
    log?: boolean;
}

export const DEFAULT = {
    delay: 300,
    force: false,
    log: true
};

