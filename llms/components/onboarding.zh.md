---
type: Basic
title: onboarding
subtitle: 用户引导流程
order: 7
module: import { OnboardingModule } from '@delon/abc/onboarding';
---

用户引导流程，是帮助用户更好的理解和使用产品。

## API

### OnboardingService

组件只支持使用 `OnboardingService` 服务来构建。

| 成员 | 说明 |
|----|----|
| `start(data: OnboardingData)` | 开启新的用户引导流程 |
| `next()` | 下一项 |
| `prev()` | 上一项 |
| `done()` | 完成 |

### OnboardingData

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[key]` | 存储标识Key；默认 `localStorage` 本地存储，允许使用 `ONBOARDING_STORE_TOKEN` 变更存储方式 | `string` | - |
| `[keyVersion]` | 当前版本 | `unknown` | - |
| `[items]` | 引导项列表 | `OnboardingItem[]` | `[]` |
| `[mask]` | 是否展示遮罩 | `boolean` | `true` |
| `[maskClosable]` | 点击蒙层是否允许关闭 | `boolean` | `true` |
| `[showTotal]` | 是否显示总量 | `boolean` | `false` |

### OnboardingItem

| 成员 | 说明 | 类型 | 默认值 | 
|----|----|----|-----|
| `[selectors]` | CSS选项项，用于查找目标元素 | `string` | - |
| `[position]` | 引导面板显示位置 | `top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom` | `bottomLeft` |
| `[className]` | 引导面板类名 | `string` | - |
| `[width]` | 引导面板宽度 | `number` | - |
| `[title]` | 引导面板标题 | `string, TemplateRef<void>` | - |
| `[content]` | 引导面板内容 | `string, SafeHtml, TemplateRef<void>` | - |
| `[skip]` | 跳过按钮文本，`null` 表示强击不显示 | `string, TemplateRef<void>, null` | `跳过` |
| `[prev]` | 跳过按钮文本，`null` 表示强击不显示 | `string, TemplateRef<void>, null` | `上一项` |
| `[next]` | 跳过按钮文本，`null` 表示强击不显示 | `string, TemplateRef<void>, null` | `下一项` |
| `[done]` | 跳过按钮文本，`null` 表示强击不显示 | `string, TemplateRef<void>, null` | `完成` |
| `[url]` | 目标路由页 | `string` | - |
| `[before]` | 当触发 `next` 时表示进入前回调，`number` 表示延迟 | `Observable<any>, number` | - |
| `[after]` | 当触发 `prev` 时表示进入前回调，`number` 表示延迟 | `Observable<any>, number` | - |

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, inject } from '@angular/core';

import { OnboardingConfig, OnboardingService } from '@delon/abc/onboarding';
import { _HttpClient } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-onboarding-basic',
  template: `
    <div class="mb-md pb-md border-bottom-1">
      <button class="test1-1" nz-button nzType="primary" (click)="handleClick()">First Button</button>
      <button class="test1-2" nz-button nzType="link">Second Button</button>
      <button class="test1-3" nz-button nzType="dashed">Third Button</button>
    </div>
    <button nz-button (click)="start()">Start</button>
    <button nz-button (click)="startOnce()">Start Once (Set 'key')</button>
    <button nz-button (click)="viaHttp()">Start Via Http</button>
    <a
      href="https://github.com/ng-alain/delon/blob/master/src/assets/schema/onboarding.json"
      target="_blank"
      class="ml-md"
    >
      onboarding.json
    </a>
  `,
  imports: [NzButtonModule]
})
export class ComponentsOnboardingBasic {
  private readonly msg = inject(NzMessageService);
  private readonly srv = inject(OnboardingService);
  private readonly http = inject(_HttpClient);

  private def: OnboardingConfig = {
    items: [
      {
        selectors: '.test1-1',
        content: 'The user guidance is to help users better understand and use the product',
        width: 300
      },
      {
        selectors: '.test1-2',
        title: 'Test2',
        content: 'The user guidance is to help users better understand and use the product'
      },
      {
        selectors: '.test1-3',
        title: 'Test3',
        content: 'The user guidance is to help users better understand and use the product'
      }
    ]
  };

  handleClick(): void {
    this.msg.info(`click`);
  }

  start(): void {
    this.srv.start({ ...this.def });
  }

  viaHttp(): void {
    this.http.get(`./assets/schema/onboarding.json`).subscribe(res => {
      console.log(res);
      this.srv.start(res);
    });
  }

  startOnce(): void {
    this.srv.start({ ...this.def, key: 'obs-once' });
  }
}
```

### 多页

使用 `url` 变更路由地址，建议配合 `before` 的延迟来处理目标页是否完成，否则可能会遇到无法获取目标元素。

```typescript
import { Component, inject } from '@angular/core';

import { OnboardingService } from '@delon/abc/onboarding';
import { _HttpClient } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-onboarding-multiple-pages',
  template: `
    <div class="mb-md pb-md border-bottom-1">
      <button class="test2-1" nz-button nzType="primary">First Button</button>
      <button class="test2-3" nz-button nzType="dashed">Third Button</button>
    </div>
    <button nz-button (click)="start()">Start</button>
  `,
  imports: [NzButtonModule]
})
export class ComponentsOnboardingMultiplePages {
  private readonly srv = inject(OnboardingService);

  start(): void {
    this.srv.start({
      items: [
        {
          selectors: '.test2-1',
          content: 'The user guidance is to help users better understand and use the product',
          next: `Go to home`,
          width: 300,
          url: '/components/onboarding'
        },
        {
          selectors: '.page-banner__slogan',
          content:
            'ng-alain is an MIT-licensed open source project. In order to achieve better and sustainable development of the project, we expect to gain more backers. You can support us in any of the following ways, Or purchasing our <a href="https://e.ng-alain.com/" target="_blank">business theme</a>',
          width: 300,
          url: '/',
          before: 200
        },
        {
          selectors: '.test2-3',
          title: 'Test3',
          content: 'The user guidance is to help users better understand and use the product',
          url: '/components/onboarding'
        }
      ]
    });
  }
}
```
