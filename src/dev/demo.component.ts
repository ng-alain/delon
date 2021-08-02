import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: ` <price [(ngModel)]="value"></price> = {{ value | json }}`
})
export class DemoComponent {
  value: number | null = null;
}
