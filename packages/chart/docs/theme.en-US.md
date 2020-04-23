---
order: 2
title: 配置图表主题
type: Theme
---

对所有 G2 进行配置图表主题，但只提供接口，有关配置图表主题参数，请参考[G2官网](https://g2.antv.vision/zh/docs/manual/tutorial/theme)。

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