import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { format } from 'date-fns';

import { PageHeaderModule } from '@delon/abc/page-header';

@Component({
  selector: 'dev-page',
  template: `
    <page-header />
    <p>first: {{ first | json }}，now: {{ now | json }}</p>
    <p>id: {{ id | json }}</p>
    page: {{ route.url | json }}
  `,
  standalone: true,
  imports: [PageHeaderModule, JsonPipe]
})
export class DevPageComponent implements OnInit {
  first = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  id = 0;

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('ngoninit');
    this.route.params.subscribe(params => (this.id = +params.id));
  }

  _onReuseInit(): void {
    this.now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    console.log('by _onReuseInit', this.id);
  }
}
