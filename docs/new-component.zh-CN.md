---
order: 20
title:
  en-US: New Component
  zh-CN: 新增业务组件
type: Dev
---

对于一些可能被多处引用的功能模块，建议提炼成业务组件统一管理。这些组件一般有以下特征：

- 只负责一块相对独立，稳定的功能；
- 没有单独的路由配置；
- 可能是纯静态的，仅受父组件（通常是一个页面）传递的参数控制。

下面以一个简单的静态组件为例进行介绍。假设你的应用中经常需要展现图片，这些图片宽度固定，有一个灰色的背景和一定的内边距，有文字介绍，就像下图这样：

![](https://gw.alipayobjects.com/zos/rmsportal/vcRltFiKfHBHFrUcsTtW.png | width=400)

你可以用一个组件来实现这一功能，它有默认的样式，同时可以接收父组件传递的参数进行展示。

## 新建文件

在 `src/app/shared/components` 下新建一个以组件名命名的文件夹，命名尽量体现组件的功能，这里就叫 `image-wrapper`。在此文件夹下新增 ts 文件、样式文件（如果需要）及组件API说明，命名为 `index.ts`、`index.less`和`README.md`。

> 在使用组件时，默认会在 `index.ts` 中寻找 export 的对象，如果你的组件比较复杂，可以分为多个文件，最后在 `index.ts` 中统一 export，就像这样：

> ```ts
> // main.component.ts
> export class MainComponent {}
>
> // sub.component.ts
> export class SubComponent {}
>
> // index.ts
> export MainComponent from './main.component';
> export SubComponent from './sub.component';
> ```

你的代码大概是这个样子：

```ts
// index.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-wrapper',
  template: `
    <div [ngStyle]="style">
      <img class="img" [src]="src" [alt]="desc" />
      @if (desc) {
        <div class="desc">{{ desc }}</div>
      }
    </div>
  `,
  styleUrls: [ './index.less' ]
})
export class ImageWrapperComponent {
  @Input() style: { [key: string]: string };
  @Input() src: string;
  @Input() desc: string;
}
```

```less
// index.less
:host {
  width: 400px;
  margin: 0 auto;
  padding: 0 20px 8px;
  text-align: center;
  background: #f2f4f5;

  ::ng-deep {
    .img {
      max-width: calc(100% - 32px);
      margin: 2.4em 1em;
      vertical-align: middle;
      box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
    }
  }
}
```

到这儿组件就建好了，了解更多关于[组件样式](/theme/component-styles)的开发。

## 注册

组件创建好后，需要将组件导入 `SharedModule` 中，这样所有子模块都可以使用到该组件。

```ts
// shared.module.ts
import { ImageWrapperComponent } from './image-wrapper';
const COMPONENTS = [
  ImageWrapperComponent
];
```

## 使用

在要使用这个组件的地方，按照组件定义的 API 传入参数，直接使用就好：

```html
<image-wrapper
  src="https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png"
  desc="示意图"></image-wrapper>
```
