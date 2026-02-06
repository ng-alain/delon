import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { NzIconModule } from 'ng-zorro-antd/icon';
<% if (i18n) { %>
import { HeaderI18nComponent } from '../basic/widgets/i18n.component';<% } %>

@Component({
  selector: 'layout-passport',
  template: `
    <div class="container"><% if (i18n) { %>
      <header-i18n showLangText="false" class="langs" /><% } %>
      <div class="wrap">
        <div class="top">
          <div class="head">
            <img class="logo" src="./assets/logo-color.svg">
            <span class="title">NG-ALAIN</span>
          </div>
          <div class="desc">武林中最有影响力的《葵花宝典》；欲练神功，挥刀自宫</div>
        </div>
        <router-outlet />
        <global-footer [links]="links">
          Copyright
          <i class="anticon anticon-copyright"></i> 2025
          <a href="//github.com/cipchk" target="_blank">卡色</a>出品
        </global-footer>
      </div>
    </div>
  `,
  styleUrls: ['./passport.less'],
  imports: [RouterOutlet<% if (i18n) { %>, HeaderI18nComponent<% } %>, GlobalFooterModule, NzIconModule]
})
export class LayoutPassport {
  private tokenSrv = inject(DA_SERVICE_TOKEN);

  links = [
    {
      title: '帮助',
      href: ''
    },
    {
      title: '隐私',
      href: ''
    },
    {
      title: '条款',
      href: ''
    }
  ];

  constructor() {
    this.tokenSrv.clear();
  }
}
