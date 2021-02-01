---
type: example
---

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <p class="mb-md">
      {{<span> {{ value }} | price </span>}} = {{ value | price: { precision: precision } }}
    </p>
    <nz-input-group nzAddOnBefore="Value" class="mb-md">
      <input type="text" nz-input [(ngModel)]="value" />
    </nz-input-group>
    <nz-input-group nzAddOnBefore="Precision">
      <nz-input-number [(ngModel)]="precision" nzMin="0" nzMax="292"></nz-input-number>
    </nz-input-group>
  `,
})
export class DemoComponent {
  value = 10000.345;
  precision = 2;
}
```
