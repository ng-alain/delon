---
type: example
---

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <p class="mb-md">
      {{<span> {{ list | json }} | filter: matcher </span>}} = {{ list | filter: matcher:number | json }}
    </p>
    <p class="mb-md">matcher = (item: PriceObject, number: number) => item.price > number;</p>
    <nz-input-group nzAddOnBefore="number">
      <nz-input-number [(ngModel)]="number"></nz-input-number>
    </nz-input-group>
  `,
})
export class DemoComponent {
  list = new Array(10).fill(0).map((_, idx) => ({ price: idx + 1 }));
  number = 0;
  matcher = (item: { price: number }, number: number) => item.price > number;
}
```
