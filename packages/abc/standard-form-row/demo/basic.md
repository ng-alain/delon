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
        <nz-input-group nzSearch [nzSuffix]="suffixButton">
            <input type="text" nz-input placeholder="请贴入网络图片地址">
            <ng-template #suffixButton>
                <button nz-button nzType="primary" nzSearch>提取</button>
            </ng-template>
        </nz-input-group>
    </standard-form-row>`
})
export class DemoComponent {
    url: string;
}
```
