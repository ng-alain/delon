import { DOCUMENT, NgTemplateOutlet, UpperCasePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

import { MatchRouterDirective } from '@shared';
import { GithubButtonComponent } from 'ng-github-button';

import { ALAIN_I18N_TOKEN, RTLService, I18nPipe } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { I18NService, LangType, MobileService } from '@core';

import { MetaSearchGroupItem } from '../../interfaces';
import { LayoutComponent } from '../layout.component';
import { HeaderSearchComponent } from './search-box.component';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const pkg = require('../../../../package.json');
const minimumVersion = +pkg.version.split('.')[0] - 2;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  host: {
    '[attr.id]': '"header"',
    '[class.clearfix]': `true`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    RouterLink,
    NgTemplateOutlet,
    UpperCasePipe,
    I18nPipe,
    HeaderSearchComponent,
    MatchRouterDirective,
    GithubButtonComponent,
    NzMenuModule,
    NzButtonModule,
    NzSelectModule,
    NzIconModule,
    NzPopoverModule,
    NzToolTipModule,
    NzDropDownModule,
    NzMenuModule,
    NzGridModule
  ]
})
export class HeaderComponent implements AfterViewInit {
  private inited = false;
  isMobile!: boolean;
  oldVersionList = [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 1];
  currentVersion = pkg.version;
  delonLibs: Array<{ name: string; default?: string; selected?: boolean }> = [
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
  regexs = {
    docs: { regex: /^\/docs/ },
    components: { regex: /^\/components/ },
    cli: { regex: /^\/cli/ },
    delon: { regex: /^\/(theme|auth|acl|form|cache|chart|mock|util)/ }
  };
  delonType?: string;

  private get win(): Window {
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
      this.genDelonType();
    });
    this.mobileSrv.change.subscribe(res => {
      this.isMobile = res;
      if (this.inited) {
        this.cdr.detectChanges();
      }
    });
  }

  private genDelonType(): void {
    if (!this.inited) return;

    // delonType
    const match = this.router.url.match(this.regexs.delon.regex);
    this.delonType = match == null ? undefined : match[1];
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.inited = true;
    this.genDelonType();
  }

  toVersion(version: number): void {
    if (version == this.currentVersion) return;
    if (version >= minimumVersion) {
      this.win.location.href = `https://ng-alain.com/version/${version}.x/`;
      return;
    }
    this.win.open(`https://github.com/ng-alain/archive-docs/blob/full/README.md`);
  }

  langChange(language: 'en' | 'zh'): void {
    this.i18n.use(language as LangType, {}, false);
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
