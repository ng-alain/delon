---
order: 0
title:
  zh-CN: 风格三
  en-US: Style 3
---

风格三用法。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <g2-card [title]="'移动指标'" [bordered]="true" [total]="'¥ 126,560.00'"
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
