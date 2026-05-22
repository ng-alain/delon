import { Injectable, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

import type { ModuleResMeta } from '@script-type';

import { ALAIN_I18N_TOKEN } from '@delon/theme';

import type { MenuGroupItem, MenuGroup } from '../interfaces';
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
] as ModuleResMeta[];

@Injectable({ providedIn: 'root' })
export class MetaService {
  private readonly i18n = inject(ALAIN_I18N_TOKEN);
  private readonly router = inject(Router);
  private readonly i18nChange = toSignal(this.i18n.change);
  private groupName?: string;
  private _data: any;
  readonly menus = signal<MenuGroup[] | undefined>(undefined);
  readonly next = signal<MenuGroupItem | null>(null);
  readonly prev = signal<MenuGroupItem | null>(null);

  readonly isPages = signal(false);
  readonly cfg = signal<MetaCfg | null>(null);

  constructor() {
    effect(() => {
      this.i18nChange();
      untracked(() => this.refMenu(this.router.url));
    });
  }

  /** `true` 表示需要跳转404 */
  set(url: string): boolean {
    this.cfg.set(null);
    const meta = this.getMeta(url) as any;
    if (!meta) return false;
    const name = this.getDocNameViaUrl(url);
    const data = meta.list.find((w: any) => w.name === name) as any;
    if (!data) return true;
    this._data = {
      ...data.meta![this.i18n.defaultLang],
      ...data.meta![this.i18n.currentLang],
      i18n: data.i18n,
      name: data.name,
      module_name: meta.module || '',
      github: meta.github,
      list: meta.list
    };
    // fix title
    if (typeof this._data.title === 'object') {
      this._data.title = this._data.title[this.i18n.currentLang] || this._data.title[this.i18n.defaultLang];
    }

    console.log('meta', meta, data);
    this.refPage(url);

    this.cfg.set({ ...this._data });

    return false;
  }

  private getMeta(url: string): ModuleResMeta | undefined {
    const arr = url.split('?')[0].split('/');
    if (arr.length <= 2) return;

    let groupName = arr[1].toLowerCase().trim();
    let ret = FULLMETAS.find(w => w.name === groupName);
    if (~groupName.indexOf('-')) {
      groupName = groupName.split('-')[0];
      ret = FULLMETAS.find(w => w.name === groupName);
      this.isPages.set(!!ret);
    } else {
      this.isPages.set(false);
    }
    return ret;
  }

  private getGroupNameViaUrl(url: string): string {
    return this.getMeta(url) ? url.split('?')[0].split('/')[1].toLowerCase().split('-')[0] : '';
  }

  private getDocNameViaUrl(url: string): string {
    return url.split('?')[0].split('/')[2].toLowerCase().trim();
  }

  refMenu(url: string): void {
    if (!this.menus()) {
      this.genMenus(url);
      return;
    }
    const groupName = this.getGroupNameViaUrl(url);
    if (groupName && this.groupName !== groupName) {
      this.genMenus(url);
      return;
    }
  }

  private genMenus(url: string): void {
    const meta = this.getMeta(url);
    if (!meta) return;

    const menus = meta.groups.map((item, index) => {
      return {
        title: item[this.i18n.currentLang] ?? item[this.i18n.defaultLang],
        list: meta.list
          .filter(w => w.groupIndex === index)
          .map(v => {
            const meta = v.meta[this.i18n.currentLang] ?? v.meta[this.i18n.defaultLang];
            return {
              ...meta,
              tag: meta.tag?.replace('{{version}}', pkg.version)
            } as MenuGroupItem;
          })
      } as MenuGroup;
    });
    this.menus.set(menus);
  }

  getPathByUrl(url: string): MenuGroup | undefined | null {
    url = url
      .split('=')[0]
      .split('?')[0]
      .replace(/\/(en|zh)$/, '/');
    let ret: MenuGroupItem | undefined | null = null;
    // (this.menus() ?? []).forEach(cat => {
    //   if (ret) return;
    //   ret = cat.list.find(i => i.url.startsWith(url));
    // });
    console.log(url);
    return ret;
  }

  private refPage(url: string): void {
    this.next.set(null);
    this.prev.set(null);
    if (!this.menus()) this.genMenus(url);
    const plat = this.menus()?.reduce((p, c) => [...p, ...c.list], [] as MenuGroupItem[]) ?? [];
    const idx = plat.findIndex(w => w.url === url);
    if (idx === -1) return;
    if (idx > 0) this.prev.set(plat[idx - 1]);
    if (idx + 1 <= plat.length) this.next.set(plat[idx + 1]);
    console.log(this.prev(), this.next(), plat);
  }
}
