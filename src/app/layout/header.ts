import { DOCUMENT, NgTemplateOutlet, UpperCasePipe } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

import { MatchRouterDirective } from '@shared';
import { GithubButtonComponent } from 'ng-github-button';

import { ALAIN_I18N_TOKEN, RTLService, I18nPipe } from '@delon/theme';
import { copy } from '@delon/util/browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

import { I18NService, LangType, MOBILE } from '@core';

import { HeaderSearchComponent } from './search-box';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const pkg = require('../../../package.json');
const minimumVersion = +pkg.version.split('.')[0] - 2;

@Component({
  selector: 'app-header',
  template: `
    @let isMobile = mobile();
    <ng-template #menu>
      <ul nz-menu [nzMode]="isMobile ? 'inline' : 'horizontal'" class="menu-site" id="nav">
        <li nz-menu-item routerLink="/docs/getting-started/{{ i18n.zone }}" [matchRouter]="regexs.docs">
          {{ 'app.header.menu.docs' | i18n }}
        </li>
        <li nz-menu-item routerLink="/components/sv/{{ i18n.zone }}" [matchRouter]="regexs.components">
          {{ 'app.header.menu.components' | i18n }}
        </li>
        @if (isMobile) {
          <li nz-menu-group [nzTitle]="'app.header.menu.delon' | i18n">
            <ul>
              @for (i of delonLibs; track $index) {
                <li nz-menu-item routerLink="/{{ i.name }}/{{ i.default || 'getting-started' }}/{{ i18n.zone }}">
                  &#64;delon/{{ i.name }}-{{ 'app.header.menu.' + i.name | i18n }}
                </li>
              }
            </ul>
          </li>
        } @else {
          <li nz-menu-item [matchRouter]="regexs.delon">
            <div nz-dropdown nzPlacement="bottomRight" [nzDropdownMenu]="delonMenu">
              {{ (delonType ? 'app.header.menu.' + delonType : 'app.header.menu.delon') | i18n }}
              <nz-icon nzType="down" />
            </div>
            <nz-dropdown-menu #delonMenu="nzDropdownMenu">
              <ul nz-menu>
                @for (i of delonLibs; track $index) {
                  <li nz-menu-item routerLink="/{{ i.name }}/{{ i.default || 'getting-started' }}/{{ i18n.zone }}">
                    &#64;delon/{{ i.name }}-{{ 'app.header.menu.' + i.name | i18n }}
                  </li>
                }
              </ul>
            </nz-dropdown-menu>
          </li>
        }
        <li nz-menu-item>
          <a href="https://e.ng-alain.com/" target="_blank">
            {{ 'app.header.menu.themes' | i18n }}
          </a>
        </li>
        @if (isMobile) {
          <a nz-menu-item href="https://github.com/ng-alain/ng-alain" target="_blank">Github</a>
          <li nz-menu-item (click)="langChange(i18n.zone === 'zh' ? 'en' : 'zh')">
            {{ 'app.header.lang' | i18n }}
          </li>
        }
      </ul>
    </ng-template>
    @if (isMobile) {
      <nz-icon
        nzType="menu"
        nz-popover
        nzTooltipOverlayClassName="popover-menu"
        nzPopoverPlacement="bottomRight"
        [nzPopoverContent]="menu"
        nzPopoverTrigger="click"
        [(nzPopoverVisible)]="menuVisible"
        [nzPopoverTitle]="undefined"
        class="nav-phone-icon"
      />
    }
    <div nz-row style="flex-flow: nowrap; height: 64px">
      <div nz-col nzXs="24" nzSm="24" nzMd="24" nzLg="24" nzXl="5" nzXXl="4">
        <a
          routerLink="/{{ i18n.zone }}"
          nz-tooltip
          nzTooltipTitle="{{ 'app.footer.qqgroup' | i18n }}: 316911865"
          (click)="onCopy('316911865')"
          id="logo"
        >
          <img src="./assets/img/logo-color.svg" alt="NG-ALAIN Logo" title="NG-ALAIN Logo" style="max-height: 32px" />
          NG-ALAIN
        </a>
      </div>
      <div nz-col nz-col nzXs="0" nzSm="0" nzMd="0" nzLg="0" nzXl="19" nzXXl="20" class="menu-row">
        <header-search />
        @if (!isMobile) {
          <ng-template [ngTemplateOutlet]="menu" />
          <nz-select nzSize="small" class="version" [ngModel]="currentVersion" (ngModelChange)="toVersion($event)">
            @for (version of oldVersionList; track $index) {
              <nz-option [nzLabel]="version + '.x'" [nzValue]="version" />
            }
            <nz-option [nzLabel]="currentVersion" [nzValue]="currentVersion" />
          </nz-select>
          <button
            nz-button
            nzGhost
            nzSize="small"
            (click)="langChange(i18n.zone === 'zh' ? 'en' : 'zh')"
            class="header-button header-lang-button"
          >
            {{ 'app.header.lang' | i18n }}
          </button>
          <button nz-button nzGhost nzSize="small" class="header-button header-direction-button" (click)="rtl.toggle()">
            {{ rtl.nextDir | uppercase }}
          </button>
          <github-button type="stargazers" size="default" namespace="ng-alain" repo="ng-alain" />
        }
      </div>
    </div>
  `,
  host: {
    class: 'clearfix',
    '[attr.id]': '"header"'
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
    NzTooltipModule,
    NzDropdownModule,
    NzMenuModule,
    NzGridModule
  ]
})
export class HeaderComponent {
  private inited = false;
  protected mobile = MOBILE;
  oldVersionList = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 1];
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

  readonly i18n = inject<I18NService>(ALAIN_I18N_TOKEN);
  readonly rtl = inject(RTLService);
  private readonly router = inject(Router);
  private readonly msg = inject(NzMessageService);
  private readonly doc = inject(DOCUMENT);
  private readonly cdr = inject(ChangeDetectorRef);

  constructor() {
    this.router.events.pipe(filter(evt => evt instanceof NavigationEnd)).subscribe(() => {
      this.menuVisible = false;
      this.genDelonType();
    });

    afterNextRender(() => {
      this.inited = true;
      this.genDelonType();
    });
  }

  private genDelonType(): void {
    if (!this.inited) return;

    // delonType
    const match = this.router.url.match(this.regexs.delon.regex);
    this.delonType = match == null ? undefined : match[1];
    this.cdr.detectChanges();
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
    this.i18n.use(language as LangType, {}, true);
    this.router.navigateByUrl(`${this.i18n.getRealUrl(this.router.url)}/${language}`);
  }

  onCopy(value: string): void {
    copy(value).then(() => this.msg.success(this.i18n.fanyi('app.demo.copied')));
  }
}
