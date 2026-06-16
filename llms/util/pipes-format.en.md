---
title: format
subtitle: Mask
type: Pipes
module: import { FormatPipeModule } from '@delon/util/pipes/format';
---

## mask

Format mask.

[comment]: <demo(format-mask)>

---

## Examples

### undefined

```typescript
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormatMaskPipe } from '@delon/util';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'util-pipes-format-format-mask',
  template: `
    <p class="mb-md">
      &#123;&#123;<span> {{ value }} | mask: {{ maskStr | json }} </span>&#125;&#125; = {{ value | mask: maskStr }}
    </p>
    <nz-input-wrapper nzAddonBefore="Value" class="mb-md">
      <input type="text" nz-input [(ngModel)]="value" />
    </nz-input-wrapper>
    <nz-input-wrapper nzAddonBefore="Mask">
      <input type="text" nz-input [(ngModel)]="maskStr" />
    </nz-input-wrapper>
  `,
  imports: [JsonPipe, FormatMaskPipe, NzInputModule, FormsModule]
})
export class UtilPipesFormatFormatMask {
  value = '123';
  maskStr = '(###)';
}
```
