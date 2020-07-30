import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dev-page',
  template: `
    <page-header></page-header>
    <p>first: {{ first | json }}，now: {{ now | json }}</p>
    page: {{ router.url | json }}
  `,
})
export class DevPageComponent implements OnInit {
  now = +new Date();
  first = +new Date();

  constructor(public router: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('ngoninit');
  }

  _onReuseInit(): void {
    this.now = +new Date();
    console.log('by _onReuseInit', this.router.snapshot.url.toString());
  }
}
