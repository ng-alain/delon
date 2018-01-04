import { Injectable, Inject, Optional, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { share } from 'rxjs/operators';
import { ALAIN_I18N_TOKEN, AlainI18NService } from '../i18n/i18n';

export interface Menu {
    /** 文本 */
    text: string;
    /** i18n主键 */
    i18n?: string;
    /** 是否菜单组 */
    group?: boolean;
    /** angular 路由 */
    link?: string;
    /** 外部链接 */
    externalLink?: string;
    /** 链接 target */
    target?: '_blank' | '_self' | '_parent' | '_top';
    /** 图标 */
    icon?: string;
    /** 徽标数，展示的数字。（注：`group:true` 无效） */
    badge?: number;
    /** 徽标数，显示小红点 */
    badge_dot?: boolean;
    /** 徽标数，设置 Badge 颜色 （默认：error， 所有颜色值见：https://github.com/cipchk/ng-alain/blob/master/_documents/utils.md#色彩） */
    badge_status?: string;
    /** 是否隐藏 */
    hide?: boolean;
    /** ACL配置 */
    acl?: any;
    /** 是否快捷菜单项 */
    shortcut?: boolean;
    /** 快捷菜单根节点 */
    shortcut_root?: boolean;
    /** 是否允许复用，需配合 `reuse-tab` 组件 */
    reuse?: boolean;
    /** 二级菜单 */
    children?: Menu[];
    /**
     * 菜单类型，无须指定由 Service 自动识别
     * 1：链接
     * 2：外部链接
     * 3：链接（子菜单）
     */
    _type?: number;
    /** 是否选中 */
    _selected?: boolean;
    /** 是否打开 */
    _open?: boolean;
    _depth?: number;

    [key: string]: any;
}

@Injectable()
export class MenuService implements OnDestroy {

    private _change$: BehaviorSubject<Menu[]> = new BehaviorSubject<Menu[]>([]);

    private data: Menu[] = [];

    constructor(@Optional() @Inject(ALAIN_I18N_TOKEN) private i18nService: AlainI18NService) { }

    get change(): Observable<Menu[]> {
        return this._change$.pipe(share());
    }

    visit(callback: (item: Menu, parentMenum: Menu, depth?: number) => void) {
        const inFn = (list: Menu[], parentMenu: Menu, depth: number) => {
            for (const item of list) {
                callback(item, parentMenu, depth);
                if (item.children && item.children.length > 0) {
                    inFn(item.children, item, depth + 1);
                } else {
                    item.children = [];
                }
            }
        };

        inFn(this.data, null, 0);
    }

    add(items: Menu[]) {
        this.data.push(...items);
        this.resume();
    }

    /**
     * 重置菜单，可能I18N、用户权限变动时需要调用刷新
     */
    resume(callback?: (item: Menu, parentMenum: Menu, depth?: number) => void) {
        let i = 1;
        this.removeShortcut();
        const shortcuts: Menu[] = [];
        this.visit((item, parent, depth) => {
            item.__id = i++;
            item.__parent = parent;
            item._depth = depth;

            // badge
            if (item.badge) {
                if (item.badge_dot !== true) {
                    item.badge_dot = false;
                }
                if (!item.badge_status) {
                    item.badge_status = 'error';
                }
            }

            item._type = item.externalLink ? 2 : 1;
            if (item.children && item.children.length > 0) {
                item._type = 3;
            }

            // shortcut
            if (item.shortcut === true && (item.link || item.externalLink))
                shortcuts.push(item);

            const i18n = item.i18n || item.translate;
            item.text = this.i18nService && i18n ? this.i18nService.fanyi(i18n) : item.text;

            if (callback) callback(item, parent, depth);
        });

        this.loadShortcut(shortcuts);
        this._change$.next(this.data);
    }

    /**
     * 加载快捷菜单，加载位置规则如下：
     * 1、统一在下标0的节点下（即【主导航】节点下方）
     *      1、若 children 存在 【shortcut_root: true】则最优先【推荐】这种方式
     *      2、否则查找带有【dashboard】字样链接，若存在则在此菜单的下方创建快捷入口
     *      3、否则放在0节点位置
     */
    private loadShortcut(shortcuts: Menu[]) {
        if (shortcuts.length === 0 || this.data.length === 0) return;

        const ls = this.data[0].children || [];
        let pos = ls.findIndex(w => w.shortcut_root === true);
        if (pos === -1) {
            pos = ls.findIndex(w => (w.link && w.link.includes('dashboard')) || (w.externalLink && w.externalLink.includes('dashboard')));
            pos = (pos !== -1 ? pos : -1) + 1;
            this.data[0].children.splice(pos, 0, {
                text: '快捷菜单',
                translate: 'shortcut',
                icon: 'icon-rocket',
                children: []
            });
        }
        let _data = this.data[0].children[pos];
        _data = Object.assign(_data, {
            shortcut_root: true,
            _type: 3,
            __id: -1,
            _depth: 1
        });
        _data.children = shortcuts.map(i => {
            i._depth = 2;
            return i;
        });
    }

    private removeShortcut() {
        const ls = this.data[0].children || [];
        const pos = ls.findIndex(w => w.shortcut_root === true);
        if (pos !== -1) ls.splice(pos, 1);
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

    /**
     * 根据URL设置菜单 `_open` 属性
     * @param url URL地址
     */
    openedByUrl(url: string) {
        if (!url) {
            return;
        }

        let findItem: Menu = null;
        this.visit(item => {
            item._open = false;
            if (!item.link) {
                return;
            }
            if (!findItem && url.startsWith(item.link)) {
                findItem = item;
            }
        });
        if (!findItem) {
            console.warn(`not found page name: ${url}`);
            return;
        }

        do {
            findItem._open = true;
            findItem = findItem.__parent;
        } while (findItem);
    }

    /**
     * 根据url获取菜单列表
     * @param url
     */
    getPathByUrl(url: string): Menu[] {
        let item: Menu = null;
        this.visit((i, parent, depth) => {
            if (i.link === url) {
                item = i;
            }
        });

        const ret: Menu[] = [];
        if (!item) return ret;

        do {
            ret.splice(0, 0, item);
            item = item.__parent;
        } while (item);

        return ret;
    }

    ngOnDestroy(): void {
        if (this._change$) this._change$.unsubscribe();
    }
}
