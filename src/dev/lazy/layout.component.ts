import { Component } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'dev-lazy-layout',
  template: `
    <page-header></page-header>
    <h2>Lazy Module, {{ now | json }}</h2>
    <div class="p-lg">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class DevLazyLayoutComponent {
  now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
}
