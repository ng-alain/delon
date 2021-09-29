---
order: 0
title: 自定义
browser: 400
---

使用 `global-footer-item` 自定义图标。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'components-global-footer-basic',
  template: `
    <div style="height: 280px;"></div>
    <global-footer>
      <global-footer-item href="https://ng-alain.com/" blankTarget>帮助</global-footer-item>
      <global-footer-item href="https://github.com/ng-alain" blankTarget>
        <i nz-icon nzType="github"></i>
      </global-footer-item>
      <global-footer-item href="https://ng-alain.surge.sh/" blankTarget>预览</global-footer-item>
      Copyright<i nz-icon nzType="copyright" class="mx-sm"></i>2019<a href="//github.com/cipchk" target="_blank" class="mx-sm">卡色</a>出品
    </global-footer>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class DemoComponent {}
```
