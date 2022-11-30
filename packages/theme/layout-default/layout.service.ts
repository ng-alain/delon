import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';

import { SettingsService } from '@delon/theme';

import { LayoutDefaultOptions } from './types';

@Injectable({ providedIn: 'root' })
export class LayoutDefaultService {
  private _options$ = new BehaviorSubject<LayoutDefaultOptions>({});
  options$ = this._options$.pipe(distinctUntilChanged());
  private _options: LayoutDefaultOptions = {};

  get options(): LayoutDefaultOptions {
    return this._options;
  }

  get collapsedIcon(): string {
    const collapsed = this.settings.layout.collapsed;
    let type = collapsed ? 'unfold' : 'fold';
    if (this.settings.layout.direction === 'rtl') {
      type = collapsed ? 'fold' : 'unfold';
    }
    return `menu-${type}`;
  }

  constructor(private settings: SettingsService) {}

  /**
   * Set layout configuration
   *
   * 设置布局配置
   */
  setOptions(options?: LayoutDefaultOptions | null): void {
    this._options = {
      logoExpanded: `./assets/logo-full.svg`,
      logoCollapsed: `./assets/logo.svg`,
      logoLink: `/`,
      showHeaderCollapse: true,
      hideAside: false,
      ...options
    };
    this._options$.next(this._options);
  }

  /**
   * Toggle the collapsed state of the sidebar menu bar
   *
   * 切换侧边栏菜单栏折叠状态
   */
  toggleCollapsed(status?: boolean): void {
    this.settings.setLayout('collapsed', status ?? !this.settings.layout.collapsed);
  }
}
