import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, isDevMode, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AlainConfigService } from '@delon/util';

export const ThemeBtnStorageKey = `site-theme`;

export interface ThemeBtnType {
  key: string;
  text: string;
}

@Component({
  selector: 'theme-btn',
  templateUrl: './theme-btn.component.html',
  host: {
    '[class.theme-btn]': `true`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeBtnComponent implements OnInit, OnDestroy {
  private theme = 'default';
  isDev = isDevMode();
  @Input() types: ThemeBtnType[] = [
    { key: 'default', text: 'Default Theme' },
    { key: 'dark', text: 'Dark Theme' },
    { key: 'compact', text: 'Compact Theme' },
  ];
  @Input() devTips = `When the dark.css file can't be found, you need to run it once: npm run theme`;
  private el!: HTMLLinkElement;

  constructor(
    private renderer: Renderer2,
    private configSrv: AlainConfigService,
    private platform: Platform,
    @Inject(DOCUMENT) private doc: any,
  ) {}

  ngOnInit(): void {
    this.initTheme();
  }

  private initTheme(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.theme = localStorage.getItem(ThemeBtnStorageKey) || 'default';
    this.updateChartTheme();
    this.onThemeChange(this.theme);
  }

  private updateChartTheme(): void {
    this.configSrv.set('chart', { theme: this.theme === 'dark' ? 'dark' : '' });
  }

  onThemeChange(theme: string): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.theme = theme;
    this.renderer.setAttribute(this.doc.body, 'data-theme', theme);
    const dom = this.doc.getElementById(ThemeBtnStorageKey);
    if (dom) {
      dom.remove();
    }
    localStorage.removeItem(ThemeBtnStorageKey);
    if (theme !== 'default') {
      const el = (this.el = this.doc.createElement('link'));
      el.type = 'text/css';
      el.rel = 'stylesheet';
      el.id = ThemeBtnStorageKey;
      el.href = `assets/style.${theme}.css`;

      localStorage.setItem(ThemeBtnStorageKey, theme);
      this.doc.body.append(el);
    }
    this.updateChartTheme();
  }

  ngOnDestroy(): void {
    if (this.el) {
      this.doc.body.removeChild(this.el);
    }
  }
}
