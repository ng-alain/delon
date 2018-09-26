---
order: 8
title:
  zh-CN: 固定列
  en-US: Fixed columns
---

## zh-CN

对于列数很多的数据，可以使用 `left` 和 `right` 固定前后的列，横向滚动查看其它数据，需要和 `scroll.x` 配合使用。

> 固定列使用了 `sticky` 属性，浏览器支持情况可以参考[这里](https://caniuse.com/#feat=css-sticky)
> - 若列头与内容不对齐或出现列重复，请指定列的宽度 `width`
> - 建议指定 `scroll.x` 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 `scroll.x`

## en-US

To fix some columns and scroll inside other columns, and you must set `scroll.x`, `left` and `right` meanwhile.

> We use `sticky` property to fixed column，[browsers support](https://caniuse.com/#feat=css-sticky).
> - Specify the `width` of th if header and cell do not align properly.
> - A fixed value which is greater than table width for `scroll.x` is recommended. The sum of unfixed columns should not greater than `scroll.x`.

```ts
import { Component } from '@angular/core';
import { STColumn } from '@delon/abc';

@Component({
  selector: 'app-demo',
  template: `
    <st [data]="users" [columns]="columns" [scroll]="{x: '1300px'}"></st>
  `,
})
export class DemoComponent {
  users: any[] = Array(10)
    .fill({})
    .map((item: any, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
      };
    });
  columns: STColumn[] = [
    { title: '编号1', index: 'id', fixed: 'left', width: '100px' },
    { title: '编号2', index: 'id', fixed: 'left', width: '100px' },
    { title: '编号3', index: 'id', fixed: 'left', width: '100px' },
    { title: '编号4', index: 'id' },
    { title: '编号5', index: 'id' },
    { title: '编号6', index: 'id' },
    { title: '编号7', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '编号8', index: 'id' },
    { title: '姓名10', index: 'name', fixed: 'right', width: '100px' },
    { title: '姓名11', index: 'name', fixed: 'right', width: '100px' },
    { title: '年龄12', index: 'age', fixed: 'right', width: '100px' },
  ];
}
```
