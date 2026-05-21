import { Injectable, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

import { ALAIN_I18N_TOKEN } from '@delon/theme';

import type { Meta, MenuGroupItem, MenuGroup } from '../interfaces';
import type { MetaCfg } from './types';
import pkg from '../../../package.json';
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

const FULLMETAS = [
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
  ThemeMeta
] as Meta[];

@Injectable({ providedIn: 'root' })
export class MetaService {
  private readonly i18n = inject(ALAIN_I18N_TOKEN);
  private readonly router = inject(Router);
  private readonly i18nChange = toSignal(this.i18n.change);
  private _platMenus: MenuGroupItem[] = [];
  private _type?: string;
  private _data: any;
  readonly menus = signal<MenuGroup[] | undefined>(undefined);
  readonly next = signal<MenuGroupItem | null>(null);
  readonly prev = signal<MenuGroupItem | null>(null);

  readonly isPages = signal(false);
  readonly cfg = signal<MetaCfg | null>(null);

  constructor() {
    this.platTitles();

    effect(() => {
      this.i18nChange();
      untracked(() => this.refMenu(this.router.url));
    });
  }

  private platTitles(): void {
    for (const g of FULLMETAS) {
      for (const item of g.list ?? []) {
        const curTitle = (item.meta ?? {})[this.i18n.defaultLang].title ?? {};
        item._t =
          typeof curTitle !== 'string'
            ? Object.values(curTitle)
                .map(v => v)
                .join('-')
            : curTitle;
      }
    }
  }

  /** `true` 表示需要跳转404 */
  set(url: string): boolean {
    this.cfg.set(null);
    const category = this.getCatgory(url);
    if (!category) return false;
    const name = this.getPageName(url);
    const data = category.list!.find(w => w.name === name) || null;
    if (!data) return true;
    this._data = {
      ...data.meta![this.i18n.defaultLang],
      ...data.meta![this.i18n.currentLang],
      i18n: data.i18n,
      name: data.name,
      module_name: category.module || '',
      github: category.github,
      list: category.list
    };
    // fix title
    if (typeof this._data.title === 'object') {
      this._data.title = this._data.title[this.i18n.currentLang] || this._data.title[this.i18n.defaultLang];
    }

    this.refPage(url);

    this.cfg.set({ ...this._data });

    return false;
  }

  private getCatgory(url: string): Meta | undefined {
    const arr = url.split('?')[0].split('/');
    if (arr.length <= 2) return;

    let categoryName = arr[1].toLowerCase().trim();
    let category = FULLMETAS.find(w => w.name === categoryName);
    if (~categoryName.indexOf('-')) {
      categoryName = categoryName.split('-')[0];
      category = FULLMETAS.find(w => w.name === categoryName);
      this.isPages.set(!!category);
    } else {
      this.isPages.set(false);
    }
    return category;
  }

  private getPageName(url: string): string {
    return url.split('?')[0].split('/')[2].toLowerCase().trim();
  }

  private getType(url: string): string {
    const category = this.getCatgory(url);
    return category ? url.split('?')[0].split('/')[1].toLowerCase().split('-')[0] : '';
  }

  refMenu(url: string): void {
    if (!this.menus()) {
      this.genMenus(url);
      return;
    }
    const curType = this.getType(url);
    if (curType && this._type !== curType) {
      this.genMenus(url);
      return;
    }
  }

  private genMenus(url: string): void {
    const category = this.getCatgory(url);
    if (!category) return;

    // todo: support level 2
    const group = category.types.map((item, index: number) => {
      return {
        index,
        title: item[this.i18n.currentLang] ?? item[this.i18n.defaultLang],
        list: [] as MenuGroupItem[]
      };
    });
    category.list!.forEach(item => {
      const meta = item.meta![this.i18n.currentLang] || item.meta![this.i18n.defaultLang];
      let typeIdx = category.types!.findIndex(w => w['zh-CN'] === meta.type || w['en-US'] === meta.type);
      if (typeIdx === -1) typeIdx = 0;
      let groupItem = group.find(w => w.index === typeIdx);
      if (!groupItem) {
        groupItem = {
          index: typeIdx,
          title: category.types![typeIdx][this.i18n.currentLang] || category.types![typeIdx][this.i18n.defaultLang],
          list: []
        };
        group.push(groupItem);
      }
      const entry: MenuGroupItem = {
        url: `${meta.url || item.route || `/${category.name}/${item.name}`}/${this.i18n.zone}`,
        title: this.i18n.get(meta.title!),
        subtitle: meta.subtitle,
        order: item.order ?? 1,
        lib: typeof item.lib === 'boolean' ? item.lib : false,
        tag: meta.tag?.replace('{{version}}', pkg.version),
        deprecated: meta.deprecated
      };
      groupItem.list.push(entry);
    });

    this._platMenus = [];
    const menus = group
      .filter(item => Array.isArray(item.list) && item.list.length > 0)
      .map(item => {
        if (item.list[0].order === -1) {
          item.list.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        } else {
          item.list.sort((a, b) => a.order - b.order);
        }
        this._platMenus = this._platMenus.concat(item.list);
        return item;
      })
      .filter(item => item.list.length);
    this.menus.set(menus);
  }

  getPathByUrl(url: string): MenuGroup | undefined | null {
    url = url
      .split('=')[0]
      .split('?')[0]
      .replace(/\/(en|zh)$/, '/');
    let ret: MenuGroupItem | undefined | null = null;
    (this.menus() ?? []).forEach(cat => {
      if (ret) return;
      ret = cat.list.find(i => i.url.startsWith(url));
    });
    return ret;
  }

  private refPage(url: string): void {
    this.next.set(null);
    this.prev.set(null);
    if (!this.menus()) this.genMenus(url);
    const idx = this._platMenus.findIndex(w => w.url === url);
    if (idx === -1) return;
    if (idx > 0) this.prev.set(this._platMenus[idx - 1]);
    if (idx + 1 <= this._platMenus.length) this.next.set(this._platMenus[idx + 1]);
  }
}
