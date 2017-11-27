---
order: 0
title: Structure
---

结构包含 `处理结果`，`补充信息` 以及 `操作建议` 三个部分，其中 `处理结果` 由 `提示图标`，`标题` 和 `结果描述` 组成。

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
<result
    type="success"
    [title]="title"
    [description]="description"
    extra="其他补充信息，自带灰底效果">
    <ng-template #title><div style="background:#7dbcea; color: #fff;">标题</div></ng-template>
    <ng-template #description><div style="background:rgba(16, 142, 233, 1); color: #fff;">结果描述</div></ng-template>
    <div style="background: #3ba0e9; color:#fff">操作建议，一般放置按钮组</div>
</result>
    `
})
export class DemoComponent {
}
```
