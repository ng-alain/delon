import { InjectionToken } from '@angular/core';

export const DA_OPTIONS_TOKEN = new InjectionToken<AuthOptions>('DA_OPTIONS_TOKEN');
export const DA_USER_OPTIONS_TOKEN = new InjectionToken<AuthOptions>('DA_USER_OPTIONS_TOKEN');

export interface AuthOptions {
    /**
     * 存储KEY值
     */
    store_key?: string;
    /**
     * 无效时跳转至登录页，包括：
     * - 无效token值
     * - token已过期（限JWT）
     */
    token_invalid_redirect?: boolean;
    /**
     * token过期时间偏移值，默认：10秒（单位：秒）
     */
    token_exp_offset?: number;
    /**
     * 发送token参数名，默认：token
     */
    token_send_key?: string;
    /**
     * 发送token模板，使用 `${token}` 表示token点位符，例如：
     * - `Bearer ${token}`
     */
    token_send_template?: string;
    /**
     * 发送token参数位置，默认：header
     *
     * @type {('header' | 'body' | 'url')}
     */
    token_send_place?: 'header' | 'body' | 'url';
    /**
     * 登录页路由地址
     */
    login_url?: string;
    /**
     * 忽略TOKEN的URL地址列表，默认值为：[ /\/login/, /assets\// ]
     *
     * **注：** 由于Angular的Bug（[#14187](https://github.com/angular/angular/issues/14187)），暂时只支持 `string[]` 格式正则表达式
     */
    ignores?: (string | RegExp)[];
    /**
     * 允许匿名登录KEY，若请求参数中带有该KEY表示忽略TOKEN
     */
    allow_anonymous_key?: string;
}

export const DEFAULT = {
    store_key: '_token',
    token_invalid_redirect: true,
    token_exp_offset: 10,
    token_send_key: 'token',
    token_send_template: '${token}',
    token_send_place: 'header',
    login_url: `/login`,
    ignores: [ /\/login/, /assets\// ],
    allow_anonymous_key: `_allow_anonymous`
};
