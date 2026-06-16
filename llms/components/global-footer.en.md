---
type: Layout
title: global-footer
subtitle: Global footer
cols: 1
module: import { GlobalFooterModule } from '@delon/abc/global-footer';
---

The footer is part of the global navigation as a supplement to the top navigation.

## API

### global-footer

| Property | Description | Type | Default |
|----|----|----|-----|
| `[links]` | Link data | `GlobalFooterLink` | - |
| `[copyright]` | Copyright Information | `TemplateRef` | - |

### global-footer-item

| Property | Description | Type | Default |
|----|----|----|-----|
| `ng-content` | Title | `string` | - |
| `[href]` | Routing link | `string` | - |
| `[blankTarget]` | Whether to open a new window | `boolean` | `false` |

### GlobalFooterLink

| Property | Description | Type | Default |
|----|----|----|-----|
| `[title]` | Title | `string` | - |
| `[href]` | Routing link | `string` | - |
| `[blankTarget]` | Whether to open a new window | `boolean` | `false` |

---

## Examples

### undefined

```typescript
import { Component } from '@angular/core';

import { GlobalFooterComponent, GlobalFooterLink } from '@delon/abc/global-footer';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'components-global-footer-basic',
  template: `
    <div style="height: 280px;"></div>
    <global-footer [links]="links">
      Copyright<nz-icon nzType="copyright" class="mx-sm" />
      2025
      <a href="//github.com/cipchk" target="_blank" class="mx-sm">卡色</a>出品
    </global-footer>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  imports: [GlobalFooterComponent, NzIconModule]
})
export class ComponentsGlobalFooterBasic {
  links: GlobalFooterLink[] = [
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
      href: 'https://ng-alain.surge.sh/',
      blankTarget: true
    }
  ];
}
```

### undefined

```typescript
import { Component } from '@angular/core';

import { GlobalFooterModule } from '@delon/abc/global-footer';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'components-global-footer-custom',
  template: `
    <div style="height: 280px;"></div>
    <global-footer>
      <global-footer-item href="https://ng-alain.com/" blankTarget>帮助</global-footer-item>
      <global-footer-item href="https://github.com/ng-alain" blankTarget>
        <nz-icon nzType="github" />
      </global-footer-item>
      <global-footer-item href="https://ng-alain.surge.sh/" blankTarget>预览</global-footer-item>
      Copyright<nz-icon nzType="copyright" class="mx-sm" />
      2025
      <a href="//github.com/cipchk" target="_blank" class="mx-sm">卡色</a>出品
    </global-footer>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  imports: [GlobalFooterModule, NzIconModule]
})
export class ComponentsGlobalFooterCustom {}
```
