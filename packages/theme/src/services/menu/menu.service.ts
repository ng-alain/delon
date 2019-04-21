import { Inject, Injectable, OnDestroy, Optional } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { share } from 'rxjs/operators';

import { ACLService } from '@delon/acl';

import { AlainI18NService, ALAIN_I18N_TOKEN } from '../i18n/i18n';
import { Menu, MenuIcon } from './interface';

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

  visit(data: Menu[], callback: (item: Menu, parentMenum: Menu | null, depth?: number) => void) {
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

  add(items: Menu[]) {
    this.data = items;
    this.resume();
  }

  /**
   * 重置菜单，可能I18N、用户权限变动时需要调用刷新
   */
  resume(callback?: (item: Menu, parentMenum: Menu | null, depth?: number) => void) {
    let i = 1;
    const shortcuts: Menu[] = [];
    this.visit(this.data, (item, parent, depth) => {
      item.__id = i++;
      item.__parent = parent;
      item._depth = depth;

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

      item._type = item.externalLink ? 2 : 1;
      if (item.children && item.children.length > 0) {
        item._type = 3;
      }

      // icon
      if (typeof item.icon === 'string') {
        let type = 'class';
        let value = item.icon;
        // compatible `anticon anticon-user`
        if (~item.icon.indexOf(`anticon-`)) {
          type = 'icon';
          value = value
            .split('-')
            .slice(1)
            .join('-');
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
  private loadShortcut(shortcuts: Menu[]) {
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
      __id: -1,
      __parent: null,
      _type: 3,
      _depth: 1,
    });
    _data.children = shortcuts.map(i => {
      i._depth = 2;
      i.__parent = _data;
      return i;
    });
  }

  get menus() {
    return this.data;
  }

  /**
   * 清空菜单
   */
  clear() {
    this.data = [];
    this._change$.next(this.data);
  }

  getHit(data: Menu[], url: string, recursive = false, cb: ((i: Menu) => void) | null = null): Menu | null {
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

      url = url
        .split('/')
        .slice(0, -1)
        .join('/');
    }

    return item;
  }

  /**
   * 根据URL设置菜单 `_open` 属性
   * - 若 `recursive: true` 则会自动向上递归查找
   *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
   */
  openedByUrl(url: string | null, recursive = false) {
    if (!url) return;

    let findItem = this.getHit(this.data, url, recursive, i => {
      i._selected = false;
      i._open = false;
    });
    if (findItem == null) return;

    do {
      findItem._selected = true;
      findItem._open = true;
      findItem = findItem.__parent;
    } while (findItem);
  }

  /**
   * 根据url获取菜单列表
   * - 若 `recursive: true` 则会自动向上递归查找
   *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
   */
  getPathByUrl(url: string, recursive = false): Menu[] {
    const ret: Menu[] = [];
    let item = this.getHit(this.data, url, recursive);

    if (!item) return ret;

    do {
      ret.splice(0, 0, item);
      item = item.__parent;
    } while (item);

    return ret;
  }

  ngOnDestroy(): void {
    this._change$.unsubscribe();
    this.i18n$.unsubscribe();
  }
}
