---
order: 6
title: 可展开
---

利用在 `ng-template` 定义 `#expand` 模板等于实现可展开，允许接收 `item`、`index`、`column` 三个值。附加可实现：嵌套子表格。

```ts
import { Component } from '@angular/core';
import { SimpleTableColumn, SimpleTableChange, SimpleTableFilter } from '@delon/abc';

@Component({
    selector: 'app-demo',
    template: `
    <simple-table #st [data]="users" [ps]="3" [columns]="columns">
        <ng-template #expand let-item let-index="index" let-column="column">
            {{ item.description }}
        </ng-template>
    </simple-table>
    `
})
export class DemoComponent {

    searchValue: string;

    users: any[] = Array(10).fill({}).map((item: any, idx: number) => {
        return {
            id: idx + 1,
            name: `name ${idx + 1}`,
            age: Math.ceil(Math.random() * 10) + 20,
            description: `${idx + 1}. My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.`
        };
    });
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id' },
        { title: '姓名', index: 'name' },
        { title: '年龄', index: 'age' }
    ];
}
```
