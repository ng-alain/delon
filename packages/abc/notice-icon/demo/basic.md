---
order: 1
title: 通知图标
---

通常用在导航工具栏上。

```ts
import { Component } from '@angular/core';

import { NoticeIconModule } from '@delon/abc/notice-icon';

@Component({
  selector: 'app-demo',
  template: ` <notice-icon count="5" /> `,
  standalone: true,
  imports: [NoticeIconModule]
})
export class DemoComponent {}
```
