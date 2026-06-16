---
type: Other
title: auto-focus
subtitle: Auto focus
description: Automatically focuses after the component is rendered
cols: 1
module: import { AutoFocusModule } from '@delon/abc/auto-focus';
---

Allows to focus HTML-element right after its appearance, By default, it will take effect for `input` and `textarea` with `[autofocus="autofocus"]`.

## API

### [auto-focus]

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[enabled]` | Whether enabled of auto focus | `boolean` | `true` |
| `[delay]` | Delay of the focus (unit: ms) | `number` | `25` |
| `(focus)` | Get focus callback | `void` | `-` |

---

## Examples

### Basic Usage

Simplest of usage.

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
