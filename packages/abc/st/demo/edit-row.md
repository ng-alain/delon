---
order: 4
title:
  en-US: Editable Rows
  zh-CN: 可编辑行
---

## zh-CN

定制带行编辑功能的表格，自由操作行内容。

## en-US

Table with editable rows.

```ts
import { Component, ViewChild } from '@angular/core';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <st #st [data]="users" [columns]="columns">
      <ng-template st-row="nameTpl" let-item let-index="index">
        <input *ngIf="item.edit" nz-input [ngModel]="item.name" (ngModelChange)="st.setRow(index, { name: $event })" />
        <ng-container *ngIf="!item.edit">{{ item.name }}</ng-container>
      </ng-template>
      <ng-template st-row="ageTpl" let-item let-index="index">
        <nz-input-number *ngIf="item.edit" [ngModel]="item.age" (ngModelChange)="st.setRow(index, { age: $event })"></nz-input-number>
        <ng-container *ngIf="!item.edit">{{ item.age }}</ng-container>
      </ng-template>
      <ng-template st-row="enabledTpl" let-item let-index="index">
        <nz-switch *ngIf="item.edit" [ngModel]="item.enabled" (ngModelChange)="st.setRow(index, { enabled: $event })"></nz-switch>
        <ng-container *ngIf="!item.edit">{{ item.enabled ? 'Y' : 'N' }}</ng-container>
      </ng-template>
    </st>
  `,
})
export class DemoComponent {
  @ViewChild('st') private st: STComponent;
  users: STData[] = Array(10)
    .fill({})
    .map((_, idx) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
        enabled: idx % 2 === 0,
      };
    });
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '姓名', index: 'name', render: 'nameTpl' },
    { title: '年龄', index: 'age', render: 'ageTpl' },
    { title: '启用', index: 'enabled', render: 'enabledTpl' },
    {
      title: 'OP',
      buttons: [
        {
          text: `Edit`,
          iif: i => !i.edit,
          click: i => this.updateEdit(i, true),
        },
        {
          text: `Save`,
          iif: i => i.edit,
          click: i => {
            this.submit(i);
          },
        },
        {
          text: `Cancel`,
          iif: i => i.edit,
          click: i => this.updateEdit(i, false),
        },
      ],
    },
  ];

  constructor(private msg: NzMessageService) {}

  private submit(i: STData): void {
    this.msg.success(JSON.stringify(this.st.pureItem(i)));
    this.updateEdit(i, false);
  }

  private updateEdit(i: STData, edit: boolean): void {
    this.st.setRow(i, { edit }, { refreshSchema: true });
  }
}
```
