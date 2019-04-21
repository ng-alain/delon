import { Component, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: `app-demo-dialog-modal`,
  template: `
    <div class="modal-header">
      <div class="modal-title">Custom component</div>
    </div>
    <p>参数：{{ record | json }}</p>
    <div class="modal-footer">
      <button nz-button [nzType]="'default'" [nzSize]="'large'" (click)="cancel()">
        Cancel
      </button>
      <button nz-button [nzType]="'primary'" [nzSize]="'large'" (click)="ok()">
        OK
      </button>
    </div>
  `,
})
export class DemoModalComponent {
  @Input()
  record: any;

  constructor(private modal: NzModalRef) {}

  ok() {
    this.modal.close(`new time: ${+new Date()}`);
    this.cancel();
  }

  cancel() {
    this.modal.destroy();
  }
}
