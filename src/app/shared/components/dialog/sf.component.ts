import { Component } from '@angular/core';

import { NzModalRef } from 'ng-zorro-antd/modal';

import { SFSchema } from '@delon/form';

@Component({
  selector: `app-demo-dialog-modal`,
  template: `
    <div class="modal-header">
      <div class="modal-title">Sf demo</div>
    </div>
    <sf #sf mode="edit" [schema]="schema" [formData]="i" button="none">
      <div class="modal-footer">
        <button nz-button type="button" (click)="close()">关闭</button>
        <button nz-button type="submit" [nzType]="'primary'" (click)="save(sf.value)" [disabled]="!sf.valid"
          >保存</button
        >
      </div>
    </sf>
  `
})
export class DemoSfComponent {
  i: any;
  schema: SFSchema = {
    properties: {
      name: { title: 'Name', type: 'string' }
    },
    required: ['name'],
    ui: {
      spanLabelFixed: 150,
      grid: { span: 24 }
    }
  };

  // schema: SFSchema = {
  //   properties: {
  //     title: { type: 'string', title: '任务名称', maxLength: 50 },
  //   },
  //   required: ['title'],
  //   ui: {
  //     spanLabelFixed: 150,
  //     grid: { span: 24 },
  //   },
  // };

  constructor(private modal: NzModalRef) {}

  save(value: any): void {
    this.modal.destroy(value);
  }

  close(): void {
    this.modal.destroy();
  }
}
