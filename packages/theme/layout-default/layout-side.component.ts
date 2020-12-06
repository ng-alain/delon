import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SettingsService, User } from '@delon/theme';

@Component({
  selector: 'layout-default-side',
  // templateUrl: './sidebar.component.html',
  template: `
    <div class="alain-default__aside-inner">
      <div nz-dropdown nzTrigger="click" [nzDropdownMenu]="userMenu" class="alain-default__aside-user">
        <nz-avatar class="alain-default__aside-user-avatar" [nzSrc]="user.avatar"></nz-avatar>
        <div class="alain-default__aside-user-info">
          <strong>{{ user.name }}</strong>
          <p class="mb0">{{ user.email }}</p>
        </div>
      </div>
      <nz-dropdown-menu #userMenu="nzDropdownMenu">
        <ul nz-menu>
          <li nz-menu-item routerLink="/pro/account/center">{{ 'menu.account.center' }}</li>
          <li nz-menu-item routerLink="/pro/account/settings">{{ 'menu.account.settings' }}</li>
        </ul>
      </nz-dropdown-menu>
      <layout-default-nav class="d-block py-lg"></layout-default-nav>
    </div>
  `,
  host: {
    '[class.alain-default__aside]': `true`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDefaultSideComponent {
  get user(): User {
    return this.settings.user;
  }

  constructor(private settings: SettingsService) {}
}
