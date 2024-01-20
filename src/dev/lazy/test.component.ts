import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { format } from 'date-fns';

@Component({
  selector: 'dev-page',
  template: `
    <h3>Lazy child component</h3>
    <p>first: {{ first | json }}，now: {{ now | json }}</p>
    <p>id: {{ id | json }}</p>
    page: {{ route.url | json }}
  `,
  standalone: true,
  imports: [JsonPipe]
})
export class DevLazyPageComponent implements OnInit {
  readonly route = inject(ActivatedRoute);

  first = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  id = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => (this.id = +params.id));
  }

  _onReuseInit(): void {
    this.now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    console.log('by _onReuseInit', this.route.snapshot.url.toString());
  }
}
