---
type: example
---

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <p class="mb-md">
      {{<span> {{ value }} | mask: {{ maskStr | json }} </span>}} = {{ value | mask: maskStr }}
    </p>
    <nz-input-group nzAddOnBefore="Value" class="mb-md">
      <input type="text" nz-input [(ngModel)]="value" />
    </nz-input-group>
    <nz-input-group nzAddOnBefore="Mask">
      <input type="text" nz-input [(ngModel)]="maskStr" />
    </nz-input-group>
  `,
})
export class DemoComponent {
  value = '123';
  maskStr = '(###)';
}
```
