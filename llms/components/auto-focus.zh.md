---
type: Other
title: auto-focus
subtitle: 自动获得焦点
description: 组件渲染后自动获得焦点
cols: 1
module: import { AutoFocusModule } from '@delon/abc/auto-focus';
---

允许在HTML元素出现后立即对其进行设置焦点，默认情况下会对 `input`、`textarea` 带有 `[autofocus="autofocus"]` 生效。

## API

### [auto-focus]

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[enabled]` | 是否启用 | `boolean` | `true` |
| `[delay]` | 延迟时长（单位：毫秒） | `number` | `25` |
| `(focus)` | 获得焦点回调 | `void` | `-` |

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, signal } from '@angular/core';

import { AutoFocusDirective } from '@delon/abc/auto-focus';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-auto-focus-simple',
  template: `
    <button nz-button (click)="showInput.set(!showInput())">Toggle Input</button>
    @if (showInput()) {
      <div class="mt-md">
        <input nz-input auto-focus />
      </div>
    }
  `,
  imports: [NzButtonModule, NzInputModule, AutoFocusDirective]
})
export class ComponentsAutoFocusSimple {
  showInput = signal(false);
}
```
