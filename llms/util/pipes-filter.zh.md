---
title: filter
subtitle: 过滤数组
type: Pipes
module: import { FilterPipeModule } from '@delon/util/pipes/filter';
---

## filter

过滤数组。

[comment]: <demo(filter)>

---

## 代码示例

### undefined

```typescript
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilterPipe } from '@delon/util';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'util-pipes-filter-filter',
  template: `
    <p class="mb-md">
      &#123;&#123;<span> {{ list | json }} | filter: matcher </span>&#125;&#125; =
      {{ list | filter: matcher : number | json }}
    </p>
    <p class="mb-md">matcher = (item: PriceObject, number: number) => item.price > number;</p>
    <nz-input-wrapper nzAddonBefore="number">
      <nz-input-number [(ngModel)]="number" />
    </nz-input-wrapper>
  `,
  imports: [JsonPipe, FilterPipe, NzInputModule, NzInputNumberModule, FormsModule]
})
export class UtilPipesFilterFilter {
  list = new Array(10).fill(0).map((_, idx) => ({ price: idx + 1 }));
  number = 0;
  matcher = (item: { price: number }, number: number): boolean => item.price > number;
}
```
