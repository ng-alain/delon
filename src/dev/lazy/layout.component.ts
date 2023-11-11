import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { format } from 'date-fns';

import { PageHeaderModule } from '@delon/abc/page-header';

@Component({
  selector: 'dev-lazy-layout',
  template: `
    <page-header />
    <h2>Lazy Module, {{ now | json }}</h2>
    <div class="p-lg">
      <router-outlet />
    </div>
  `,
  standalone: true,
  imports: [RouterOutlet, PageHeaderModule, JsonPipe]
})
export class DevLazyLayoutComponent {
  now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
}
