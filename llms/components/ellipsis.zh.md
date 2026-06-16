---
type: Layout
title: ellipsis
subtitle: 文本自动省略号
cols: 1
module: import { EllipsisModule } from '@delon/abc/ellipsis';
---

文本过长自动处理省略号，支持按照文本长度和最大行数两种方式截取。

## API

### ellipsis

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[tooltip]` | 移动到文本展示完整内容的提示 | `boolean` | `false` |
| `[length]` | 在按照长度截取下的文本最大字符数，超过则截取省略 | `number` | - |
| `[lines]` | 在按照行数截取下最大的行数，超过则截取省略 | `number` | - |
| `[fullWidthRecognition]` | 是否将全角字符的长度视为2来计算字符串长度 | `boolean` | `false` |
| `[tail]` | 指定溢出尾巴 | `string` | `'...'` |

---

## 代码示例

### 按照字符数省略

通过设置 `length` 属性指定文本最长长度，如果超过这个长度会自动截取。

```typescript
import { Component } from '@angular/core';

import { EllipsisComponent } from '@delon/abc/ellipsis';

@Component({
  selector: 'components-ellipsis-number',
  template: `
    <ellipsis length="100">{{ article }}</ellipsis>
    <h4 class="mt-lg">Show Tooltip</h4>
    <ellipsis length="100" tooltip>{{ article }}</ellipsis>
  `,
  imports: [EllipsisComponent]
})
export class ComponentsEllipsisNumber {
  article =
    'There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.';
}
```

### 按照行数省略

通过设置 `lines` 属性指定最大行数，如果超过这个行数的文本会自动截取。但是在这种模式下所有 `ng-content` 将会被转换成纯文本。
并且注意在这种模式下，外容器需要有指定的宽度（或设置自身宽度）。

```typescript
import { Component } from '@angular/core';

import { EllipsisComponent } from '@delon/abc/ellipsis';

@Component({
  selector: 'components-ellipsis-line',
  template: `
    <ellipsis lines="3" tooltip style="width: 200px">
      <p>
        There were injuries alleged in three <a href="#cover">cases in 2015</a>, and a fourth incident in September,
        according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a
        voluntary recall.
      </p>
    </ellipsis>
  `,
  imports: [EllipsisComponent]
})
export class ComponentsEllipsisLine {}
```
