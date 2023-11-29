---
type: example
---

```ts
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormatMaskPipe } from '@delon/util';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-demo',
  template: `
    <p class="mb-md">
      &#123;&#123;<span> {{ value }} | mask: {{ maskStr | json }} </span>&#125;&#125; = {{ value | mask: maskStr }}
    </p>
    <nz-input-group nzAddOnBefore="Value" class="mb-md">
      <input type="text" nz-input [(ngModel)]="value" />
    </nz-input-group>
    <nz-input-group nzAddOnBefore="Mask">
      <input type="text" nz-input [(ngModel)]="maskStr" />
    </nz-input-group>
  `,
  standalone: true,
  imports: [JsonPipe, FormatMaskPipe, NzInputModule, FormsModule]
})
export class DemoComponent {
  value = '123';
  maskStr = '(###)';
}
```
