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
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-demo',
  template: ` <form nz-form #f="ngForm" se-container="1" size="compact" gutter="32">
    <se label="所属类目" line>头像</se>
    <se label="图片">
      <nz-input-group nzSearch [nzAddOnAfter]="suffixButton">
        <input type="text" nz-input placeholder="请贴入网络图片地址" />
      </nz-input-group>
      <ng-template #suffixButton>
        <button nz-button nzType="primary" nzSearch>提取</button>
      </ng-template>
    </se>
  </form>`,
  standalone: true,
  imports: [SEModule, NzFormModule, NzInputModule, FormsModule, NzButtonModule]
})
export class DemoComponent {}
```
