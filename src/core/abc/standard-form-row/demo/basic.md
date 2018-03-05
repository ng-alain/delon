---
order: 1
title: 基础
---

构建一个左右结构的标准表单行。

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
    <standard-form-row grid title="所属类目">头像</standard-form-row>
    <standard-form-row grid last title="图片">
        <nz-input-group nzCompact>
            <input style="width: 80%" nz-input [(ngModel)]="url" placeholder="请贴入网络图片地址">
            <button nz-button [nzType]="'primary'">提取</button>
        </nz-input-group>
    </standard-form-row>`
})
export class DemoComponent {
    url: string;
}
```
