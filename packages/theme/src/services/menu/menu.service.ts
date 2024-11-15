import { Injectable, OnDestroy, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, share } from 'rxjs';

import { ACLService } from '@delon/acl';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ALAIN_I18N_TOKEN } from '../i18n/i18n';
import { Menu, MenuIcon, MenuInner } from './interface';

/**
 * 菜单服务，[在线文档](https://ng-alain.com/theme/menu)
 */
@Injectable({ providedIn: 'root' })
export class MenuService implements OnDestroy {
  private readonly i18nSrv = inject(ALAIN_I18N_TOKEN);
  private readonly aclService = inject(ACLService);
  private _change$: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>([]);
  private i18n$?: Subscription;
  private data: Menu[] = [];
  /**
   * 是否完全受控菜单打开状态，默认：`false`
   */
  openStrictly = false;

  constructor() {
    this.i18n$ = this.i18nSrv.change.subscribe(() => this.resume());
  }

  get change(): Observable<Menu[]> {
    return this._change$.pipe(share());
  }

  get menus(): Menu[] {
    return this.data;
  }

  /**
   * Returns a default menu link
   *
   * 返回一个默认跳转的菜单链接
   */
  getDefaultRedirect(opt: { redirectUrl?: string } = {}): string | null | undefined {
    let ret: string | null | undefined;
    this.visit(this.menus, (item: MenuInner) => {
      if (typeof item.link !== 'string' || item.link.length <= 0 || !item._aclResult || item._hidden === true) {
        return;
      }
      if (ret == null || ret.length <= 0 || item.link == opt?.redirectUrl) {
        ret = item.link;
      }
    });
    return ret;
  }

  visit<T extends Menu = Menu>(data: T[], callback: (item: T, parentMenum: T | null, depth?: number) => void): void;
  visit(data: Menu[], callback: (item: Menu, parentMenum: Menu | null, depth?: number) => void): void;
  visit(data: Menu[], callback: (item: Menu, parentMenum: Menu | null, depth?: number) => void): void {
    const inFn = (list: Menu[], parentMenu: Menu | null, depth: number): void => {
      for (const item of list) {
        callback(item, parentMenu, depth);
        if (item.children && item.children.length > 0) {
          inFn(item.children, item, depth + 1);
        } else {
          item.children = [];
        }
      }
    };

    inFn(data, null, 0);
  }

  add(items: Menu[]): void {
    this.data = items;
    this.resume();
  }

  private fixItem(item: MenuInner): void {
    item._aclResult = true;

    if (!item.link) item.link = '';
    if (!item.externalLink) item.externalLink = '';

    // badge
    if (item.badge) {
      if (item.badgeDot !== true) {
        item.badgeDot = false;
      }
      if (!item.badgeStatus) {
        item.badgeStatus = 'error';
      }
    }

    if (!Array.isArray(item.children)) {
      item.children = [];
    }

    // icon
    if (typeof item.icon === 'string') {
      let type = 'class';
      let value = item.icon;
      // compatible `anticon anticon-user`
      if (~item.icon.indexOf(`anticon-`)) {
        type = 'icon';
        value = value.split('-').slice(1).join('-');
      } else if (/^https?:\/\//.test(item.icon)) {
        type = 'img';
      }
      item.icon = { type, value } as NzSafeAny;
    }
    if (item.icon != null) {
      item.icon = { theme: 'outline', spin: false, ...(item.icon as MenuIcon) };
    }

    item.text = item.i18n ? this.i18nSrv.fanyi(item.i18n) : item.text;

    // group
    item.group = item.group !== false;

    // hidden
    item._hidden = typeof item.hide === 'undefined' ? false : item.hide;

    // disabled
    item.disabled = typeof item.disabled === 'undefined' ? false : item.disabled;

    // acl
    item._aclResult = item.acl ? this.aclService.can(item.acl) : true;

    item.open = item.open != null ? item.open : false;
  }

  /**
   * 重置菜单，可能I18N、用户权限变动时需要调用刷新
   */
  resume<T extends Menu = Menu>(callback?: (item: T, parentMenum: T | null, depth?: number) => void): void;
  resume(callback?: (item: Menu, parentMenum: Menu | null, depth?: number) => void): void;
  resume(callback?: (item: Menu, parentMenum: Menu | null, depth?: number) => void): void {
    let i = 1;
    const shortcuts: Menu[] = [];
    this.visit(this.data, (item: MenuInner, parent, depth) => {
      item._id = i++;
      item._parent = parent;
      item._depth = depth;
      this.fixItem(item);

      // shortcut
      if (parent && item.shortcut === true && parent.shortcutRoot !== true) {
        shortcuts.push(item);
      }

      if (callback) callback(item, parent, depth);
    });

    this.loadShortcut(shortcuts);
    this._change$.next(this.data);
  }

  /**
   * 加载快捷菜单，加载位置规则如下：
   * 1、统一在下标0的节点下（即【主导航】节点下方）
   *      1、若 children 存在 【shortcutRoot: true】则最优先【推荐】这种方式
   *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
   *      3、否则放在0节点位置
   */
  private loadShortcut(shortcuts: MenuInner[]): void {
    if (shortcuts.length === 0 || this.data.length === 0) {
      return;
    }

    const ls = this.data[0].children as MenuInner[];
    let pos = ls.findIndex(w => w.shortcutRoot === true);
    if (pos === -1) {
      pos = ls.findIndex(w => w.link!.includes('dashboard'));
      pos = (pos !== -1 ? pos : -1) + 1;
      const shortcutMenu = {
        text: '快捷菜单',
        i18n: 'shortcut',
        icon: 'icon-rocket',
        children: []
      } as MenuInner;
      this.data[0].children!.splice(pos, 0, shortcutMenu);
    }
    let _data = this.data[0].children![pos];
    if (_data.i18n) _data.text = this.i18nSrv.fanyi(_data.i18n);
    _data = Object.assign(_data, {
      shortcutRoot: true,
      _id: -1,
      _parent: null,
      _depth: 1
    } as MenuInner);
    _data.children = shortcuts.map(i => {
      i._depth = 2;
      i._parent = _data;
      return i;
    });
  }

  /**
   * 清空菜单
   */
  clear(): void {
    this.data = [];
    this._change$.next(this.data);
  }

  /**
   * Use `url` or `key` to find menus
   *
   * 利用 `url` 或 `key` 查找菜单
   */
  find(options: {
    key?: string | null;
    url?: string | null;
    recursive?: boolean | null;
    /**
     * When the callback returns a Boolean type, it means the custom validation result
     *
     * 当回调返回一个布尔类型时，表示自定义校验结果
     */
    cb?: ((i: Menu) => boolean | null) | null;
    /**
     * Use the current menu data by default
     *
     * 默认使用当前菜单数据
     */
    data?: Menu[] | null;
    /**
     * Whether to ignore hide items, default: `false`
     *
     * 是否忽略隐藏的项，默认：`false`
     */
    ignoreHide?: boolean;
    /**
     * Whether to return the last one, default: `false`
     *
     * 是否返回最后一个，默认：`false`
     */
    last?: boolean;
  }): Menu | null {
    const opt = { recursive: false, ignoreHide: false, last: false, ...options };
    if (opt.key != null) {
      return this.getItem(opt.key);
    }

    let url = opt.url;

    let item: Menu | null = null;

    while (!item && url) {
      this.visit(opt.data ?? this.data, i => {
        if (!opt.last && item != null) {
          return;
        }
        if (opt.ignoreHide && i.hide) {
          return;
        }
        if (opt.cb) {
          const res = opt.cb(i);
          if (typeof res === 'boolean' && res) {
            item = i;
          }
        }
        if (i.link != null && i.link === url) {
          item = i;
        }
      });

      if (!opt.recursive) break;

      if (/[?;]/g.test(url)) {
        url = url.split(/[?;]/g)[0];
      } else {
        url = url.split('/').slice(0, -1).join('/');
      }
    }

    return item;
  }

  /**
   * 根据url获取菜单列表
   * - 若 `recursive: true` 则会自动向上递归查找
   *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
   */
  getPathByUrl(url: string, recursive: boolean = false): Menu[] {
    const ret: Menu[] = [];
    let item = this.find({ url, recursive }) as MenuInner;

    if (!item) return ret;

    do {
      ret.splice(0, 0, item);
      item = item._parent!;
    } while (item);

    return ret;
  }

  /**
   * Get menu based on `key`
   */
  getItem(key: string): Menu | null {
    let res: Menu | null = null;
    this.visit(this.data, item => {
      if (res == null && item.key === key) {
        res = item;
      }
    });
    return res;
  }

  /**
   * Set menu based on `key`
   */
  setItem(key: string | Menu, value: Menu, options?: { emit?: boolean }): void {
    const item = typeof key === 'string' ? this.getItem(key) : key;
    if (item == null) return;

    Object.keys(value).forEach(k => {
      item[k] = value[k];
    });
    this.fixItem(item);

    if (options?.emit !== false) this._change$.next(this.data);
  }

  /**
   * Open menu based on `key` or menu object
   */
  open(keyOrItem: string | Menu | null, options?: { emit?: boolean }): void {
    let item = typeof keyOrItem === 'string' ? this.find({ key: keyOrItem }) : keyOrItem;
    if (item == null) return;

    this.visit(this.menus, (i: MenuInner) => {
      i._selected = false;
      if (!this.openStrictly) i.open = false;
    });

    do {
      item._selected = true;
      item.open = true;
      item = item._parent;
    } while (item);
    if (options?.emit !== false) this._change$.next(this.data);
  }

  openAll(status?: boolean): void {
    this.toggleOpen(null, { allStatus: status });
  }

  toggleOpen(keyOrItem: string | Menu | null, options?: { allStatus?: boolean; emit?: boolean }): void {
    let item = typeof keyOrItem === 'string' ? this.find({ key: keyOrItem }) : keyOrItem;
    if (item == null) {
      this.visit(this.menus, (i: MenuInner) => {
        i._selected = false;
        i.open = options?.allStatus === true;
      });
    } else {
      if (!this.openStrictly) {
        this.visit(this.menus, (i: MenuInner) => {
          if (i !== item) i.open = false;
        });
        let pItem = item._parent;
        while (pItem) {
          pItem.open = true;
          pItem = pItem._parent;
        }
      }
      item.open = !item.open;
    }
    if (options?.emit !== false) this._change$.next(this.data);
  }

  ngOnDestroy(): void {
    this._change$.unsubscribe();
    this.i18n$?.unsubscribe();
  }
}
