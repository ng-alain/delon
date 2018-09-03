
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  result: {{i | json}}<br>
  <range-picker [(ngModel)]="i.start" [(ngModelEnd)]="i.end"></range-picker>
  `,
})
export class DemoComponent {
  i: any = {};
}
