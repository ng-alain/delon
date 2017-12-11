import { Component } from '@angular/core';

import 'style-loader!./app.themes.less';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    constructor() {}
}
