---
type: example
---

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <p class="mb-md">
      {{<span> {{ value }} | cny </span>}} = {{ value | cny }}
    </p>
    <nz-input-group nzAddOnBefore="Value">
      <input type="text" nz-input [(ngModel)]="value" />
    </nz-input-group>
  `,
})
export class DemoComponent {
  value = 100;
}
```
