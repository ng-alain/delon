import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { MenuService } from '@delon/theme';
import { ReuseTabCached, ReuseTabMatchMode, ReuseTabNotify } from './interface';

@Injectable()
export class ReuseTabService implements OnDestroy {
    private _max = 10;
    private _mode = ReuseTabMatchMode.Menu;
    private _excludes: RegExp[] = [ ];
    private _cachedChange: BehaviorSubject<ReuseTabNotify> = new BehaviorSubject<ReuseTabNotify>(null);
    private _change: Observable<ReuseTabNotify> = this._cachedChange.asObservable();
    private _cached: ReuseTabCached[] = [];

    /** 允许最多复用多少个页面，取值范围 `2-100` */
    set max(value: number) {
        this._max = Math.min(Math.max(value, 2), 100);
        for (let i = this._cached.length; i > this._max; i--) {
            this._cached.pop();
        }
    }
    /** 设置匹配模式 */
    set mode(value: ReuseTabMatchMode) {
        this._mode = value;
    }
    /** 排除规则，限 `mode=URL` */
    set excludes(values: RegExp[]) {
        if (!values) return;
        this._excludes = values;
    }
    /** 获取指定路径缓存所在位置，`-1` 表示无缓存 */
    index(path: string): number {
        return this._cached.findIndex(w => w.url === path);
    }
    /** 获取指定路径缓存是否存在 */
    exists(path: string): boolean {
        return this.index(path) !== -1;
    }
    /** 获取指定路径缓存 */
    get(path: string): ReuseTabCached {
        return path ? this._cached.find(w => w.url === path) || null : null;
    }
    /** 移除指定路径缓存 */
    remove(path: string): boolean {
        const item = this.get(path);
        if (item) this._cached.splice(this.index(path), 1);
        this._cachedChange.next({ active: 'remove', item });
        return true;
    }
    /** 清除所有缓存 */
    clear() {
        this._cached = [];
        this._cachedChange.next({ active: 'clear' });
    }
    /** 获取已缓存的路由 */
    get items() {
        return this._cached;
    }
    /** 获取当前缓存的路由总数 */
    get count() {
        return this._cached.length;
    }
    /** 订阅缓存变更通知 */
    get change(): Observable<ReuseTabNotify> {
        return this._change;
    }

    constructor(private menuService: MenuService) { }

    private clearUrl(url: string) {
        return url.split('?')[0].split('#')[0];
    }

    getTitle(url: string): string {
        url = this.clearUrl(url);
        const list = this.menuService.getPathByUrl(url);
        const item = list.pop();
        return item ? item.text : url;
    }

    private getUrl(route: ActivatedRouteSnapshot): string {
        let next = route;
        while (next.firstChild) {
            next = next.firstChild;
        }
        const segments = [];
        while (next) {
            segments.push(next.url.join('/'));
            next = next.parent;
        }
        const url = '/' + segments.filter(i => i).reverse().join('/');
        return url;
    }

    can(url: string): boolean {
        if (this._mode !== ReuseTabMatchMode.URL) {
            const menus = this.menuService.getPathByUrl(url);
            if (!menus || menus.length === 0) return false;
            const menu = menus.pop();
            if (this._mode === ReuseTabMatchMode.Menu) {
                if (menu.reuse === false) return false;
            } else {
                if (!menu.reuse || menu.reuse !== true) return false;
            }
            return true;
        }
        let idx = 0;
        if (url) idx = this._excludes.findIndex(r => r.test(url));
        return idx === -1;
    }

    /**
     * 决定是否允许路由复用，若 `true` 会触发 `store`
     */
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        if (!route.routeConfig || route.routeConfig.loadChildren || route.routeConfig.children) return false;
        const url = this.getUrl(route);
        console.log('shouldDetach', url, this.can(url), route);
        return this.can(url);
    }

    /**
     * 存储
     */
    store(_snapshot: ActivatedRouteSnapshot, _handle: {}) {
        if (!_snapshot.routeConfig || _snapshot.routeConfig.loadChildren || _snapshot.routeConfig.children) return ;
        if (this.count >= this._max) this._cached.shift();
        const url = this.getUrl(_snapshot);
        const idx = this.index(url);
        const item = {
            title: this.getTitle(url),
            url,
            _snapshot,
            _handle
        };
        if (idx === -1) {
            this._cached.push(item);
        } else {
            this._cached[idx] = item;
        }

        this._cachedChange.next({ active: 'add', item });
        console.log('store', url, _snapshot, _handle);
    }

    /**
     * 决定是否允许应用缓存数据
     */
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        if (!route.routeConfig || route.routeConfig.loadChildren || route.routeConfig.children) return false;
        const url = this.getUrl(route);
        const data = this.get(url);
        const ret = !!(data && data._handle);
        console.log('shouldAttach', url, ret);
        return ret;
    }

    /**
     * 提取复用数据
     */
    retrieve(route: ActivatedRouteSnapshot): {} {
        if (!route.routeConfig || route.routeConfig.loadChildren || route.routeConfig.children) return null;
        const url = this.getUrl(route);
        const data = this.get(url);
        console.log('retrieve', url, data, route);
        return (data && data._handle) || null;
    }

    /**
     * 决定是否应该进行复用路由处理
     */
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }

    ngOnDestroy(): void {
        this._cached = null;
        this._cachedChange.unsubscribe();
    }
}
