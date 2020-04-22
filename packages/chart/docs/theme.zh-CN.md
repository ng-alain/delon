---
order: 2
title: 配置图表主题
type: Theme
---


```ts
import { ChartConfig } from '@delon/chart/core/config';

export function fnChartConfig(): ChartConfig {
  return {
    theme: 'dark',
  };
}

@NgModule({ })
export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: ChartConfig, useFactory: fnChartConfig }
      ]
    };
  }
}
```