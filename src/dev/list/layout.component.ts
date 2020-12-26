import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import format from 'date-fns/format';

@Component({
  selector: 'dev-list-layout',
  template: `
    <page-header></page-header>
    <h1>Layout</h1>
    <p>first: {{ first | json }}，now: {{ now | json }}</p>
    <hr />
    <div class="px-lg">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class DevLayoutListComponent implements OnInit, OnDestroy {
  first = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

  constructor(private route: ActivatedRoute) {}

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
