import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { I18NService, MobileService } from '@core';
import { VERSION } from '@delon/theme';
import { copy } from '@delon/util';
import { NzMessageService } from 'ng-zorro-antd/message';
import { filter } from 'rxjs/operators';
import { MetaSearchGroupItem } from '../../interfaces';

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
  oldVersionList = [`9.x`, `8.x`, `1.x`];
  currentVersion = VERSION.full;
  delon = ['theme', 'auth', 'acl', 'form', 'cache', 'chart', 'mock', 'util', 'cli'];
  menuVisible = false;
  showGitee = false;
  regexs = {
    docs: { regex: /^\/docs/ },
    components: { regex: /^\/components/ },
    cli: { regex: /^\/cli/ },
    delon: { regex: /^\/(theme|auth|acl|form|cache|chart|mock|util)/ },
  };

  private getWin(): Window {
    return (this.doc as Document).defaultView || window;
  }

  constructor(
    public i18n: I18NService,
    private router: Router,
    private msg: NzMessageService,
    private mobileSrv: MobileService,
    @Inject(DOCUMENT) private doc: any,
    private cdr: ChangeDetectorRef,
  ) {
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
    this.router.navigateByUrl(`${this.i18n.getRealUrl(this.router.url)}/${language}`).then(() => this.updateGitee());
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
