import { Component, Input } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
  selector: `app-demo-dialog-drawer`,
  template: `
    <p style="height: 1000px">参数：{{ record | json }},<a routerLink="/">Change Router</a></p>
    The end!
    <div class="drawer-footer">
      <button nz-button [nzType]="'default'" (click)="cancel()"> Cancel </button>
      <button nz-button [nzType]="'primary'" (click)="ok()"> OK </button>
    </div>
  `
})
export class DemoDrawerComponent {
  @Input() record: NzSafeAny;

  constructor(private ref: NzDrawerRef) {}

  ok(): void {
    this.ref.close(`new time: ${+new Date()}`);
    this.cancel();
  }

  cancel(): void {
    this.ref.close();
  }
}
