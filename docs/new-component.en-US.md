---
order: 20
title:
  en-US: New Component
  zh-CN: 新增业务组件
type: Dev
---

For some functional modules that may be referenced in multiple places, it is recommended to refine the management into unified management of business components. These components generally have the following characteristics:

- Only responsible for a relatively independent, stable function;
- no separate routing configuration;
- May be purely static, controlled only by parameters passed by the parent component (usually a page).

Let's take a simple static component as an example. Suppose your app often needs to display images. These images are fixed in width, have a gray background and a certain padding, and have text descriptions, like the following:

![](https://gw.alipayobjects.com/zos/rmsportal/vcRltFiKfHBHFrUcsTtW.png | width=400)

You can do this with a component that has a default style and can receive the parameters passed by the parent component for display.

## Create a new file

Create a new folder named `components` under `src/app/shared`. Create folder called `image-wrapper` and component file. If required add ts files `index.ts` and style files `index.less`. Provide `README.md` for component API descriptions in this folder.

> When using components, the default is to look for the export object in `index.ts`. If your component is more complex, you can split it into multiple files, and finally unify the export in `index.ts`, like this:

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

Your code is probably like this:

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

The components are built here, to learn more about the development of [component styles](/theme/component-styles).

## Register

Once the component is created, you need to import the component into `SharedModule` so that all submodules can use it.

```ts
// shared.module.ts
import { ImageWrapperComponent } from './image-wrapper';
const COMPONENTS = [
  ImageWrapperComponent
];
```

## Use

Where you want to use this component, just follow the component-defined API input parameters and use it directly:

```html
<image-wrapper
  src="https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png"
  desc="schematic-diagram"></image-wrapper>
```
