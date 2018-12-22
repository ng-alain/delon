---
order: 7
title:
  zh-CN: 自定义按钮组
  en-US: Custom Buttons
---

## zh-CN

透过简单的配置产生一组日常按钮组（目标组件示例：[DemoModalComponent](https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/modal.component.ts)、[DemoDrawerComponent](https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/drawer.component.ts)）。

> 对话框由[ModalHelper](/theme/modal)处理，抽屉由[DrawerHelper](/theme/drawer)处理。

## en-US

Build a button group with the `buttons` property.

Generate a set of button group with a simple configuration (example code: [DemoModalComponent](https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/modal. Component.ts), [DemoDrawerComponent](https://github.com/ng-alain/delon/blob/master/src/app/shared/components/dialog/drawer.component.ts)).

> The modal is handled by [ModalHelper](/theme/modal) and the drawer is handled by [DrawerHelper](/theme/drawer).

```ts
import { Component } from '@angular/core';
import { STColumn } from '@delon/abc';
import { NzMessageService } from 'ng-zorro-antd';
import { DemoModalComponent } from '@shared/components/dialog/modal.component';
import { DemoDrawerComponent } from '@shared/components/dialog/drawer.component';

@Component({
  selector: 'app-demo',
  template: `
  <st [data]="users" [columns]="columns"></st>
  `,
})
export class DemoComponent {
  constructor(private message: NzMessageService) {}

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
    { title: '序号', type: 'no' },
    { title: '编号', index: 'id' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age' },
    {
      title: '操作区',
      buttons: [
        {
          text: 'Edit',
          icon: 'edit',
          type: 'modal',
          modal: {
            component: DemoModalComponent,
          },
          click: (record: any, modal: any) =>
            this.message.success(
              `重新加载页面，回传值：${JSON.stringify(modal)}`,
            ),
        },
        {
          text: 'Drawer',
          type: 'drawer',
          drawer: {
            title: '编辑',
            component: DemoDrawerComponent,
          },
          click: (record: any, modal: any) =>
            this.message.success(
              `重新加载页面，回传值：${JSON.stringify(modal)}`,
            ),
        },
        {
          icon: 'delete',
          type: 'del',
          click: (record, modal, comp) => {
            this.message.success(`成功删除【${record.name}】`);
            comp.removeRow(record);
          },
          iif: (item: any) => item.id % 2 === 0,
        },
        {
          text: '更多',
          children: [
            {
              text: `过期`,
              click: (record: any) =>
                this.message.error(`过期【${record.name}】`),
              format: (record: any) => `过期`,
            },
            {
              text: `重新开始`,
              icon: 'edit',
              click: (record: any) =>
                this.message.success(`重新开始【${record.name}】`),
            },
          ],
        },
      ],
    },
  ];
}
```
