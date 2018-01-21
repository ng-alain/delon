import { Injectable, Inject, Optional, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, DOCUMENT } from '@angular/platform-browser';
import { MenuService } from '../menu/menu.service';
import { ALAIN_I18N_TOKEN, AlainI18NService } from '../i18n/i18n';

/**
 * 设置标题
 * @see http://ng-alain.com/docs/service#TitleService
 */
@Injectable()
export class TitleService {
    constructor(
        private injector: Injector,
        private title: Title,
        private menuSrv: MenuService,
        @Optional() @Inject(ALAIN_I18N_TOKEN) private translatorSrv: AlainI18NService,
        @Inject(DOCUMENT) private doc: any) { }

    private _prefix = '';
    private _suffix = '';
    private _separator = ' - ';
    private _reverse = false;
    private _default = 'Not Page Name';

    /** 设置分隔符 */
    set separator(value: string) {
        this._separator = value;
    }

    /** 设置前缀 */
    set prefix(value: string) {
        this._prefix = value;
    }

    /** 设置后缀 */
    set suffix(value: string) {
        this._suffix = value;
    }

    /** 设置是否反转 */
    set reverse(value: boolean) {
        this._reverse = value;
    }

    /** 设置默认标题名 */
    set default(value: string) {
        this._default = value;
    }

    private getByElement(): string {
        const el = this.doc.querySelector('.content__title h1');
        if (el) {
            return el.firstChild.textContent.trim();
        }
        return '';
    }

    private getByRoute(): string {
        let next = this.injector.get(ActivatedRoute);
        while (next.firstChild) next = next.firstChild;
        return next.snapshot && next.snapshot.data && next.snapshot.data.title;
    }

    private getByMenu(): string {
        const menus = this.menuSrv.getPathByUrl(this.injector.get(Router).url);
        if (!menus || menus.length <= 0) return '';

        const item = menus[menus.length - 1];
        let title;
        if (item.translate && this.translatorSrv) title = this.translatorSrv.fanyi(item.translate);
        return title || item.text;
    }

    /**
     * 设置标题，若不指定具体名称，则按以顺序获取：
     * - 路由配置 `{ data: { title: 'page name' } }`
     * - 根据当前 URL 解析菜单数据
     * - 页面 `content__title` 中获取 `h1` 内容
     * - 默认标题名
     */
    setTitle(title?: string | string[]) {
        if (!title) {
            title = this.getByRoute() || this.getByMenu() || this.getByElement() || this._default;
        }
        if (title && !Array.isArray(title)) {
            title = [ title ];
        }

        let newTitles = [];
        if (this._prefix) {
            newTitles.push(this._prefix);
        }
        if (title && title.length > 0) {
            newTitles.push(...(title as string[]));
        }
        if (this._suffix) {
            newTitles.push(this._suffix);
        }
        if (this._reverse) {
            newTitles = newTitles.reverse();
        }
        this.title.setTitle(newTitles.join(this._separator));
    }
}
