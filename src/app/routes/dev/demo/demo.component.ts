
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <form nz-form #f="ngForm" se-container="1" size="compact" gutter="32" [labelWidth]="null" line>
    <se label="App Key">
      <input type="text" nz-input>
    </se>
    <se label="App Secret">
      <input type="text" nz-input>
    </se>
  </form>`,
})
export class DemoComponent {
  i: any = {};
}
