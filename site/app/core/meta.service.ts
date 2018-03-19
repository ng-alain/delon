import { Injectable } from '@angular/core';
import { META } from '../routes/gen/meta';
import { I18NService } from './../i18n/service';

@Injectable()
export class MetaService {

    constructor(private i18n: I18NService) {}

    private _data: any;

    /** `true` 表示需要跳转404 */
    set(url: string): boolean {
        const arr = url.split('?')[0].split('/');
        if (arr.length <= 2) return false;

        const categoryName = arr[1].toLowerCase();
        const category: any = META.types.find(w => w.name === categoryName);
        if (!category) return false;
        const data = category.list.find(w => w.name === arr[2]) || null;
        if (!data) return true;
        this._data = Object.assign({}, data.meta[this.i18n.defaultLang], data.meta[this.i18n.lang], {
            i18n: data.i18n,
            name: data.name,
            module_name: category.module || ''
        });

        this.refPage(url);

        return false;
    }

    get item() {
        return this._data || null;
    }

    get github() {
        return META.github;
    }

    get data() {
        return META;
    }

    private _platMenus: any[];
    private _menus: any[];
    private _type: string;
    get menus() {
        return this._menus;
    }

    get type() {
        return this._type;
    }

    clearMenu() {
        this._menus = null;
    }

    getType(url: string): string {
        const arr = url.split('?')[0].split('/');
        if (arr.length < 2) return '';

        const categoryName = arr[1].toLowerCase();
        const category = META.types.find(w => w.name === categoryName);
        return category ? categoryName : '';
    }

    refMenu(url: string) {
        if (!this.menus) {
            this.genMenus(url);
            return;
        }
        const curType = this.getType(url);
        if (curType && this._type !== curType) {
            this.genMenus(url);
            return;
        }
    }

    genMenus(url: string): void {
        const arr = url.split('?')[0].split('/');
        if (arr.length <= 1) return ;

        const categoryName = arr[1].toLowerCase();
        const category = META.types.find(w => w.name === categoryName);
        if (!category) return;

        // todo: support level 2
        const group: any[] = category.types.map((item: any, index: number) => {
            return {
                index: index,
                title: item[this.i18n.lang] || item[this.i18n.defaultLang],
                list: []
            };
        });
        category.list.forEach((item: any) => {
            const meta = item.meta[this.i18n.lang] || item.meta[this.i18n.defaultLang];
            let typeIdx = category.types.findIndex(w => w['zh-CN'] === meta.type || w['en-US'] === meta.type);
            if (typeIdx === -1) typeIdx = 0;
            let groupItem = group.find(w => w.index === typeIdx);
            if (!groupItem) {
                groupItem = {
                    index: typeIdx,
                    title: category.types[typeIdx][this.i18n.lang] || category.types[typeIdx][this.i18n.defaultLang],
                    list: []
                };
                group.push(groupItem);
            }
            const entry: any = Object.assign({
                url: `/${category.name}/${item.name}`,
                title: meta.title,
                subtitle: meta.subtitle,
                order: item.order
            });
            groupItem.list.push(entry);
        });

        this._platMenus = [];
        this._menus = group.map((item: any) => {
            if (category.name === 'components') {
                item.list.sort((a: any, b: any) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
            } else {
                item.list.sort((a: any, b: any) => a.order - b.order);
            }
            this._platMenus = this._platMenus.concat(item.list);
            return item;
        }).filter((item: any) => item.list.length);
    }

    getPathByUrl(url: string): any {
        url = url.split('=')[0].split('?')[0];
        let ret: any;
        (this._menus || []).forEach((cat: any) => {
            if (ret) return;
            ret = cat.list.find((i: any) => i.url === url);
        });
        return ret;
    }

    next: any;
    prev: any;
    private refPage(url: string) {
        this.next = null;
        this.prev = null;
        if (!this._menus) this.genMenus(url);
        const idx = this._platMenus.findIndex(w => w.url === url);
        if (idx === -1) return;
        if (idx > 1) this.prev = this._platMenus[idx - 1];
        if ((idx + 1) <= this._platMenus.length) this.next = this._platMenus[idx + 1];
    }
}
