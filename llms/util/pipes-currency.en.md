---
title: currency
subtitle: Currency Pipes
type: Pipes
module: import { CurrencyPipeModule } from '@delon/util/pipes/currency';
---

> You can override to set the `startingUnit`, `megaUnit`, `precision`, `ingoreZeroPrecision` through [Global Configuration](/docs/global-config).

## price

Format a number with commas as thousands separators.

[comment]: <demo(currency-price)>

## mega

Large number format filter.

[comment]: <demo(currency-mega)>

## cny

Converted into RMB notation.

[comment]: <demo(currency-cny)>

---

## Examples

### undefined

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CurrencyCNYPipe } from '@delon/util';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'util-pipes-currency-currency-cny',
  template: `
    <p class="mb-md">
      &#123;&#123;<span> {{ value }} | cny </span>&#125;&#125; = {{ value | cny }}
    </p>
    <nz-input-wrapper nzAddonBefore="Value">
      <input type="text" nz-input [(ngModel)]="value" />
    </nz-input-wrapper>
  `,
  imports: [NzInputModule, FormsModule, CurrencyCNYPipe]
})
export class UtilPipesCurrencyCurrencyCny {
  value = 100;
}
```

### undefined

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CurrencyMegaPipe } from '@delon/util';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'util-pipes-currency-currency-mega',
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
    <nz-input-wrapper nzAddonBefore="Value" class="mb-md">
      <input type="text" nz-input [(ngModel)]="value" />
    </nz-input-wrapper>
    <nz-input-wrapper nzAddonBefore="Precision">
      <nz-input-number [(ngModel)]="precision" [nzMin]="0" [nzMax]="292" />
    </nz-input-wrapper>
  `,
  imports: [NzInputModule, NzInputNumberModule, FormsModule, CurrencyMegaPipe]
})
export class UtilPipesCurrencyCurrencyMega {
  value = 123456;
  precision = 1;
}
```

### undefined

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CurrencyPricePipe } from '@delon/util';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'util-pipes-currency-currency-price',
  template: `
    <p class="mb-md">
      &#123;&#123;<span> {{ value }} | price </span>&#125;&#125; = {{ value | price: { precision: precision } }}
    </p>
    <nz-input-wrapper nzAddonBefore="Value" class="mb-md">
      <input type="text" nz-input [(ngModel)]="value" />
    </nz-input-wrapper>
    <nz-input-wrapper nzAddonBefore="Precision">
      <nz-input-number [(ngModel)]="precision" [nzMin]="0" [nzMax]="292" />
    </nz-input-wrapper>
  `,
  imports: [NzInputModule, FormsModule, NzInputNumberModule, CurrencyPricePipe]
})
export class UtilPipesCurrencyCurrencyPrice {
  value = 10000.345;
  precision = 2;
}
```
