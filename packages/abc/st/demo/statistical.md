---
order: 10
title:
  zh-CN: 统计
  en-US: Statistical
---

## zh-CN

支持 `count`、`distinctCount`、`sum`、`average`、`max`、`min`、自定义统计方法。

## en-US

Support `count`, `distinctCount`, `sum`, `average`, `max`, `min` or custom function statistics methods.

```ts
import { Component } from '@angular/core';
import { STColumn, STData } from '@delon/abc/st';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button (click)="data = []">Clean Data</button>
    <st #st [data]="data" [columns]="columns" [body]="bodyTpl">
      <ng-template #bodyTpl let-s>
        <ng-container *ngIf="st.count > 0">
          <tr>
            <td>合计</td>
            <td>{{ s.len.text }} 个</td>
            <td>{{ s.dc.text }}</td>
            <td class="text-right">{{ s.sum.text }}</td>
            <td class="text-right">{{ s.avg.text }}</td>
            <td class="text-right">{{ s.min.text }}</td>
            <td class="text-right">{{ s.max.text }}</td>
            <td class="text-right">{{ s.custom.text }}</td>
          </tr>
          <tr class="bg-grey-lighter">
            <td colspan="3">性别平均值</td>
            <td class="text-right">{{ s.sum.value / s.len.value | price }}</td>
            <td colspan="4"></td>
          </tr>
        </ng-container>
      </ng-template>
    </st>
  `,
})
export class DemoComponent {
  data: STData[] = Array(100)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      price: ~~(Math.random() * 100),
      age: ~~(Math.random() * 100) > 50 ? '女' : '男',
    }));
  columns: STColumn[] = [
    { title: '行号', type: 'no' },
    { title: '编号', index: 'id', statistical: 'count', key: 'len' },
    { title: '性别', index: 'age', statistical: 'distinctCount', key: 'dc' },
    { title: 'Sum', index: 'price', type: 'currency', statistical: 'sum', key: 'sum' },
    { title: 'Average', index: 'price', type: 'currency', statistical: 'average', key: 'avg' },
    { title: 'Min', index: 'price', type: 'currency', statistical: 'min', key: 'min' },
    { title: 'Max', index: 'price', type: 'currency', statistical: 'max', key: 'max' },
    {
      title: 'Custom',
      index: 'price',
      type: 'currency',
      statistical: { type: values => ({ value: values[0], text: `**${values[0]}` }), currency: false },
      key: 'custom',
    },
  ];
}
```
