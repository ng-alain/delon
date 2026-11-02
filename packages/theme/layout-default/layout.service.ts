import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

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
  private readonly settings = inject(SettingsService);
  private readonly bm = inject(BreakpointObserver);
  readonly options = signal(DEFAULT);
  readonly collapsedIcon = signal('');

  constructor() {
    const mobileMedia = 'only screen and (max-width: 767.99px)';
    this.bm
      .observe(mobileMedia)
      .pipe(takeUntilDestroyed())
      .subscribe(state => this.checkMedia(state.matches));
    this.checkMedia(this.bm.isMatched(mobileMedia));

    this.settings.notify
      .pipe(
        filter(w => w.type === 'layout'),
        takeUntilDestroyed()
      )
      .subscribe(() => this.collapsedIcon.set(this.getCollapsedIcon()));

    // The first value must not depend on a `layout` notification: `checkMedia()` only calls
    // `setLayout()` on mobile, and an app may never call `setLayout()` itself. Without this,
    // `collapsedIcon` stays empty and the header collapse trigger renders as a blank block
    // until the user toggles it once.
    this.collapsedIcon.set(this.getCollapsedIcon());
  }

  /**
   * Get the icon name of the header collapse trigger based on the current layout state
   *
   * 根据当前布局状态计算出头部折叠按钮的图标名
   */
  private getCollapsedIcon(): string {
    const { collapsed, direction } = this.settings.layout;
    // in RTL the collapsed/expanded icons are swapped
    const icon = direction === 'rtl' ? (collapsed ? 'fold' : 'unfold') : collapsed ? 'unfold' : 'fold';
    return `menu-${icon}`;
  }

  private checkMedia(value: boolean): void {
    // 仅当匹配媒体（移动端）时自动折叠侧边栏
    // 不匹配时（桌面端）不应覆盖用户已持久化的 collapsed 偏好
    if (value) {
      this.settings.setLayout('collapsed', true);
    }
  }

  /**
   * Set layout configuration
   *
   * 设置布局配置
   */
  setOptions(options?: LayoutDefaultOptions | null): void {
    this.options.set({
      ...DEFAULT,
      ...options
    });
  }

  /**
   * Toggle the collapsed state of the sidebar menu bar
   *
   * 切换侧边栏菜单栏折叠状态
   */
  toggleCollapsed(status?: boolean): void {
    this.settings.setLayout('collapsed', status != null ? status : !this.settings.layout.collapsed);
  }
}
