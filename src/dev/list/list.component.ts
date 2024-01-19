import { JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { format } from 'date-fns';

@Component({
  selector: 'dev-list',
  template: `
    <h2>List</h2>
    <p>first: {{ first | json }}，now: {{ now | json }}</p>
    <p>id: {{ id | json }}</p>
    page: {{ route.url | json }}
  `,
  standalone: true,
  imports: [JsonPipe]
})
export class DevListComponent implements OnInit, OnDestroy {
  readonly route = inject(ActivatedRoute);

  first = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  id = 0;

  ngOnInit(): void {
    console.log('LIST: ngOnInit');
    this.route.params.subscribe(params => (this.id = +params.id));
  }

  _onReuseInit(): void {
    this.now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    console.log('LIST: by _onReuseInit', this.route.snapshot.url.toString());
  }

  ngOnDestroy(): void {
    console.log('LIST: ngOnDestroy');
  }
}
