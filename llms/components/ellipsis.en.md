---
type: Layout
title: ellipsis
subtitle: Ellipsis
cols: 1
module: import { EllipsisModule } from '@delon/abc/ellipsis';
---

When the text is too long, the Ellipsis automatically shortens it according to its length or the maximum number of lines.

## API

### ellipsis

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[tooltip]` | tooltip for showing the full text content when hovering over | `boolean` | `false` |
| `[length]` | maximum number of characters in the text before being truncated | `number` | - |
| `[lines]` | maximum number of rows in the text before being truncated | `number` | - |
| `[fullWidthRecognition]` | whether consider full-width character length as 2 when calculate string length | `boolean` | `false` |
| `[tail]` | specify overflow tail | `string` | `'...'` |

---

## Examples

### Truncate according to the number of character

`length` attribute specifies the maximum length where the text will automatically be truncated when exceeded.

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

### Truncate according to the number of rows

`lines` attribute specifies the maximum number of rows where the text will automatically be truncated when exceeded. In this mode, all `ng-content` will be converted to plain text.
Also note that, in this mode, the outer container needs to have a specified width (or set its own width).

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
