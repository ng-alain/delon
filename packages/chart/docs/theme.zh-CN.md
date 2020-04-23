---
order: 2
title: Configure chart theme
type: Theme
---

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