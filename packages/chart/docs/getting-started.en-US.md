---
order: 1
title: Getting Started
type: Documents
---

Chart provides the well-designed abstract chart components based on the [G2](https://antv.alipay.com/zh-cn/g2/3.x/index.html). These components provide the ability to use with complex mixed view or just use along for common business usage.

## Usage

### G2 class library loading

By default, the class library CDN address has been specified in [Global Configuration](/docs/global-config):

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  chart: { 
    // The following is the default configuration. If the project cannot be accessed from the Internet, you can directly use the `./assets***` path for the dependent package according to the `angular.json` configuration
    libs: [
      'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.4/dist/g2.min.js',
      'https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.7/dist/data-set.js',
    ],
  },
};

export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: ALAIN_CONFIG, useValue: alainConfig }
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
        { provide: ALAIN_CONFIG, useValue: alainConfig }
      ]
    };
  }
}
```