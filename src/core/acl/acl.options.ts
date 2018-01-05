import { InjectionToken } from '@angular/core';

export const DACL_OPTIONS_TOKEN = new InjectionToken<ACLOptions>('DACL_OPTIONS_TOKEN');
export const DACL_USER_OPTIONS_TOKEN = new InjectionToken<ACLOptions>('DACL_USER_OPTIONS_TOKEN');

export interface ACLOptions {
    /**
     * 路由守卫失败后跳转，默认：`/403`
     */
    guard_url?: string;
}

export const DEFAULT = {
    guard_url: '/403'
};
