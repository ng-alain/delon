---
type: example
---

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CurrencyCNYPipe } from '@delon/util';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-demo',
  template: `
    <p class="mb-md">
      &#123;&#123;<span> {{ value }} | cny </span>&#125;&#125; = {{ value | cny }}
    </p>
    <nz-input-group nzAddOnBefore="Value">
      <input type="text" nz-input [(ngModel)]="value" />
    </nz-input-group>
  `,
  imports: [NzInputModule, FormsModule, CurrencyCNYPipe]
})
export class DemoComponent {
  value = 100;
}
```
