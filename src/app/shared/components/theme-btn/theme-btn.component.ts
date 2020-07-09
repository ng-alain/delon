import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AppService, SiteTheme } from '@core';
import { AlainConfigService } from '@delon/util';

@Component({
  selector: 'theme-btn',
  templateUrl: './theme-btn.component.html',
  host: {
    '[class.theme-btn]': `true`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeBtnComponent implements OnInit, OnDestroy {
  private el: HTMLLinkElement;
  theme: SiteTheme = 'default';

  constructor(
    private appService: AppService,
    private renderer: Renderer2,
    private configSrv: AlainConfigService,
    private platform: Platform,
  ) {}

  ngOnInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.initTheme();
  }

  private initTheme(): void {
    this.theme = (localStorage.getItem('site-theme') as SiteTheme) || 'default';
    this.updateChartTheme();
    this.onThemeChange(this.theme);
  }

  private updateChartTheme(): void {
    this.configSrv.set('chart', { theme: this.theme === 'dark' ? 'dark' : '' });
  }

  onThemeChange(theme: SiteTheme): void {
    this.theme = theme;
    this.appService.setTheme(theme);
    this.renderer.setAttribute(document.body, 'data-theme', theme);
    const dom = document.getElementById('site-theme');
    if (dom) {
      dom.remove();
    }
    localStorage.removeItem('site-theme');
    if (theme !== 'default') {
      const el = (this.el = document.createElement('link'));
      el.type = 'text/css';
      el.rel = 'stylesheet';
      el.id = 'site-theme';
      el.href = `assets/${theme}.css`;

      localStorage.setItem('site-theme', theme);
      document.body.append(el);
    }
    this.updateChartTheme();
  }

  ngOnDestroy(): void {
    if (this.el) {
      document.body.removeChild(this.el);
    }
  }
}
