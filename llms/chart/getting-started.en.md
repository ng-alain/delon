---
order: 1
title: Getting Started
type: Documents
---

Chart provides the well-designed abstract chart components based on the [G2](https://g2.antv.antgroup.com/en/).

## Upgrading from v4 to v5

`@antv/g2` has been upgraded from v4 to **v5** (`^5.4.8`). Component APIs (`[data]`, `[height]`, `[padding]`, `[theme]`, `(ready)`, `(clickItem)`, ...) keep their **names and types** (the only exception is `g2-water-wave`, whose `[height]` is renamed to `[size]`), but rendering is now **asynchronous and spec-driven**:

- **Rendering is async**: `ready` fires on the **first `AFTER_RENDER`** (the first frame is really painted) and **only once**; `loaded` (used by the template to drop the skeleton) is set at the same moment. Subscribe to `(ready)` to get the chart instance:
  ```html
  <g2-bar [data]="data()" (ready)="onReady($event)" (error)="onError($event)" />
  ```
- **Failure is a separate layer from `ready`**: a missing G2 library or a failed render emits **`(error)`** (plus `console.error`); `ready` does not fire and the skeleton stays.
- **`install()` is no longer public**: use the protected `afterCreate(chart)` / `onRendered()` extension points; use `changeData()` for data updates (it goes through the base class' serial queue, so it cannot race the first frame).
- **Interactions**: v4's `active-region` and `drag-move` have no v5 equivalent and degrade to no interaction.
- **tooltip**: `domStyles`/`itemTpl` are gone; a **view-level `tooltip` is not inherited by child marks** — set it at the mark level.
- **Click payload type**: `Event` → `G2Event` (`ev.data?.data` is the datum).
- **`g2-tag-cloud`**: no longer writes `x/y/size/rotate/font` back into the data rows (layout is done by the built-in `wordCloud` mark; `@antv/data-set` has been removed).
- **`g2-water-wave`**: the hand-written v4 canvas is replaced by the v5 [`liquid`](https://g2.antv.antgroup.com/examples/general/Liquid) mark (the center percentage is drawn by G2's built-in text); **`[height]` is renamed to `[size]`** (the side length of the square); `[animate]` now controls **only the enter animation** (the wave motion is built into G2 and always runs) and sizing is handled by `autoFit`.
- **Fixed bar thickness with a transposed coordinate**: with `coordinate.transform: [{ type: 'transpose' }]` the interval's **on-screen thickness is clamped by `style.minWidth`/`maxWidth` (pixels)** while `minHeight` clamps the on-screen width — so v4's `.size(30)` cannot be reproduced with `encode.size` alone; also write `style: { minWidth: 30, maxWidth: 30 }`.
 These components provide the ability to use with complex mixed view or just use along for common business usage.

## Usage

### G2 class library loading

By default, the class library CDN address has been specified in [Global Configuration](/docs/global-config):

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    // The following is the default configuration. If the project cannot be accessed from the Internet, you can directly use the `./assets***` path for the dependent package according to the `angular.json` configuration
    libs: [
      'https://gw.alipayobjects.com/os/lib/antv/g2/5.4.8/dist/g2.min.js',
    ],
  },
};

export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        provideAlainConfig(alainConfig)
      ]
    };
  }
}
```

Of course, you can also directly import the CDN address in `index.html`, for example:

```html
<!-- Introduce online resources, select the g2 version you need and replace the version variable -->
<script src="https://gw.alipayobjects.com/os/lib/antv/g2/{{version}}/dist/g2.min.js"></script>
```

You can also configure the `assets` (About [assets](https://angular.io/guide/workspace-config#assets-configuration) Document) option in `angular.json` to obtain the G2 library from `node_modules`, for example:

```json
"assets": [
  {
    "glob": "**/*",
    "input": "./node_modules/@antv/g2/dist",
    "output": "/@antv/g2/"
  }
]
```

Finally modify the `libs` parameter of the global configuration:

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    libs: ['./assets/@antv/g2/g2.min.js'],
  },
};
```

### Import module

```ts
// shared.module.ts
import { G2BarModule } from '@delon/chart/bar';

@NgModule({
  imports: [ G2BarModule ],
  exports: [ G2BarModule ]
})
```

## Custom G2 components

Use the [g2-chart](/chart/custom) component to better implement custom charts.

## Configure chart theme

Configure the chart theme for all G2, but only provide interfaces. For the configuration chart theme parameters, please refer to [G2 website](https://g2.antv.vision/zh/docs/manual/tutorial/theme).

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { theme: 'dark' },
};

export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        provideAlainConfig(alainConfig)
      ]
    };
  }
}
```