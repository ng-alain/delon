import { JsonPipe } from '@angular/common';
import { Component, Input, inject, input, model } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: `app-demo-dialog-modal`,
  template: `
    <div class="modal-header">
      <div class="modal-title">Custom component</div>
    </div>
    <p>参数：{{ record | json }}</p>
    <p>input_value: {{ input_value() }}</p>
    <p>model_value: {{ model_value() }}</p>
    <div class="modal-footer">
      <button nz-button [nzType]="'default'" [nzSize]="'large'" (click)="cancel()"> Cancel </button>
      <button nz-button [nzType]="'primary'" [nzSize]="'large'" (click)="ok()"> OK </button>
    </div>
  `,
  imports: [NzButtonModule, JsonPipe]
})
export class DemoModalComponent {
  private readonly modal = inject(NzModalRef);

  @Input() record: NzSafeAny;
  input_value = input<string>('');
  model_value = model<string>('');

  ok(): void {
    this.modal.destroy(`new time: ${+new Date()}`);
  }

  cancel(): void {
    this.modal.destroy();
  }
}
