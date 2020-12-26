import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { I18NService, MobileService } from '@core';
import { LayoutDirection, SettingsService } from '@delon/theme';
import { AlainConfigService, copy } from '@delon/util';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzMessageService } from 'ng-zorro-antd/message';
import { filter } from 'rxjs/operators';
import { MetaSearchGroupItem } from '../../interfaces';
const pkg = require('../../../../package.json');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  host: {
    '[attr.id]': '"header"',
    '[class.clearfix]': `true`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit {
  private inited = false;
  isMobile: boolean;
  oldVersionList = [`10.x`, `9.x`, `8.x`, `1.x`];
  currentVersion = pkg.version;
  delon = ['theme', 'auth', 'acl', 'form', 'cache', 'chart', 'mock', 'util', 'cli'];
  menuVisible = false;
  showGitee = false;
  regexs = {
    docs: { regex: /^\/docs/ },
    components: { regex: /^\/components/ },
    cli: { regex: /^\/cli/ },
    delon: { regex: /^\/(theme|auth|acl|form|cache|chart|mock|util)/ },
  };
  showSearch = true;
  nextDirection: LayoutDirection = 'ltr';

  private getWin(): Window {
    return (this.doc as Document).defaultView || window;
  }

  get direction(): LayoutDirection {
    return this.nextDirection === 'ltr' ? 'rtl' : 'ltr';
  }

  constructor(
    public i18n: I18NService,
    private router: Router,
    private msg: NzMessageService,
    private mobileSrv: MobileService,
    @Inject(DOCUMENT) private doc: any,
    private cdr: ChangeDetectorRef,
    private settingsSrv: SettingsService,
    private nzConfigService: NzConfigService,
    private configSrv: AlainConfigService,
  ) {
    this.nextDirection = settingsSrv.layout.direction === 'ltr' ? 'rtl' : 'ltr';
    if (this.direction === 'rtl') {
      this.updateLibConfig();
    }
    router.events.pipe(filter(evt => evt instanceof NavigationEnd)).subscribe(() => {
      this.menuVisible = false;
    });
    this.mobileSrv.change.subscribe(res => {
      this.isMobile = res;
      if (this.inited) {
        this.cdr.detectChanges();
      }
    });
  }

  private updateGitee(): void {
    this.showGitee = this.i18n.lang === 'zh-CN' && this.getWin().location.host.indexOf('gitee') === -1;
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.inited = true;
    this.updateGitee();
  }

  toVersion(version: string): void {
    if (version !== this.currentVersion) {
      this.getWin().location.href = `https://ng-alain.com/version/${version}/`;
    }
  }

  langChange(language: 'en' | 'zh'): void {
    this.router.navigateByUrl(`${this.i18n.getRealUrl(this.router.url)}/${language}`).then(() => {
      this.updateGitee();
      // fix header-search
      this.showSearch = false;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.showSearch = true;
        this.cdr.detectChanges();
      }, 100);
    });
  }

  toggleDirection(): void {
    if (this.nextDirection === 'rtl') {
      this.nextDirection = 'ltr';
    } else {
      this.nextDirection = 'rtl';
    }

    this.settingsSrv.setLayout('direction', this.direction);
    this.updateLibConfig();
  }

  private updateLibConfig(): void {
    ['modal', 'drawer', 'message', 'notification', 'image'].forEach(name => {
      this.nzConfigService.set(name as any, { nzDirection: this.direction });
    });
    ['loading', 'onboarding'].forEach(name => {
      this.configSrv.set(name as any, { direction: this.direction });
    });
  }

  onCopy(value: string): void {
    copy(value).then(() => this.msg.success(this.i18n.fanyi('app.demo.copied')));
  }

  to(item: MetaSearchGroupItem): void {
    if (item.url) {
      this.router.navigateByUrl(item.url);
    }
  }

  toViaMobile(url: string): void {
    if (url.indexOf('/') === -1) {
      url = `/${url}/getting-started`;
    }
    this.router.navigateByUrl(`${url}/${this.i18n.zone}`).then(() => {
      this.menuVisible = false;
      this.cdr.detectChanges();
    });
  }
}
