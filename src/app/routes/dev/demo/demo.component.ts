import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <g2-bar height="200" [title]="'销售额趋势'" [data]="salesData"></g2-bar>
  `,
})
export class DemoComponent {
  salesData: any[] = new Array(12).fill({}).map((_i, idx) => ({
    x: `${idx + 1}月`,
    y: idx === 0 ? 0.5 : Math.floor(Math.random() * 5),
  }));
}
