import { Component } from '@angular/core';

import { MenuService } from '@delon/theme';

@Component({
  selector: 'app-theme',
  template: `
  app-theme
  `
})
export class ThemeComponent {
    constructor(private menu: MenuService) {}
}
