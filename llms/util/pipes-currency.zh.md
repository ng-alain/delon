---
title: currency
subtitle: 货币管道
type: Pipes
module: import { CurrencyPipeModule } from '@delon/util/pipes/currency';
---

> 可以通过[全局配置](/docs/global-config)覆盖 `startingUnit`、`megaUnit`、`precision`、`ingoreZeroPrecision` 等参数。

## price

用逗号将数字格式化为千位分隔符。

[comment]: <demo(currency-price)>

## mega

大数据格式化。

[comment]: <demo(currency-mega)>

## cny

转化成人民币表示法。

[comment]: <demo(currency-cny)>

---

## 代码示例

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
