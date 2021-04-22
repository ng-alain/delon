---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

基础用法。

```ts
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="refresh()" nzType="primary">Refresh</button>
    <nz-table [nzData]="list" [nzShowPagination]="false">
      <thead>
        <tr>
          <th>序号</th>
          <th nzWidth="350px">服务调用次数</th>
          <th nzWidth="350px">数据有负值</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let i of list; let idx = index">
          <td>{{ idx + 1 }}</td>
          <td>
            <g2-single-bar height="24" [value]="i.value"></g2-single-bar>
          </td>
          <td>
            <g2-single-bar height="60" [value]="i.other" min="-100" line></g2-single-bar>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `,
  styles: [
    `
      :host ::ng-deep .ant-table tbody > tr > td {
        padding: 0;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class DemoComponent {
  list: Array<{ id: number; value: number; other: number }> = new Array(5).fill({}).map(() => ({
    id: Math.floor(Math.random() * 10000),
    value: Math.floor(Math.random() * 100),
    other: Math.floor(Math.random() * 100) > 50 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100),
  }));

  refresh(): void {
    this.list.forEach(v => {
      v.value = Math.floor(Math.random() * 100);
      v.other = Math.floor(Math.random() * 100) > 50 ? Math.floor(Math.random() * 100) : -Math.floor(Math.random() * 100);
    });
  }
}
```
