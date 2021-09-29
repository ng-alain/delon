---
order: 3
title:
  zh-CN: 右键菜单
  en-US: Context Menu
---

## zh-CN

利用 `contextmenu` 实现点击整个表格右键菜单。

## en-US

Use `contextmenu` to implement the contextmenu of the table.

```ts
import { Component } from '@angular/core';
import { STColumn, STContextmenuFn, STContextmenuItem, STContextmenuOptions } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <st
      #st
      [widthMode]="{ type: 'strict' }"
      [data]="url"
      [req]="{ params: params }"
      [columns]="columns"
      [contextmenu]="handleContextmenu"
    ></st>
  `,
})
export class DemoComponent {
  url = `/users?total=2&field=list`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '编号', index: 'id', width: 80 },
    { title: '邮箱', index: 'email', width: 80 },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];

  constructor(private msg: NzMessageService) {}

  private show(options: STContextmenuOptions, item: STContextmenuItem): void {
    if (options.type === 'head') {
      this.msg.info(`点击标题，下标为：${options.colIndex}，当前按钮为：${item.text}`);
    } else {
      this.msg.info(`点击单元格，行下标为：${options.rowIndex}，列下标为：${options.colIndex}，当前按钮为：${item.text}`);
    }
  }

  handleContextmenu: STContextmenuFn = (options): STContextmenuItem[] => {
    if (options.type === 'head') {
      return [
        {
          text: 'Click me',
          fn: item => this.show(options, item),
        },
      ];
    }
    return [
      {
        text: 'Edit',
        fn: item => this.show(options, item),
      },
      {
        text: 'View',
        fn: item => this.show(options, item),
      },
      {
        text: 'Next',
        children: [
          {
            text: 'Nothing',
            fn: item => this.show(options, item),
          },
          {
            text: 'asdf',
            fn: item => this.show(options, item),
          },
        ],
      },
    ];
  };
}
```
