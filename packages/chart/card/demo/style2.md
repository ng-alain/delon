---
order: 0
title:
  zh-CN: 风格二
  en-US: Style 2
---

风格二用法。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <g2-card [title]="'移动指标'" [bordered]="true" [total]="'¥ 126,560.00'" footer="日访问量 12,423"
      [avatar]="avatar" [action]="action">
      <ng-template #avatar><img style="width:56px; height: 56px" src="./assets/img/logo-color.svg"/></ng-template>
      <ng-template #action>
        <nz-tooltip [nzTitle]="'指标说明'">
          <i nz-tooltip nz-icon nzType="info-circle"></i>
        </nz-tooltip>
      </ng-template>
    </g2-card>
  `
})
export class DemoComponent {
}
```
