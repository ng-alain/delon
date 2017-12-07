import { Component } from '@angular/core';

import 'style-loader!./app.themes.less';

@Component({
  selector: 'app-root',
  template: `
  <div style="margin: 0 auto; max-width: 80%;">
    <div class="padding: 32px;">
        <a routerLink="/theme">theme</a>
        <a routerLink="/abc">abc</a>
        <a routerLink="/acl">acl</a>
    </div>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
    constructor() {}
}
