import { ChangeDetectionStrategy, Component, OnInit, Renderer2 } from '@angular/core';
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
export class ThemeBtnComponent implements OnInit {
  theme: SiteTheme = 'default';

  constructor(private appService: AppService, private renderer: Renderer2, private configSrv: AlainConfigService) {}

  ngOnInit(): void {
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
      const style = document.createElement('link');
      style.type = 'text/css';
      style.rel = 'stylesheet';
      style.id = 'site-theme';
      style.href = `assets/${theme}.css`;

      localStorage.setItem('site-theme', theme);
      document.body.append(style);
    }
    this.updateChartTheme();
  }
}
