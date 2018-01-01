---
order: 0
title: Basic
---

基本描述列表。

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
    <desc-list size="large" title="title">
      <desc-list-item term="Firefox">
        A free, open source, cross-platform,
        graphical web browser developed by the
        Mozilla Corporation and hundreds of
        volunteers.
      </desc-list-item>
      <desc-list-item term="Firefox">
        A free, open source, cross-platform,
        graphical web browser developed by the
        Mozilla Corporation and hundreds of
        volunteers.
      </desc-list-item>
      <desc-list-item term="Firefox">
        A free, open source, cross-platform,
        graphical web browser developed by the
        Mozilla Corporation and hundreds of
        volunteers.
      </desc-list-item>
    </desc-list>`
})
export class DemoComponent {
}
```
