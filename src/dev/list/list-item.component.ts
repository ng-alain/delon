import { JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { format } from 'date-fns';

@Component({
  selector: 'dev-list-item',
  template: `
    <h2>List Item</h2>
    <p>first: {{ first | json }}，now: {{ now | json }}</p>
    <p>id: {{ id | json }}</p>
    page: {{ route.url | json }}
  `,
  standalone: true,
  imports: [JsonPipe]
})
export class DevListItemComponent implements OnInit, OnDestroy {
  readonly route = inject(ActivatedRoute);

  first = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  id = 0;

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
