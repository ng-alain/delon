---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
type: example
---

## zh-CN

小屏幕查看效果。

## en-US

Mobile screen view effect.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <nz-table #basicTable [nzData]="dataSet"
    nzTitle="This is title" class="ant-table-rep__hide-header-footer">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let data of basicTable.data">
        <td>
          <span class="ant-table-rep__title">Name</span>
          {{data.name}}
        </td>
        <td>
          <span class="ant-table-rep__title">Age</span>
          {{data.age}}
        </td>
        <td>
          <span class="ant-table-rep__title">Address</span>
          {{data.address}}
        </td>
      </tr>
    </tbody>
  </nz-table>
  `,
})
export class DemoComponent {
  dataSet = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
}
```
