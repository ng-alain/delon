---
order: 0
title: 演示
browser: 400
---

基本页脚。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'components-global-footer-basic',
  template: `
  <div style="background:#f5f5f5; height: 100%;">
    <div style="height: 280px;"></div>
    <global-footer [links]="links">
      Copyright<i nz-icon type="copyright" class="mx-sm"></i>2019<a href="//github.com/cipchk" target="_blank" class="mx-sm">卡色</a>出品
    </global-footer>
  </div>
  `,
  styles: [ `:host { display: block; }` ]
})
export class DemoComponent {
  links = [
    {
      title: '帮助',
      href: 'https://ng-alain.com/',
      blankTarget: true
    },
    {
      title: 'Github',
      href: 'https://github.com/ng-alain',
      blankTarget: true
    },
    {
      title: '预览',
      href: 'https://ng-alain.github.io/ng-alain/',
      blankTarget: true
    }
  ];
}
```
