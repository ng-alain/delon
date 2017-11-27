import { InjectionToken } from '@angular/core';

export interface AlainThemeOptions {
    [key: string]: any;

    /**
     * 后端网址，建议配合 `environment` 一起使用
     */
    SERVER_URL: string;
}

export const ALAIN_THEME_OPTIONS = new InjectionToken<AlainThemeOptions>('ALAIN_THEME_OPTIONS');
