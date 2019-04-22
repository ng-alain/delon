import { Component, Input } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd';

@Component({
  selector: `app-demo-dialog-drawer`,
  template: `
    <p style="height: 1000px">参数：{{ record | json }}</p>
    The end!
    <div class="drawer-footer">
      <button nz-button [nzType]="'default'" (click)="cancel()">
        Cancel
      </button>
      <button nz-button [nzType]="'primary'" (click)="ok()">
        OK
      </button>
    </div>
  `,
})
export class DemoDrawerComponent {
  @Input()
  record: any;

  constructor(private ref: NzDrawerRef) {}

  ok() {
    this.ref.close(`new time: ${+new Date()}`);
    this.cancel();
  }

  cancel() {
    this.ref.close();
  }
}
