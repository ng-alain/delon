---
type: Layout
title: global-footer
subtitle: 全局页脚
cols: 1
module: import { GlobalFooterModule } from '@delon/abc/global-footer';
---

页脚属于全局导航的一部分，作为对顶部导航的补充，通过传递数据控制展示内容。

## API

### global-footer

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[links]` | 链接数据 | `GlobalFooterLink` | - |
| `[copyright]` | 版权信息 | `TemplateRef` | - |

### global-footer-item

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `ng-content` | 标题 | `string` | - |
| `[href]` | 路由链接 | `string` | - |
| `[blankTarget]` | 是否打开新窗口 | `boolean` | `false` |

### GlobalFooterLink

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[title]` | 标题 | `string` | - |
| `[href]` | 路由链接 | `string` | - |
| `[blankTarget]` | 是否打开新窗口 | `boolean` | `false` |

---

## 代码示例

### 演示

基本页脚。

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

### 自定义

使用 `global-footer-item` 自定义图标。

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
