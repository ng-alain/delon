import { Inject, Injectable } from '@angular/core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../core/i18n/service';
import {
  Meta,
  MetaList,
  MetaSearchGroup,
  MetaSearchGroupItem,
} from '../interfaces';
import { META as ACLMeta } from '../routes/gen/acl/meta';
import { META as AuthMeta } from '../routes/gen/auth/meta';
import { META as CacheMeta } from '../routes/gen/cache/meta';
import { META as ChartMeta } from '../routes/gen/chart/meta';
import { META as CliMeta } from '../routes/gen/cli/meta';
import { META as ComponentsMeta } from '../routes/gen/components/meta';
import { META as DocsMeta } from '../routes/gen/docs/meta';
import { META as FormMeta } from '../routes/gen/form/meta';
import { META as MockMeta } from '../routes/gen/mock/meta';
import { META as ThemeMeta } from '../routes/gen/theme/meta';
import { META as UtilMeta } from '../routes/gen/util/meta';

const FULLMETAS: Meta[] = [
  DocsMeta,
  ComponentsMeta,
  AuthMeta,
  ACLMeta,
  CacheMeta,
  ChartMeta,
  MockMeta,
  UtilMeta,
  FormMeta,
  CliMeta,
  ThemeMeta,
];

@Injectable({ providedIn: 'root' })
export class MetaService {
  constructor(@Inject(ALAIN_I18N_TOKEN) private i18n: I18NService) {
    // plat titles
    for (const g of FULLMETAS) {
      for (const item of g.list) {
        const curTitle = item.meta[i18n.defaultLang].title;
        item._t =
          typeof curTitle !== 'string'
            ? Object.values(curTitle)
                .map(v => v)
                .join('-')
            : curTitle;
      }
    }
  }

  private _data: any;
  private _isPages = false;

  private getCatgory(url: string) {
    const arr = url.split('?')[0].split('/');
    if (arr.length <= 2) return false;

    let categoryName = arr[1].toLowerCase().trim();
    let category = FULLMETAS.find(w => w.name === categoryName);
    if (~categoryName.indexOf('-')) {
      categoryName = categoryName.split('-')[0];
      category = FULLMETAS.find(w => w.name === categoryName);
      this._isPages = !!category;
    } else {
      this._isPages = false;
    }
    return category;
  }

  private getPageName(url: string) {
    return url
      .split('?')[0]
      .split('/')[2]
      .toLowerCase()
      .trim();
  }

  /** `true` 表示需要跳转404 */
  set(url: string): boolean {
    const category = this.getCatgory(url);
    if (!category) return false;
    const name = this.getPageName(url);
    const data = category.list.find(w => w.name === name) || null;
    if (!data) return true;
    this._data = {
      ...data.meta[this.i18n.defaultLang],
      ...data.meta[this.i18n.lang],
      i18n: data.i18n,
      name: data.name,
      module_name: category.module || '',
      github: category.github,
      list: category.list,
    };
    // fix title
    if (typeof this._data.title === 'object') {
      this._data.title =
        this._data.title[this.i18n.lang] ||
        this._data.title[this.i18n.defaultLang];
    }

    this.refPage(url);

    return false;
  }

  get item() {
    return this._data || null;
  }

  get github(): string {
    return this._data.github;
  }

  get data(): MetaList[] {
    return this._data.list;
  }

  get isPages() {
    return this._isPages;
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

  private getType(url: string): string {
    const category = this.getCatgory(url);
    return category
      ? url
          .split('?')[0]
          .split('/')[1]
          .toLowerCase()
          .split('-')[0]
      : '';
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
    const category = this.getCatgory(url);
    if (!category) return;

    // todo: support level 2
    const group: any[] = category.types.map((item: any, index: number) => {
      return {
        index,
        title: item[this.i18n.lang] || item[this.i18n.defaultLang],
        list: [],
      };
    });
    category.list.forEach((item: any) => {
      const meta =
        item.meta[this.i18n.lang] || item.meta[this.i18n.defaultLang];
      let typeIdx = category.types.findIndex(
        w => w['zh-CN'] === meta.type || w['en-US'] === meta.type,
      );
      if (typeIdx === -1) typeIdx = 0;
      let groupItem = group.find(w => w.index === typeIdx);
      if (!groupItem) {
        groupItem = {
          index: typeIdx,
          title:
            category.types[typeIdx][this.i18n.lang] ||
            category.types[typeIdx][this.i18n.defaultLang],
          list: [],
        };
        group.push(groupItem);
      }
      const entry: any = {
        url:
          (meta.url || item.route || `/${category.name}/${item.name}`) +
          `/${this.i18n.zone}`,
        title: this.i18n.get(meta.title),
        subtitle: meta.subtitle,
        order: item.order,
        hot: typeof meta.hot === 'boolean' ? meta.hot : false,
        lib: typeof item.lib === 'boolean' ? item.lib : false};
      groupItem.list.push(entry);
    });

    this._platMenus = [];
    this._menus = group
      .filter((item: any) => Array.isArray(item.list) && item.list.length > 0)
      .map((item: any) => {
        if (item.list[0].order === -1) {
          item.list.sort((a: any, b: any) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
          );
        } else {
          item.list.sort((a: any, b: any) => a.order - b.order);
        }
        this._platMenus = this._platMenus.concat(item.list);
        return item;
      })
      .filter((item: any) => item.list.length);
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
    if (idx + 1 <= this._platMenus.length) this.next = this._platMenus[idx + 1];
  }

  search(q: string, childrenMax = 5): MetaSearchGroup[] {
    const zone = this.i18n.zone;
    const res: MetaSearchGroup[] = [];
    for (const g of FULLMETAS) {
      const type = g.name.toLowerCase();
      const children: MetaSearchGroupItem[] = g.list
        .filter(w => w._t.includes(q))
        .map(item => {
          return {
            title: item._t,
            name: item.name,
            url: (item.route || `/${type}/${item.name}`) + `/${zone}`,
          };
        });
      if (children != null && children.length) {
        res.push({
          title: g.name,
          type,
          children: children.slice(0, childrenMax),
        });
      }
    }
    return res;
  }
}
