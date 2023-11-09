---
type: example
---

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <p class="mb-md">
      &#123;&#123;<span> {{ value }} | mega </span>&#125;&#125; = {{ value | mega }}
    </p>
    <p class="mb-md">
      &#123;&#123;<span>
        {{ value }} | mega: 大括号 precision: <span>{{ precision }}</span> 大括号 </span
      >&#125;&#125; =
      {{ value | mega: { precision: precision } }}
    </p>
    <nz-input-group nzAddOnBefore="Value" class="mb-md">
      <input type="text" nz-input [(ngModel)]="value" />
    </nz-input-group>
    <nz-input-group nzAddOnBefore="Precision">
      <nz-input-number [(ngModel)]="precision" [nzMin]="0" [nzMax]="292"></nz-input-number>
    </nz-input-group>
  `,
})
export class DemoComponent {
  value = 123456;
  precision = 1;
}
```
