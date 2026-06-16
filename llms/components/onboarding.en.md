---
type: Basic
title: onboarding
subtitle: Onboarding
order: 7
module: import { OnboardingModule } from '@delon/abc/onboarding';
---

The user guidance is to help users better understand and use the product.

## API

### OnboardingService

The components only support the use of `OnboardingService` service to build.

| Name | Description |
|------|-------------|
| `start(data: OnboardingData)` | Start a new user guidance |
| `next()` | Next |
| `prev()` | Prev |
| `done()` | Done |

### OnboardingData

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[key]` | Storage identification Key, The default is `localStorage` local storage, allowing the use of `ONBOARDING_STORE_TOKEN` to change the storage method | `string` | - |
| `[keyVersion]` | Current version | `unknown` | - |
| `[items]` | Onboarding items | `OnboardingItem[]` | `[]` |
| `[mask]` | Whether to show mask or not | `boolean` | `true` |
| `[maskClosable]` | Clicking on the mask (area outside the onboarding) to close the onboarding or not | `boolean` | `true` |
| `[showTotal]` | Whether to show total | `boolean` | `false` |

### OnboardingItem

| Property | Description | Type | Default | 
|----------|-------------|------|---------|
| `[selectors]` | The CSS selector, which identifies the html element you want to describe | `string` | - |
| `[position]` | Positioning of the selector element, relative to the contents of the children | `top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom` | `bottomLeft` |
| `[className]` | Class name of the panel | `string` | - |
| `[width]` | Width of the panel | `number` | - |
| `[title]` | Headline text of the panel | `string, TemplateRef<void>` | - |
| `[content]` | Detail text of the panel | `string, SafeHtml, TemplateRef<void>` | - | 
| `[skip]` | Skip button of the panel, `null` Don't show | `string, TemplateRef<void>, null` | `Skip` |
| `[prev]` | Prev button of the panel, `null` Don't show | `string, TemplateRef<void>, null` | `Prev` |
| `[next]` | Next button of the panel, `null` Don't show | `string, TemplateRef<void>, null` | `Next` |
| `[done]` | Done button of the panel, `null` Don't show | `string, TemplateRef<void>, null` | `Done` |
| `[url]` | Target router url | `string` | - |
| `[before]` | Callback before entering, triggered when call `next` operates, `number` indicate delay | `Observable<any>, number` | - |
| `[after]` | Callback after entering, triggered when call `prev` operates, `number` indicate delay | `Observable<any>, number` | - |

---

## Examples

### Basic Usage

Simplest of usage.

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

### Multiple Pages

Use `url` to change the routing, it's recommended to use `before` to delay, otherwise the target element may not be obtained.

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
