---
type: example
---

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CurrencyPricePipe } from '@delon/util';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'app-demo',
  template: `
    <p class="mb-md">
      &#123;&#123;<span> {{ value }} | price </span>&#125;&#125; = {{ value | price: { precision: precision } }}
    </p>
    <nz-input-group nzAddOnBefore="Value" class="mb-md">
      <input type="text" nz-input [(ngModel)]="value" />
    </nz-input-group>
    <nz-input-group nzAddOnBefore="Precision">
      <nz-input-number [(ngModel)]="precision" [nzMin]="0" [nzMax]="292" />
    </nz-input-group>
  `,
  standalone: true,
  imports: [NzInputModule, FormsModule, NzInputNumberModule, CurrencyPricePipe]
})
export class DemoComponent {
  value = 10000.345;
  precision = 2;
}
```
