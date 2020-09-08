import { Inject, Injectable, OnDestroy, Optional } from '@angular/core';
import { ACLService } from '@delon/acl';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { share } from 'rxjs/operators';
import { AlainI18NService, ALAIN_I18N_TOKEN } from '../i18n/i18n';
import { Menu, MenuIcon } from './interface';

/**
 * 菜单服务，[在线文档](https://ng-alain.com/theme/menu)
 */
@Injectable({ providedIn: 'root' })
export class MenuService implements OnDestroy {
  private _change$: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>([]);
  private i18n$: Subscription;

  private data: Menu[] = [];

  constructor(
    @Optional()
    @Inject(ALAIN_I18N_TOKEN)
    private i18nSrv: AlainI18NService,
    @Optional() private aclService: ACLService,
  ) {
    this.i18n$ = this.i18nSrv.change.subscribe(() => this.resume());
  }

  get change(): Observable<Menu[]> {
    return this._change$.pipe(share());
  }

  visit(data: Menu[], callback: (item: Menu, parentMenum: Menu | null, depth?: number) => void): void {
    const inFn = (list: Menu[], parentMenu: Menu | null, depth: number) => {
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

  private fixItem(item: Menu): void {
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
      item.icon = { type, value } as any;
    }
    if (item.icon != null) {
      item.icon = { theme: 'outline', spin: false, ...(item.icon as MenuIcon) };
    }

    item.text = item.i18n && this.i18nSrv ? this.i18nSrv.fanyi(item.i18n) : item.text;

    // group
    item.group = item.group !== false;

    // hidden
    item._hidden = typeof item.hide === 'undefined' ? false : item.hide;

    // disabled
    item.disabled = typeof item.disabled === 'undefined' ? false : item.disabled;

    // acl
    item._aclResult = item.acl && this.aclService ? this.aclService.can(item.acl) : true;
  }

  /**
   * 重置菜单，可能I18N、用户权限变动时需要调用刷新
   */
  resume(callback?: (item: Menu, parentMenum: Menu | null, depth?: number) => void): void {
    let i = 1;
    const shortcuts: Menu[] = [];
    this.visit(this.data, (item, parent, depth) => {
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
  private loadShortcut(shortcuts: Menu[]): void {
    if (shortcuts.length === 0 || this.data.length === 0) {
      return;
    }

    const ls = this.data[0].children as Menu[];
    let pos = ls.findIndex(w => w.shortcutRoot === true);
    if (pos === -1) {
      pos = ls.findIndex(w => w.link!.includes('dashboard'));
      pos = (pos !== -1 ? pos : -1) + 1;
      const shortcutMenu = {
        text: '快捷菜单',
        i18n: 'shortcut',
        icon: 'icon-rocket',
        children: [],
      } as Menu;
      this.data[0].children!.splice(pos, 0, shortcutMenu);
    }
    let _data = this.data[0].children![pos];
    if (_data.i18n && this.i18nSrv) _data.text = this.i18nSrv.fanyi(_data.i18n);
    // tslint:disable-next-line:prefer-object-spread
    _data = Object.assign(_data, {
      shortcutRoot: true,
      _id: -1,
      _parent: null,
      _depth: 1,
    } as Menu);
    _data.children = shortcuts.map(i => {
      i._depth = 2;
      i._parent = _data;
      return i;
    });
  }

  get menus(): Menu[] {
    return this.data;
  }

  /**
   * 清空菜单
   */
  clear(): void {
    this.data = [];
    this._change$.next(this.data);
  }

  getHit(data: Menu[], url: string, recursive: boolean = false, cb: ((i: Menu) => void) | null = null): Menu | null {
    let item: Menu | null = null;

    while (!item && url) {
      this.visit(data, i => {
        if (cb) {
          cb(i);
        }
        if (i.link != null && i.link === url) {
          item = i;
        }
      });

      if (!recursive) break;

      if (/[?;]/g.test(url)) {
        url = url.split(/[?;]/g)[0];
      } else {
        url = url.split('/').slice(0, -1).join('/');
      }
    }

    return item;
  }

  /**
   * 根据URL设置菜单 `_open` 属性
   * - 若 `recursive: true` 则会自动向上递归查找
   *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
   */
  openedByUrl(url: string | null, recursive: boolean = false): void {
    if (!url) return;

    let findItem = this.getHit(this.data, url, recursive, i => {
      i._selected = false;
      i._open = false;
    });
    if (findItem == null) return;

    do {
      findItem._selected = true;
      findItem._open = true;
      findItem = findItem._parent!;
    } while (findItem);
  }

  /**
   * 根据url获取菜单列表
   * - 若 `recursive: true` 则会自动向上递归查找
   *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
   */
  getPathByUrl(url: string, recursive: boolean = false): Menu[] {
    const ret: Menu[] = [];
    let item = this.getHit(this.data, url, recursive);

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
  setItem(key: string, value: Menu): void {
    const item = this.getItem(key);
    if (item == null) return;

    Object.keys(value).forEach(k => {
      item[k] = value[k];
    });
    this.fixItem(item);

    this._change$.next(this.data);
  }

  ngOnDestroy(): void {
    this._change$.unsubscribe();
    this.i18n$.unsubscribe();
  }
}
