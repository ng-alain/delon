import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, isDevMode, OnDestroy, OnInit, Optional, Renderer2 } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
    '[class.theme-btn-rtl]': `dir === 'rtl'`,
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
  private destroy$ = new Subject<void>();
  dir: Direction = 'ltr';

  constructor(
    private renderer: Renderer2,
    private configSrv: AlainConfigService,
    private platform: Platform,
    @Inject(DOCUMENT) private doc: any,
    @Optional() private directionality: Directionality,
  ) {}

  ngOnInit(): void {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction: Direction) => {
      this.dir = direction;
    });
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
    this.destroy$.next();
    this.destroy$.complete();
  }
}
