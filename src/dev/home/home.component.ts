import { Component } from '@angular/core';

@Component({
  selector: 'dev-home',
  template: `
    <page-header [autoBreadcrumb]="false"></page-header>
    home
  `,
})
export class DevHomeComponent {}
