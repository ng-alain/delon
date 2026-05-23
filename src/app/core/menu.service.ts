import { computed, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { ModuleMenuGroupItem } from '@script-type';

import { ALAIN_I18N_TOKEN } from '@delon/theme';

import { MENUS } from '../routes/gen/menus';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private readonly router = inject(Router);
  private readonly i18n = inject(ALAIN_I18N_TOKEN);
  private readonly i18nChange = toSignal(this.i18n.change);
  readonly groupName = signal<string | undefined>(undefined);
  readonly group = computed(() => {
    this.i18nChange();
    const groupName = this.groupName();
    if (!groupName) return null;

    const group = MENUS.find(w => w.name === groupName);
    return group;
  });
  readonly menus = computed(() => {
    const lang = this.i18nChange();
    const group = this.group();
    if (group == null) return [];

    const items = (lang === 'zh-CN' || lang === 'zh' ? group.menu.zh : group.menu.en) ?? [];
    return items;
  });
  readonly prevNext = computed(() => {
    this.groupName();
    const plat = this.platMenus();
    const url = this.getUrl();
    const idx = plat.findIndex(w => w.url === url);
    if (idx === -1) return {};
    let prev: ModuleMenuGroupItem | undefined;
    let next: ModuleMenuGroupItem | undefined;
    if (idx > 0) prev = plat[idx - 1];
    if (idx + 1 <= plat.length) next = plat[idx + 1];
    return { prev, next };
  });

  constructor() {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe(() => {
      this.updateGroupName();
    });
    this.updateGroupName();
  }

  private platMenus(): ModuleMenuGroupItem[] {
    return this.menus()?.reduce((p, c) => [...p, ...c.items], [] as ModuleMenuGroupItem[]) ?? [];
  }

  private getUrl(): string {
    return this.router.url.split('?')[0]?.split('#')[0];
  }

  private updateGroupName(): void {
    this.groupName.set(undefined);
    const arr = this.router.url.split('?')[0].split('/');
    if (arr.length <= 2) return;

    let groupName = arr[1].toLowerCase().trim();
    let ret = MENUS.find(w => w.name === groupName);
    if (~groupName.indexOf('-')) {
      groupName = groupName.split('-')[0];
      ret = MENUS.find(w => w.name === groupName);
    }
    this.groupName.set(ret?.name);
  }

  getTitle(): string | undefined {
    const group = this.group();
    if (!group) return undefined;

    const plat = this.platMenus();
    const url = this.getUrl();
    const item = plat.find(w => w.url === url);
    return item?.title;
  }
}
