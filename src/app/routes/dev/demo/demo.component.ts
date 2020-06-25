import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: ` <img [_src]="src" useHttp /> `,
})
export class DemoComponent {
  src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
}
