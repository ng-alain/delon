import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { format } from 'date-fns';

import { PageHeaderModule } from '@delon/abc/page-header';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'dev-page',
  template: `
    <page-header />
    <p>first: {{ first | json }}，now: {{ now | json }}</p>
    <p>id: {{ id | json }}</p>
    page: {{ route.url | json }}
    <div>
      <button nz-button nzType="primary" (click)="replace('/dev/view/2')">Replace /dev/view/2</button>
    </div>
  `,
  imports: [PageHeaderModule, JsonPipe, NzButtonModule]
})
export class DevPageComponent implements OnInit {
  readonly route = inject(ActivatedRoute);
  readonly srv = inject(ReuseTabService);
  first = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  id = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => (this.id = +params.id));
  }

  _onReuseInit(): void {
    this.now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    console.log('by _onReuseInit', this.id);
  }

  replace(url: string): void {
    this.srv.replace(url);
  }
}
