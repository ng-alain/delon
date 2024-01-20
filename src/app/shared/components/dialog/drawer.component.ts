import { JsonPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
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
  `,
  standalone: true,
  imports: [NzButtonModule, JsonPipe]
})
export class DemoDrawerComponent {
  private readonly ref = inject(NzDrawerRef);

  @Input() record: NzSafeAny;

  ok(): void {
    this.ref.close(`new time: ${+new Date()}`);
    this.cancel();
  }

  cancel(): void {
    this.ref.close();
  }
}
