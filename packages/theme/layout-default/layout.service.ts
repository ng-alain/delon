import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { SettingsService } from '@delon/theme';

import { LayoutDefaultOptions } from './types';

const DEFAULT: LayoutDefaultOptions = {
  logoExpanded: `./assets/logo-full.svg`,
  logoCollapsed: `./assets/logo.svg`,
  logoLink: `/`,
  showHeaderCollapse: true,
  showSiderCollapse: false,
  hideAside: false,
  hideHeader: false
};

@Injectable({ providedIn: 'root' })
export class LayoutDefaultService {
  private _options$ = new BehaviorSubject<LayoutDefaultOptions>(DEFAULT);
  private _options: LayoutDefaultOptions = DEFAULT;

  get options(): LayoutDefaultOptions {
    return this._options;
  }

  get options$(): Observable<LayoutDefaultOptions> {
    return this._options$.asObservable();
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

  private notify(): void {
    this._options$.next(this._options);
  }

  /**
   * Set layout configuration
   *
   * 设置布局配置
   */
  setOptions(options?: LayoutDefaultOptions | null): void {
    this._options = {
      ...DEFAULT,
      ...options
    };
    this.notify();
  }

  /**
   * Toggle the collapsed state of the sidebar menu bar
   *
   * 切换侧边栏菜单栏折叠状态
   */
  toggleCollapsed(status?: boolean): void {
    this.settings.setLayout('collapsed', status != null ? status : !this.settings.layout.collapsed);
    this.notify();
  }
}
