import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  isDevMode,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Renderer2
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AlainConfigService } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

export interface ThemeBtnType {
  key: string;
  text: string;
}

export const ALAIN_THEME_BTN_KEYS = new InjectionToken<string>('ALAIN_THEME_BTN_KEYS');

@Component({
  selector: 'theme-btn',
  templateUrl: './theme-btn.component.html',
  host: {
    '[class.theme-btn]': `true`,
    '[class.theme-btn-rtl]': `dir === 'rtl'`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NzDropDownModule, NzToolTipModule]
})
export class ThemeBtnComponent implements OnInit, OnDestroy {
  private theme = 'default';
  isDev = isDevMode();
  @Input() types: ThemeBtnType[] = [
    { key: 'default', text: 'Default Theme' },
    { key: 'dark', text: 'Dark Theme' },
    { key: 'compact', text: 'Compact Theme' }
  ];
  @Input() devTips = `When the dark.css file can't be found, you need to run it once: npm run theme`;
  @Input() deployUrl = '';
  @Output() readonly themeChange = new EventEmitter<string>();
  private dir$ = this.directionality.change?.pipe(takeUntilDestroyed());
  dir: Direction = 'ltr';
  private key = '';

  constructor(
    private renderer: Renderer2,
    private configSrv: AlainConfigService,
    private platform: Platform,
    @Inject(DOCUMENT) private doc: NzSafeAny,
    @Optional() private directionality: Directionality,
    @Optional() @Inject(ALAIN_THEME_BTN_KEYS) KEYS: string,
    private cdr: ChangeDetectorRef
  ) {
    this.key = KEYS ?? 'site-theme';
  }

  ngOnInit(): void {
    this.dir = this.directionality.value;
    this.dir$.subscribe((direction: Direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.initTheme();
  }

  private initTheme(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.theme = localStorage.getItem(this.key) || 'default';
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
    this.themeChange.emit(theme);
    this.renderer.setAttribute(this.doc.body, 'data-theme', theme);
    const dom = this.doc.getElementById(this.key);
    if (dom) {
      dom.remove();
    }
    localStorage.removeItem(this.key);
    if (theme !== 'default') {
      const el = this.doc.createElement('link');
      el.type = 'text/css';
      el.rel = 'stylesheet';
      el.id = this.key;
      el.href = `${this.deployUrl}assets/style.${theme}.css`;

      localStorage.setItem(this.key, theme);
      this.doc.body.append(el);
    }
    this.updateChartTheme();
  }

  ngOnDestroy(): void {
    const el = this.doc.getElementById(this.key);
    if (el != null) {
      this.doc.body.removeChild(el);
    }
  }
}
