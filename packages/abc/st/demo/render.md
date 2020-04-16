---
order: 6
title:
  zh-CN: 自定义列
  en-US: Custom columns
---

## zh-CN

创建一个带有 `st-row="custom-name"` 的 `ng-template`，并在列描述 `render: 'custom-name'` 指定名称；模板允许接收 `item`、`index`、`column` 三个值。

如果指定 `type="title"` 表示是对标题自定义列。附加可实现：表头分组。

## en-US

Create a `ng-template` with `st-row="custom-name"` and specify the name in the column description `render: 'custom-name'`; template receive `item`, `index`, `column` three values.

Specifying `type="title"` means to customize the column for the title. Additional achievable: header grouping.

```ts
import { Component } from '@angular/core';
import { STColumn } from '@delon/abc/table';

@Component({
  selector: 'app-demo',
  template: `
  <div class="mb-md">
    <nz-checkbox-group [(ngModel)]="customColumns" (ngModelChange)="st.resetColumns({ emitReload: true })"></nz-checkbox-group>
  </div>
  <st #st [data]="users" [columns]="columns">
    <ng-template st-row="customTitle" type="title" let-c>
      {{ c.title.text }}
      <span nz-dropdown [nzDropdownMenu]="menuTpl" nzTrigger="click" [nzClickHide]="false" nzPlacement="bottomRight">
        <i nz-icon nzType="down"></i>
      </span>
      <nz-dropdown-menu #menuTpl="nzDropdownMenu">
        <div class="ant-table-filter-dropdown p-sm">
          <input type="text" nz-input placeholder="Search name" [(ngModel)]="searchValue" class="width-sm mr-sm">
          <button nz-button [nzType]="'primary'" (click)="st.load(2)">Search</button>
        </div>
      </nz-dropdown-menu>
    </ng-template>
    <ng-template st-row="custom" let-item let-index="index">
      <span nz-tooltip [nzTooltipTitle]="'年龄：' + item.age">tooltip: {{item.age}}-{{index}}</span>
    </ng-template>
  </st>
  `,
})
export class DemoComponent {
  searchValue: string;
  users: any[] = Array(10)
    .fill({})
    .map((_item: any, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
      };
    });
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '姓名', index: 'name', iif: () => this.isChoose('name') },
    { title: '年龄', index: 'age', iif: () => this.isChoose('age') },
    {
      title: '自定义',
      renderTitle: 'customTitle',
      render: 'custom',
      iif: () => this.isChoose('custom'),
    },
  ];
  customColumns = [
    { label: '姓名', value: 'name', checked: true },
    { label: '年龄', value: 'age', checked: true },
    { label: '自定义', value: 'custom', checked: true },
  ];
  isChoose(key: string): boolean {
    return !!this.customColumns.find(w => w.value === key && w.checked);
  }
}
```
