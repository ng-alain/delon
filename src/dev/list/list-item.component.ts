import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { format } from 'date-fns';

@Component({
  selector: 'dev-list-item',
  template: `
    <h2>List Item</h2>
    <p>first: {{ first | json }}，now: {{ now | json }}</p>
    <p>id: {{ id | json }}</p>
    page: {{ route.url | json }}
  `
})
export class DevListItemComponent implements OnInit, OnDestroy {
  first = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  id = 0;

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('LIST ITEM: ngOnInit');
    this.route.params.subscribe(params => (this.id = +params.id));
  }

  _onReuseInit(): void {
    this.now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    console.log('LIST ITEM: by _onReuseInit', this.route.snapshot.url.toString());
  }

  ngOnDestroy(): void {
    console.log('LIST ITEM: ngOnDestroy');
  }
}
