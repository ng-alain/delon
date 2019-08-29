export const MOCK_LAYOUT = {
  'src/styles.less': `
// region: PLACEHOLDER, IMPORTANT: don't remove
@import '~@delon/theme/styles/index';
@import '~@delon/abc/index';

@import './styles/index';
@import './styles/theme';
// endregion
  `,
  'src/app/layout/default/default.component.html': `
    <div class="router-progress-bar" *ngIf="isFetching"></div>
    <layout-header class="header"></layout-header>
    <layout-sidebar class="aside"></layout-sidebar>
    <section class="content">
      <reuse-tab></reuse-tab>
      <router-outlet></router-outlet>
    </section>
  `,
  'src/app/layout/default/default.component.ts': `
  import { Component } from '@angular/core';
import {
  Router,
  NavigationEnd,
  RouteConfigLoadStart,
  NavigationError,
  NavigationCancel,
} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { ScrollService, MenuService, SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-default',
  templateUrl: './default.component.html',
})
export class LayoutDefaultComponent {
  isFetching = false;

  constructor(
    router: Router,
    scroll: ScrollService,
    _message: NzMessageService,
    public menuSrv: MenuService,
    public settings: SettingsService,
  ) {
    // scroll to top in change page
    router.events.subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
      }
      if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
        this.isFetching = false;
        if (evt instanceof NavigationError) {
          _message.error(\`无法加载\${evt.url}路由\`, { nzDuration: 1000 * 3 });
        }
        return;
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      setTimeout(() => {
        scroll.scrollToTop();
        this.isFetching = false;
      }, 100);
    });
  }
}
  `,
  'src/app/layout/default/sidebar/sidebar.component.html': `
  <div class="aside-inner">
  <nz-dropdown nzTrigger="click" class="user-block">
    <div nz-dropdown class="user-block-dropdown">
      <nz-avatar class="avatar" [nzSrc]="settings.user.avatar"></nz-avatar>
      <div class="info">
        <strong>{{settings.user.name}}</strong>
        <p class="text-truncate mb0">{{settings.user.email}}</p>
      </div>
    </div>
    <ul nz-menu>
      <li nz-menu-item (click)="msgSrv.success('profile')">{{ 'profile' | translate }}</li>
      <li nz-menu-item (click)="msgSrv.success('settings')">{{ 'settings' | translate }}</li>
      <li nz-menu-item (click)="msgSrv.success('logout')">{{ 'logout' | translate }}</li>
    </ul>
  </nz-dropdown>
  <sidebar-nav class="d-block py-lg"></sidebar-nav>
</div>
  `,
  'src/app/layout/default/header/header.component.html': `
  <div class="logo">
  <a [routerLink]="['/']">
    <img class="expanded" src="./assets/logo-full.svg" alt="{{settings.app.name}}" style="max-height:40px;" />
    <img class="collapsed" src="./assets/logo.svg" alt="{{settings.app.name}}" style="max-height:30px;" />
  </a>
</div>
<div class="top-nav-wrap">
  <ul class="top-nav">
    <!-- Menu -->
    <li>
      <div class="item" (click)="toggleCollapsedSidebar()">
        <i nz-icon nzType="menu-{{settings.layout.collapsed ? 'unfold' : 'fold'}}"></i>
      </div>
    </li>
    <!-- Github Page -->
    <li>
      <a class="item" href="//github.com/cipchk/ng-alain" target="_blank">
        <i nz-icon nzType="github"></i>
      </a>
    </li>
    <!-- Lock Page -->
    <li class="hidden-xs">
      <div class="item" [routerLink]="['/lock']">
        <i nz-icon nzType="lock"></i>
      </div>
    </li>
    <!-- Search Button -->
    <li class="header-search__btn" (click)="searchToggleChange()">
      <div class="item">
        <i nz-icon nzType="search"></i>
      </div>
    </li>
  </ul>
  <header-search class="header-search" [toggleChange]="searchToggleStatus"></header-search>
  <ul class="top-nav">
    <!-- Notify -->
    <li>
      <header-notify></header-notify>
    </li>
    <!-- Task -->
    <li class="hidden-xs">
      <header-task></header-task>
    </li>
    <!-- App Icons -->
    <li class="hidden-xs">
      <header-icon></header-icon>
    </li>
    <!-- Settings -->
    <li class="hidden-xs">
      <nz-dropdown nzTrigger="click" nzPlacement="bottomRight">
        <div class="item" nz-dropdown>
          <i nz-icon nzType="setting"></i>
        </div>
        <div nz-menu style="width:200px;">
          <div nz-menu-item>
            <header-fullscreen></header-fullscreen>
          </div>
          <div nz-menu-item>
            <header-storage></header-storage>
          </div>
          <div nz-menu-item>
            <header-i18n></header-i18n>
          </div>
        </div>
      </nz-dropdown>
    </li>
    <li class="hidden-xs">
      <header-user></header-user>
    </li>
  </ul>
</div>
  `,
  'src/app/layout/default/header/components/search.component.ts': `import {
    Component,
    ViewChild,
    Input,
    OnInit,
    ElementRef,
    AfterViewInit,
  } from '@angular/core';

  @Component({
    selector: 'header-search',
    template: \`
    <nz-input-group nzAddOnBeforeIcon="anticon anticon-search">
      <input nz-input [(ngModel)]="q" (focus)="qFocus()" (blur)="qBlur()"
        [placeholder]="'top-search-ph' | translate">
    </nz-input-group>
    \`,
    host: {
      '[class.header-search__focus]': 'focus',
      '[class.header-search__toggled]': 'searchToggled',
    },
  })
  export class HeaderSearchComponent implements AfterViewInit {
    q: string;

    qIpt: HTMLInputElement;

    focus = false;

    searchToggled = false;

    @Input()
    set toggleChange(value: boolean) {
      if (typeof value === 'undefined') return;
      this.searchToggled = true;
      this.focus = true;
      setTimeout(() => this.qIpt.focus(), 300);
    }

    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
      this.qIpt = (this.el.nativeElement as HTMLElement).querySelector(
        '.ant-input',
      ) as HTMLInputElement;
    }

    qFocus() {
      this.focus = true;
    }

    qBlur() {
      this.focus = false;
      this.searchToggled = false;
    }
  }`,
  'src/app/layout/fullscreen/fullscreen.component.ts': `
    import { Component } from '@angular/core';

  @Component({
    selector: 'layout-fullscreen',
    templateUrl: './fullscreen.component.html',
  })
  export class LayoutFullScreenComponent {}
`,
};
