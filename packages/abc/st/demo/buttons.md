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
import { Component, ViewChild, inject } from '@angular/core';

import { DemoDrawerComponent, DemoModalComponent } from '@shared';

import { STChange, STColumn, STComponent, STData, STModule } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <st #st [data]="users" [columns]="columns" (change)="change($event)" /> `,
  imports: [STModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  @ViewChild('st') readonly st!: STComponent;

  users: STData[] = Array(10)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      name: `name ${idx + 1}`,
      age: Math.ceil(Math.random() * 10) + 20
    }));
  columns: STColumn[] = [
    { title: '序号', type: 'no' },
    { title: '编号', index: 'id' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age' },
    {
      title: '操作区',
      buttons: [
        {
          text: i => (i.ok ? 'Click' : 'Edit'),
          icon: i => ({ type: i.ok ? 'edit' : 'delete' }),
          className: i => (i.ok ? 'text-error' : null),
          type: 'modal',
          modal: {
            component: DemoModalComponent
          },
          click: (i, modal) => {
            this.msg.success(`重新加载页面，回传值：${JSON.stringify(modal)}`);
            // 触发更新按钮的文本、颜色、Icon
            this.st.setRow(i, { ok: !i.ok });
          }
        },
        {
          text: 'Drawer',
          type: 'drawer',
          drawer: {
            title: '编辑',
            component: DemoDrawerComponent
          },
          click: (_record, modal) => this.msg.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
        },
        {
          icon: 'check-circle',
          click: record => this.msg.info(`check-${record.name}`),
          iif: record => record.id % 2 === 0,
          iifBehavior: 'disabled',
          tooltip: `Is disabled button`
        },
        {
          icon: 'delete',
          type: 'del',
          pop: {
            title: 'Yar you sure?',
            okType: 'danger',
            icon: 'star'
          },
          click: (record, _modal, comp) => {
            this.msg.success(`成功删除【${record.name}】`);
            comp!.removeRow(record);
          },
          iif: record => record.id % 2 === 0
        },
        {
          text: '更多',
          children: [
            {
              text: record => (record.id === 1 ? `过期` : `正常`),
              click: record => this.msg.error(`${record.id === 1 ? `过期` : `正常`}【${record.name}】`)
            },
            {
              text: `审核`,
              click: record => this.msg.info(`check-${record.name}`),
              iif: record => record.id % 2 === 0,
              iifBehavior: 'disabled',
              tooltip: 'This is tooltip'
            },
            {
              type: 'divider'
            },
            {
              text: `重新开始`,
              icon: 'edit',
              click: record => this.msg.success(`重新开始【${record.name}】`)
            }
          ]
        }
      ]
    }
  ];

  change(e: STChange): void {
    console.log(e);
  }
}
```
