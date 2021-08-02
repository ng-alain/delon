import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { I18NService, MobileService } from '@core';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

import { ALAIN_I18N_TOKEN, RTLService } from '@delon/theme';
import { copy } from '@delon/util';

import { MetaSearchGroupItem } from '../../interfaces';
import { LayoutComponent } from '../layout.component';

const pkg = require('../../../../package.json');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  host: {
    '[attr.id]': '"header"',
    '[class.clearfix]': `true`
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements AfterViewInit {
  private inited = false;
  isMobile: boolean;
  oldVersionList = [`11.x`, `10.x`, `9.x`, `8.x`, `1.x`];
  currentVersion = pkg.version;
  delonLibs: Array<{ name: string; default?: string }> = [
    { name: 'theme' },
    { name: 'auth' },
    { name: 'acl' },
    { name: 'form' },
    { name: 'cache' },
    { name: 'chart' },
    { name: 'mock' },
    { name: 'util' },
    { name: 'cli' }
  ];
  menuVisible = false;
  showGitee = false;
  regexs = {
    docs: { regex: /^\/docs/ },
    components: { regex: /^\/components/ },
    cli: { regex: /^\/cli/ },
    delon: { regex: /^\/(theme|auth|acl|form|cache|chart|mock|util)/ }
  };

  private getWin(): Window {
    return (this.doc as Document).defaultView || window;
  }

  constructor(
    @Inject(ALAIN_I18N_TOKEN) public i18n: I18NService,
    private router: Router,
    private msg: NzMessageService,
    private mobileSrv: MobileService,
    @Inject(DOCUMENT) private doc: NzSafeAny,
    private cdr: ChangeDetectorRef,
    public rtl: RTLService,
    private layout: LayoutComponent
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
    this.showGitee = this.i18n.currentLang === 'zh-CN' && this.getWin().location.host.indexOf('gitee') === -1;
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
      this.layout.render = false;
      setTimeout(() => {
        this.layout.render = true;
      }, 25);
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
