import { Component, Input } from '@angular/core';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: `app-demo-dialog-modal`,
  template: `
    <div class="modal-header">
      <div class="modal-title">Custom component</div>
    </div>
    <p>参数：{{ record | json }}</p>
    <div class="modal-footer">
      <button nz-button [nzType]="'default'" [nzSize]="'large'" (click)="cancel()"> Cancel </button>
      <button nz-button [nzType]="'primary'" [nzSize]="'large'" (click)="ok()"> OK </button>
    </div>
  `
})
export class DemoModalComponent {
  @Input() record: NzSafeAny;

  constructor(private modal: NzModalRef) {}

  ok(): void {
    this.modal.destroy(`new time: ${+new Date()}`);
  }

  cancel(): void {
    this.modal.destroy();
  }
}
