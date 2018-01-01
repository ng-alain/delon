import { Injectable, OnDestroy, Optional, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, ActivatedRoute } from '@angular/router';
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
    private _cached: ReuseTabCached[] = [];
    private _titleCached: { [url: string]: string } = {};
    private removeBuffer: string;

    // region: public

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
    index(url: string): number {
        return this._cached.findIndex(w => w.url === url);
    }
    /** 获取指定路径缓存是否存在 */
    exists(url: string): boolean {
        return this.index(url) !== -1;
    }
    /** 获取指定路径缓存 */
    get(path: string): ReuseTabCached {
        return path ? this._cached.find(w => w.url === path) || null : null;
    }

    private destroy(_handle: any) {
        if (_handle && _handle.componentRef && _handle.componentRef.destroy) _handle.componentRef.destroy();
    }

    /**
     * 移除指定路径缓存
     */
    remove(data: any): boolean {
        let url = data;
        if (typeof data !== 'string') {
            url = data.url;
        }
        this.removeBuffer = url;
        const idx = this.index(url);
        const item = idx !== -1 ? this._cached[idx] : null;
        if (item) {
            this.destroy(item._handle);
            this._cached.splice(idx, 1);
            delete this._titleCached[url];
        }
        this._cachedChange.next({ active: 'remove', item });
        return true;
    }

    /**
     * 清除所有缓存
     */
    clear() {
        this.removeBuffer = null;
        this._cached.forEach(v => this.destroy(v._handle));
        this._cached = [];
        this._titleCached = {};
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
        return this._cachedChange.asObservable();
    }
    /** 设置当前页标题 */
    set title(value: string) {
        if (!value) return;
        this._titleCached[this.getUrl(this.injector.get(ActivatedRoute).snapshot)] = value;
        this._cachedChange.next({ active: 'title', title: value });
    }

    // endregion

    // region: privates

    /** @private */
    _clearRemoveBuffer() {
        this.removeBuffer = null;
    }

    // endregion

    constructor(private injector: Injector, @Optional() private menuService: MenuService) { }

    /** @private */
    getTitle(url: string, route?: ActivatedRouteSnapshot): string {
        if (this._titleCached[url]) return this._titleCached[url];
        if (route && route.data && (route.data.reuseTitle || route.data.title))
            return route.data.reuseTitle || route.data.title;
        if (!this.menuService) return url;

        const list = this.menuService.getPathByUrl(url);
        const item = list.pop();
        return item ? item.text : url;
    }

    getTruthRoute(route: ActivatedRouteSnapshot) {
        let next = route;
        while (next.firstChild) next = next.firstChild;
        return next;
    }

    getUrl(route: ActivatedRouteSnapshot): string {
        let next = this.getTruthRoute(route);
        const segments = [];
        while (next) {
            segments.push(next.url.join('/'));
            next = next.parent;
        }
        const url = '/' + segments.filter(i => i).reverse().join('/');
        return url;
    }

    private getMenu(url: string) {
        const menus = this.menuService ? this.menuService.getPathByUrl(url) : [];
        if (!menus || menus.length === 0) return null;
        return menus.pop();
    }

    /** @private */
    getClosable(url: string, route?: ActivatedRouteSnapshot): boolean {
        if (route && route.data && typeof route.data.reuseClosable !== 'undefined')
            return route.data.reuseClosable;

        const menu = this._mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
        if (menu && typeof menu.reuseClosable !== 'undefined')
            return menu.reuseClosable;

        return true;
    }

    can(route: ActivatedRouteSnapshot): boolean {
        const url = this.getUrl(route);
        if (url === this.removeBuffer) return false;

        if (route.data && typeof route.data.reuse === 'boolean') return route.data.reuse;

        if (this._mode !== ReuseTabMatchMode.URL) {
            const menu = this.getMenu(url);
            if (!menu) return false;
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
        return this.can(route);
    }

    /**
     * 存储
     */
    store(_snapshot: ActivatedRouteSnapshot, _handle: {}) {
        if (!_snapshot.routeConfig || _snapshot.routeConfig.loadChildren || _snapshot.routeConfig.children) return ;
        if (this.count >= this._max) this._cached.shift();
        const url = this.getUrl(_snapshot);
        const idx = this.index(url);

        const item: ReuseTabCached = {
            customTitle: this._titleCached[url],
            title: this.getTitle(url, _snapshot),
            // closable: this.getClosable(url, _snapshot),
            url,
            _snapshot,
            _handle
        };
        if (idx === -1) {
            this._cached.push(item);
        } else {
            this._cached[idx] = item;
        }
        this._clearRemoveBuffer();

        this._cachedChange.next({ active: 'add', item });
    }

    /**
     * 决定是否允许应用缓存数据
     */
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        if (!route.routeConfig || route.routeConfig.loadChildren || route.routeConfig.children) return false;
        const url = this.getUrl(route);
        const data = this.get(url);
        const ret = !!(data && data._handle);
        return ret;
    }

    /**
     * 提取复用数据
     */
    retrieve(route: ActivatedRouteSnapshot): {} {
        if (!route.routeConfig || route.routeConfig.loadChildren || route.routeConfig.children) return null;
        const url = this.getUrl(route);
        const data = this.get(url);
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
