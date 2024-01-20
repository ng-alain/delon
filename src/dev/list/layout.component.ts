import { JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import { format } from 'date-fns';

import { PageHeaderModule } from '@delon/abc/page-header';

@Component({
  selector: 'dev-list-layout',
  template: `
    <page-header />
    <h1>Layout</h1>
    <p>first: {{ first | json }}，now: {{ now | json }}</p>
    <hr />
    <div class="px-lg">
      <router-outlet />
    </div>
  `,
  standalone: true,
  imports: [PageHeaderModule, JsonPipe, RouterOutlet]
})
export class DevLayoutListComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);

  first = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

  ngOnInit(): void {
    console.log('LAYOUT LIST: ngOnInit');
  }

  _onReuseInit(): void {
    this.now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    console.log('LAYOUT LIST: by _onReuseInit', this.route.snapshot.url.toString());
  }

  ngOnDestroy(): void {
    console.log('LAYOUT LIST: ngOnDestroy');
  }
}
