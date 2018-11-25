import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dev-page',
  template: `
  <page-header [autoBreadcrumb]="false"></page-header>
  page: {{ router.url | json }}
  `
})
export class DevPageComponent {
  constructor(public router: ActivatedRoute) {

  }
}
