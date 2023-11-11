---
type: example
---

```ts
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilterPipe } from '@delon/util';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'app-demo',
  template: `
    <p class="mb-md">
      &#123;&#123;<span> {{ list | json }} | filter: matcher </span>&#125;&#125; =
      {{ list | filter: matcher : number | json }}
    </p>
    <p class="mb-md">matcher = (item: PriceObject, number: number) => item.price > number;</p>
    <nz-input-group nzAddOnBefore="number">
      <nz-input-number [(ngModel)]="number" />
    </nz-input-group>
  `,
  standalone: true,
  imports: [JsonPipe, FilterPipe, NzInputModule, NzInputNumberModule, FormsModule]
})
export class DemoComponent {
  list = new Array(10).fill(0).map((_, idx) => ({ price: idx + 1 }));
  number = 0;
  matcher = (item: { price: number }, number: number): boolean => item.price > number;
}
```
