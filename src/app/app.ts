import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { DrawerHelper, TitleService, VERSION as VERSION_ALAIN, stepPreloader } from '@delon/theme';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';

import { MenuService, MOBILE } from '@core';

@Component({
  selector: 'app-root',
  template: `<router-outlet />`,
  imports: [RouterOutlet],
  host: {
    '[class.mobile]': `mobile()`,
    '[attr.ng-alain-version]': `alainVersion`,
    '[attr.ng-zorro-version]': `zorroVersion`
  }
})
export class App {
  private readonly router = inject(Router);
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly dh = inject(DrawerHelper);
  private readonly title = inject(TitleService);
  private readonly menu = inject(MenuService);

  protected readonly alainVersion = VERSION_ALAIN.full;
  protected readonly zorroVersion = VERSION_ZORRO.full;
  protected mobile = MOBILE;

  constructor() {
    this.breakpointObserver.observe('only screen and (max-width: 1200px)').subscribe(res => {
      MOBILE.set(res.matches);
    });

    const done = stepPreloader();

    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) return;

      done();

      this.dh.closeAll();

      this.title.setTitle(this.menu.getTitle());
    });
  }
}
