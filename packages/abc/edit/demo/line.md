---
order: 7
title:
  zh-CN: 分隔线
  en-US: Separation line
---

## zh-CN

构建一个左右结构的标准表单行。

## en-US

Build a standard form row.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <form nz-form #f="ngForm" se-container="1" size="compact" gutter="32">
    <se label="所属类目" line>头像</se>
    <se label="图片">
      <nz-input-group nzSearch [nzSuffix]="suffixButton">
        <input type="text" nz-input placeholder="请贴入网络图片地址">
        <ng-template #suffixButton>
          <button nz-button nzType="primary" nzSearch>提取</button>
        </ng-template>
      </nz-input-group>
    </se>
  </form>`,
})
export class DemoComponent {
  i: any = {};
}
```
