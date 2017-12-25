import { ActivatedRouteSnapshot } from '@angular/router';

/**
 * 复用匹配模式
 */
export enum ReuseTabMatchMode {
    /**
     * （推荐）按菜单 `Menu` 配置
     *
     * 可复用：
     * - `{ text:'Dashboard' }`
     * - `{ text:'Dashboard', reuse: true }`
     *
     * 不可复用：
     * - `{ text:'Dashboard', reuse: false }`
     */
    Menu,
    /**
     * 按菜单 `Menu` 强制配置
     *
     * 可复用：
     * - `{ text:'Dashboard', reuse: true }`
     *
     * 不可复用：
     * - `{ text:'Dashboard' }`
     * - `{ text:'Dashboard', reuse: false }`
     */
    MenuForce,
    /**
     * 对所有路由有效，可以配合 `excludes` 过滤无须复用路由
     */
    URL
}

export interface ReuseTabCached {
    title: string;

    url: string;

    _snapshot: ActivatedRouteSnapshot;

    _handle: any;

    [key: string]: any;
}

export interface ReuseTabNotify {
    active: string;

    [key: string]: any;
}
