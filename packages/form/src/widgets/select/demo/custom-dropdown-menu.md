---
order: 2
title:
  zh-CN: 扩展菜单
  en-US: Custom dropdown
---

## zh-CN

使用 `dropdownRender` 对下拉菜单进行自由扩展。

## en-US

Customize the dropdown menu via `dropdownRender`.

```ts
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SFComponent, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <sf #sf *ngIf="schema" [schema]="schema" (formSubmit)="submit($event)"></sf>
    <ng-template #dropdownRender>
      <nz-divider></nz-divider>
      <div class="container">
        <input type="text" nz-input #inputElement />
        <a class="add-item" (click)="addItem(inputElement)"><i nz-icon nzType="plus"></i> Add item</a>
      </div>
    </ng-template>
  `,
  styles: [
    `
      nz-divider {
        margin: 4px 0;
      }
      .container {
        display: flex;
        flex-wrap: nowrap;
        padding: 8px;
      }
      input {
      }
      .add-item {
        flex: 0 0 auto;
        padding: 8px;
        display: block;
      }
    `,
  ],
})
export class DemoComponent implements OnInit {
  @ViewChild('sf', { static: false }) private sf: SFComponent;
  @ViewChild('dropdownRender', { static: true }) private dropdownRender!: TemplateRef<void>;

  schema: SFSchema;
  statusList: string[] = ['1', '2', '3'];

  constructor(private msg: NzMessageService) {}

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  ngOnInit(): void {
    this.schema = {
      properties: {
        status: {
          type: 'string',
          title: '状态',
          enum: this.statusList,
          default: '1',
          ui: {
            widget: 'select',
            dropdownRender: this.dropdownRender,
          } as SFSelectWidgetSchema,
        },
      },
    };
  }

  addItem(input: HTMLInputElement): void {
    this.statusList.push(input.value);
    const statusProperty = this.sf.getProperty('/status')!;
    statusProperty.schema.enum = this.statusList;
    this.sf.setValue('/status', input.value);
  }
}
```