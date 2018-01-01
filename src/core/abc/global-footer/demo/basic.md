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
            <ng-template #copyright>
                Copyright<nz-icon nzType="copyright" class="mx-sm"></nz-icon>2017<a href="//github.com/cipchk" target="_blank" class="mx-sm">卡色</a>出品
            </ng-template>
        </global-footer>
    </div>
    `,
    styles: [ `:host { display: block; }` ]
})
export class ComponentsGlobalFooterBasicComponent {
    links = [
        {
            title: '帮助',
            href: ''
        },
        {
            title: '隐私',
            href: ''
        },
        {
            title: '条款',
            href: ''
        }
    ];
}
```
