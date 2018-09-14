---
order: 0
title:
  zh-CN: 风格三
  en-US: Style 3
---

风格三用法。

```ts
import { Component } from '@angular/core';
import { yuan } from '@delon/util';

@Component({
  selector: 'app-demo',
  template: `
  <g2-card [title]="'移动指标'" [bordered]="true" [total]="yuan(126560)"
    [avatar]="avatar" [action]="action">
    <ng-template #avatar><img style="width:56px; height: 56px" src="./assets/img/logo-color.svg"/></ng-template>
    <ng-template #action>
      <nz-tooltip [nzTitle]="'指标说明'">
        <i nz-tooltip class="anticon anticon-info-circle-o"></i>
      </nz-tooltip>
    </ng-template>
  </g2-card>
  `
})
export class DemoComponent {
  yuan = yuan;
}
```
