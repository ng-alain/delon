import { Injectable, Injector, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ExtraOptions, NavigationEnd, NavigationStart, Router, ROUTER_CONFIGURATION } from '@angular/router';
import { BehaviorSubject, Observable, Unsubscribable } from 'rxjs';

import { MenuService, ScrollService } from '@delon/theme';
import { ReuseTabCached, ReuseTabMatchMode, ReuseTabNotify, ReuseTitle } from './reuse-tab.interfaces';

/**
 * 路由复用类，提供复用所需要一些基本接口
 *
 * **注：** 所有缓存数据来源于路由离开后才会产生
 */
@Injectable({ providedIn: 'root' })
export class ReuseTabService implements OnDestroy {
  private _max = 10;
  private _keepingScroll = false;
  private _debug = false;
  private _mode = ReuseTabMatchMode.Menu;
  private _excludes: RegExp[] = [];
  private _cachedChange: BehaviorSubject<ReuseTabNotify> = new BehaviorSubject<ReuseTabNotify>(null);
  private _cached: ReuseTabCached[] = [];
  private _titleCached: { [url: string]: ReuseTitle } = {};
  private _closableCached: { [url: string]: boolean } = {};
  private _router$: Unsubscribable;
  private removeUrlBuffer: string;
  private positionBuffer: { [url: string]: [ number, number ]} = {};

  private get snapshot() {
    return this.injector.get(ActivatedRoute).snapshot;
  }

  // #region public

  /** 当前路由地址 */
  get curUrl() {
    return this.getUrl(this.snapshot);
  }

  /** 允许最多复用多少个页面，取值范围 `2-100`，值发生变更时会强制关闭且忽略可关闭条件 */
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
  get mode() {
    return this._mode;
  }
  /** 设置Debug模式 */
  set debug(value: boolean) {
    this._debug = value;
  }
  get debug() {
    return this._debug;
  }
  set keepingScroll(value: boolean) {
    this._keepingScroll = value;
    this.initScroll();
  }
  get keepingScroll() {
    return this._keepingScroll;
  }
  keepingScrollContainer: Element;
  /** 排除规则，限 `mode=URL` */
  set excludes(values: RegExp[]) {
    if (!values) return;
    this._excludes = values;
  }
  get excludes() {
    return this._excludes;
  }
  /** 获取已缓存的路由 */
  get items(): ReuseTabCached[] {
    return this._cached;
  }
  /** 获取当前缓存的路由总数 */
  get count() {
    return this._cached.length;
  }
  /** 订阅缓存变更通知 */
  get change(): Observable<ReuseTabNotify> {
    return this._cachedChange.asObservable(); // .pipe(filter(w => w !== null));
  }
  /** 自定义当前标题 */
  set title(value: string | ReuseTitle) {
    const url = this.curUrl;
    if (typeof value === 'string') value = { text: value };
    this._titleCached[url] = value;
    this.di('update current tag title: ', value);
    this._cachedChange.next({
      active: 'title',
      title: value,
      list: this._cached,
    });
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
  get(url: string): ReuseTabCached {
    return url ? this._cached.find(w => w.url === url) || null : null;
  }
  private remove(url: string | number, includeNonCloseable: boolean): boolean {
    const idx = typeof url === 'string' ? this.index(url) : url;
    const item = idx !== -1 ? this._cached[idx] : null;
    if (!item || (!includeNonCloseable && !item.closable)) return false;

    this.destroy(item._handle);

    this._cached.splice(idx, 1);
    delete this._titleCached[url];
    return true;
  }
  /**
   * 根据URL移除标签
   *
   * @param [includeNonCloseable=false] 是否强制包含不可关闭
   */
  close(url: string, includeNonCloseable = false) {
    this.removeUrlBuffer = url;

    this.remove(url, includeNonCloseable);

    this._cachedChange.next({ active: 'close', url, list: this._cached });

    this.di('close tag', url);
    return true;
  }
  /**
   * 清除右边
   *
   * @param [includeNonCloseable=false] 是否强制包含不可关闭
   */
  closeRight(url: string, includeNonCloseable = false) {
    const start = this.index(url);
    for (let i = this.count - 1; i > start; i--) {
      this.remove(i, includeNonCloseable);
    }

    this.removeUrlBuffer = null;

    this._cachedChange.next({ active: 'closeRight', url, list: this._cached });

    this.di('close right tages', url);
    return true;
  }
  /**
   * 清除所有缓存
   *
   * @param [includeNonCloseable=false] 是否强制包含不可关闭
   */
  clear(includeNonCloseable = false) {
    this._cached.forEach(w => {
      if (!includeNonCloseable && w.closable) this.destroy(w._handle);
    });
    this._cached = this._cached.filter(
      w => !includeNonCloseable && !w.closable,
    );

    this.removeUrlBuffer = null;

    this._cachedChange.next({ active: 'clear', list: this._cached });

    this.di('clear all catch');
  }
  /**
   * 移动缓存数据
   * @param url 要移动的URL地址
   * @param position 新位置，下标从 `0` 开始
   *
   * @example
   * ```
   * // source
   * [ '/a/1', '/a/2', '/a/3', '/a/4', '/a/5' ]
   * move('/a/1', 2);
   * // output
   * [ '/a/2', '/a/3', '/a/1', '/a/4', '/a/5' ]
   * move('/a/1', -1);
   * // output
   * [ '/a/2', '/a/3', '/a/4', '/a/5', '/a/1' ]
   * ```
   */
  move(url: string, position: number) {
    const start = this._cached.findIndex(w => w.url === url);
    if (start === -1) return;
    const data = this._cached.slice();
    data.splice(
      position < 0 ? data.length + position : position,
      0,
      data.splice(start, 1)[0],
    );
    this._cached = data;
    this._cachedChange.next({
      active: 'move',
      url,
      position,
      list: this._cached,
    });
  }
  /**
   * 强制关闭当前路由（包含不可关闭状态），并重新导航至 `newUrl` 路由
   */
  replace(newUrl: string) {
    const url = this.curUrl;
    if (this.exists(url)) {
      this.close(url, true);
    } else {
      this.removeUrlBuffer = url;
    }
    this.injector.get(Router).navigateByUrl(newUrl);
  }
  /**
   * 获取标题，顺序如下：
   *
   * 1. 组件内使用 `ReuseTabService.title = 'new title'` 重新指定文本
   * 2. 路由配置中 data 属性中包含 titleI18n > title
   * 3. 菜单数据中 text 属性
   *
   * @param url 指定URL
   * @param route 指定路由快照
   */
  getTitle(url: string, route?: ActivatedRouteSnapshot): ReuseTitle {
    if (this._titleCached[url]) return this._titleCached[url];

    if (route && route.data && (route.data.titleI18n || route.data.title))
      return {
        text: route.data.title,
        i18n: route.data.titleI18n,
      } as ReuseTitle;

    const menu =
      this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
    return menu ? { text: menu.text, i18n: menu.i18n } : { text: url };
  }

  /**
   * 清除标题缓存
   */
  clearTitleCached() {
    this._titleCached = {};
  }
  /** 自定义当前 `closable` 状态 */
  set closable(value: boolean) {
    const url = this.curUrl;
    this._closableCached[url] = value;
    this.di('update current tag closable: ', value);
    this._cachedChange.next({
      active: 'closable',
      closable: value,
      list: this._cached,
    });
  }
  /**
   * 获取 `closable` 状态，顺序如下：
   *
   * 1. 组件内使用 `ReuseTabService.closable = true` 重新指定 `closable` 状态
   * 2. 路由配置中 data 属性中包含 `reuseClosable`
   * 3. 菜单数据中 `reuseClosable` 属性
   *
   * @param url 指定URL
   * @param route 指定路由快照
   */
  getClosable(url: string, route?: ActivatedRouteSnapshot): boolean {
    if (typeof this._closableCached[url] !== 'undefined')
      return this._closableCached[url];

    if (route && route.data && typeof route.data.reuseClosable === 'boolean')
      return route.data.reuseClosable;

    const menu =
      this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
    if (menu && typeof menu.reuseClosable === 'boolean')
      return menu.reuseClosable;

    return true;
  }
  /**
   * 清空 `closable` 缓存
   */
  clearClosableCached() {
    this._closableCached = {};
  }
  getTruthRoute(route: ActivatedRouteSnapshot) {
    let next = route;
    while (next.firstChild) next = next.firstChild;
    return next;
  }
  /**
   * 根据快照获取URL地址
   */
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
  /**
   * 检查快照是否允许被复用
   */
  can(route: ActivatedRouteSnapshot): boolean {
    const url = this.getUrl(route);
    if (url === this.removeUrlBuffer) return false;

    if (route.data && typeof route.data.reuse === 'boolean')
      return route.data.reuse;

    if (this.mode !== ReuseTabMatchMode.URL) {
      const menu = this.getMenu(url);
      if (!menu) return false;
      if (this.mode === ReuseTabMatchMode.Menu) {
        if (menu.reuse === false) return false;
      } else {
        if (!menu.reuse || menu.reuse !== true) return false;
      }
      return true;
    }
    return this._excludes.findIndex(r => r.test(url)) === -1;
  }
  /**
   * 刷新，触发一个 refresh 类型事件
   */
  // tslint:disable-next-line:no-any
  refresh(data?: any) {
    this._cachedChange.next({ active: 'refresh', data });
  }
  // #endregion

  // #region privates

  // tslint:disable-next-line:no-any
  private destroy(_handle: any) {
    if (_handle && _handle.componentRef && _handle.componentRef.destroy)
      _handle.componentRef.destroy();
  }

  private di(...args) {
    if (!this.debug) return;
    // tslint:disable-next-line:no-console
    console.warn(...args);
  }

  // #endregion

  constructor(private injector: Injector, private menuService: MenuService) { }

  init() {
    this.initScroll();
  }

  private getMenu(url: string) {
    const menus = this.menuService.getPathByUrl(url);
    if (!menus || menus.length === 0) return null;
    return menus.pop();
  }

  // tslint:disable-next-line:no-any
  private runHook(method: string, url: string, comp: any) {
    if (comp.instance && typeof comp.instance[method] === 'function')
      comp.instance[method]();
  }

  private hasInValidRoute(route: ActivatedRouteSnapshot) {
    return (
      !route.routeConfig ||
      route.routeConfig.loadChildren ||
      route.routeConfig.children
    );
  }

  /**
   * 决定是否允许路由复用，若 `true` 会触发 `store`
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (this.hasInValidRoute(route)) return false;
    this.di('#shouldDetach', this.can(route), this.getUrl(route));
    return this.can(route);
  }

  /**
   * 存储
   */
  // tslint:disable-next-line:no-any
  store(_snapshot: ActivatedRouteSnapshot, _handle: any) {
    const url = this.getUrl(_snapshot);
    const idx = this.index(url);

    const item: ReuseTabCached = {
      title: this.getTitle(url, _snapshot),
      closable: this.getClosable(url, _snapshot),
      position: this.getKeepingScroll(url, _snapshot) ? this.positionBuffer[url] : null,
      url,
      _snapshot,
      _handle,
    };
    if (idx === -1) {
      if (this.count >= this._max) {
        // Get the oldest closable location
        const closeIdx = this._cached.findIndex(w => w.closable);
        if (closeIdx !== -1) this.remove(closeIdx, false);
      }
      this._cached.push(item);
    } else {
      this._cached[idx] = item;
    }
    this.removeUrlBuffer = null;

    this.di('#store', idx === -1 ? '[new]' : '[override]', url);

    if (_handle && _handle.componentRef) {
      this.runHook('_onReuseDestroy', url, _handle.componentRef);
    }

    this._cachedChange.next({ active: 'add', item, list: this._cached });
  }

  /**
   * 决定是否允许应用缓存数据
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (this.hasInValidRoute(route)) return false;
    const url = this.getUrl(route);
    const data = this.get(url);
    const ret = !!(data && data._handle);
    this.di('#shouldAttach', ret, url);
    if (ret && data._handle.componentRef) {
      this.runHook('_onReuseInit', url, data._handle.componentRef);
    }
    return ret;
  }

  /**
   * 提取复用数据
   */
  retrieve(route: ActivatedRouteSnapshot): {} {
    if (this.hasInValidRoute(route)) return null;
    const url = this.getUrl(route);
    const data = this.get(url);
    const ret = (data && data._handle) || null;
    this.di('#retrieve', url, ret);
    return ret;
  }

  /**
   * 决定是否应该进行复用路由处理
   */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    let ret = future.routeConfig === curr.routeConfig;
    if (!ret) return false;

    const path = ((future.routeConfig && future.routeConfig.path) || '') as string;
    if (path.length > 0 && ~path.indexOf(':')) {
      const futureUrl = this.getUrl(future);
      const currUrl = this.getUrl(curr);
      ret = futureUrl === currUrl;
    }
    this.di('=====================');
    this.di(
      '#shouldReuseRoute',
      ret,
      `${this.getUrl(curr)}=>${this.getUrl(future)}`,
      future,
      curr,
    );
    return ret;
  }

  // #region scroll

  /**
   * 获取 `keepingScroll` 状态，顺序如下：
   *
   * 1. 路由配置中 data 属性中包含 `keepingScroll`
   * 2. 菜单数据中 `keepingScroll` 属性
   * 3. 组件 `keepingScroll` 值
   */
  getKeepingScroll(url: string, route?: ActivatedRouteSnapshot): boolean {
    if (route && route.data && typeof route.data.keepingScroll === 'boolean')
      return route.data.keepingScroll;

    const menu = this.mode !== ReuseTabMatchMode.URL ? this.getMenu(url) : null;
    if (menu && typeof menu.keepingScroll === 'boolean')
      return menu.keepingScroll;

    return this.keepingScroll;
  }

  private get isDisabledInRouter(): boolean {
    const routerConfig: ExtraOptions = this.injector.get(ROUTER_CONFIGURATION, {} as any);
    return routerConfig.scrollPositionRestoration === 'disabled';
  }

  private get ss(): ScrollService {
    return this.injector.get(ScrollService);
  }

  private initScroll() {
    if (this._router$) {
      this._router$.unsubscribe();
    }

    this._router$ = this.injector.get(Router).events.subscribe(e => {
      if (e instanceof NavigationStart) {
        const url = this.curUrl;
        if (this.getKeepingScroll(url, this.getTruthRoute(this.snapshot))) {
          this.positionBuffer[url] = this.ss.getScrollPosition(this.keepingScrollContainer);
        } else {
          delete this.positionBuffer[url];
        }
      } else if (e instanceof NavigationEnd) {
        const url = this.curUrl;
        const item = this.get(url);
        if (item && item.position && this.getKeepingScroll(url, this.getTruthRoute(this.snapshot))) {
          if (this.isDisabledInRouter) {
            this.ss.scrollToPosition(this.keepingScrollContainer, item.position);
          } else {
            setTimeout(() => this.ss.scrollToPosition(this.keepingScrollContainer, item.position), 1);
          }
        }
      }
    });
  }

  // #endregion

  ngOnDestroy(): void {
    const { _cachedChange, _router$ } = this;
    this.clear();
    this._cached = [];
    _cachedChange.complete();

    if (_router$) {
      _router$.unsubscribe();
    }
  }
}
