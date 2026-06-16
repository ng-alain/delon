---
type: G2
title: number-info
subtitle: 数据文本
cols: 2
module: import { NumberInfoModule } from '@delon/chart/number-info';
---

常用在数据卡片中，用于突出展示某个业务数据。

## API

### number-info

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[title]` | 标题 | `TemplateRef<void>` | - |
| `[subTitle]` | 子标题 | `TemplateRef<void>` | - |
| `[total]` | 总量 | `string, number` | - |
| `[suffix]` | 总量后缀 | `string` | - |
| `[subTotal]` | 子总量 | `string, number` | - |
| `[status]` | 增加状态 | `'up','down'` | - |
| `[theme]` | 状态样式 | `'light','default'` | `'light'` |
| `[gap]` | 设置数字和描述直接的间距（像素） | `number` | 8 |

---

## 代码示例

### 基本

各种数据文案的展现方式。

```typescript
import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'chart-number-info-basic',
  template: ` <number-info subTitle="本周访问" total="12,321" subTotal="17.1" status="up" /> `,
  imports: [NumberInfoModule]
})
export class ChartNumberInfoBasic {}
```

### 主题

暗系。

```typescript
import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'chart-number-info-theme',
  template: ` <number-info subTitle="本周访问" total="12,321" subTotal="17.1" status="down" theme="default" /> `,
  imports: [NumberInfoModule]
})
export class ChartNumberInfoTheme {}
```

### 多列

多个`number-info`组件在一起时增加分隔符。

```typescript
import { Component } from '@angular/core';

import { NumberInfoModule } from '@delon/chart/number-info';

@Component({
  selector: 'chart-number-info-multiple',
  template: `
    <number-info subTitle="今日访问" total="12,321" />
    <number-info subTitle="本周访问" total="12,32100" />
    <number-info subTitle="本月访问" total="12,32100000" />
  `,
  imports: [NumberInfoModule]
})
export class ChartNumberInfoMultiple {}
```
