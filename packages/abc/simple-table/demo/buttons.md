---
order: 7
title: 自定义按钮组
---

透过简单的配置产生一组日常按钮组。

```ts
import { Component, Input } from '@angular/core';
import { SimpleTableColumn, SimpleTableChange, SimpleTableFilter, SimpleTableButton } from '@delon/abc';
import { NzMessageService } from 'ng-zorro-antd';
import { DemoModalComponent } from 'app/shared/components/modal/demo.component';

@Component({
    selector: 'app-demo',
    template: `
    <simple-table [data]="users" [ps]="3" [columns]="columns">
    </simple-table>
    `
})
export class DemoComponent {
    constructor(private message: NzMessageService) {}

    users: any[] = Array(10).fill({}).map((item: any, idx: number) => {
        return {
            id: idx + 1,
            name: `name ${idx + 1}`,
            age: Math.ceil(Math.random() * 10) + 20
        };
    });
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id' },
        { title: '姓名', index: 'name' },
        { title: '年龄', index: 'age' },
        {
            title: '操作区',
            buttons: [
                {
                    text: '删除',
                    type: 'del',
                    click: (record: any) => this.message.success(`成功删除【${record.name}】`),
                    if: (item: any, btn: SimpleTableButton, column: SimpleTableColumn) => item.id % 2 === 0
                },
                {
                    text: '编辑',
                    type: 'modal',
                    component: DemoModalComponent,
                    click: (record: any, modal: any) => this.message.success(`重新加载页面，回传值：${JSON.stringify(modal)}`)
                },
                {
                    text: '更多',
                    children: [
                        {
                            text: `过期`,
                            click: (record: any) => this.message.error(`过期【${record.name}】`),
                            format: (record: any) => `<i class="anticon anticon-frown-o"></i> 过期`
                        },
                        {
                            text: `重新开始`,
                            click: (record: any) => this.message.success(`重新开始【${record.name}】`)
                        }
                    ]
                }
            ]
        }
    ];
}
```
