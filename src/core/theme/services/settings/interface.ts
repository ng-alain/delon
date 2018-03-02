import { ThemeType } from '../themes/interface';

export interface App {
    name?: string;
    description?: string;
    year?: number;
    [key: string]: any;
}

export interface User {
    name?: string;
    avatar?: string;
    email?: string;
    [key: string]: any;
}

export type SidebarThemeType = 'light' | 'dark';

export interface Layout {
    /** 是否固定顶部菜单 */
    fixed: boolean;
    /** 是否折叠右边菜单 */
    collapsed: boolean;
    /** 是否固定宽度 */
    boxed: boolean;
    /** 当前主题 */
    theme: ThemeType;
    /** 语言环境 */
    lang: string;
}
