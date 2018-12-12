
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <form nz-form #f="ngForm" se-container="2" gutter="32">
    <se label="App Key" error="请填写">
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required>
    </se>
    <se label="App Secret" error="请填写，最多32位">
      <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32">
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </se>
  </form>`,
})
export class DemoComponent {
  i: any = {};
}
