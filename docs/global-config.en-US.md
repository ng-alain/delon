---
order: 90
title:
  en-US: Global Configuration
  zh-CN: 全局配置项
type: Dev
---

We add support of **global configuration** to many components. You can define the default behavior of the component through global configuration, thus reducing the code that needs to be written in the template, and support changing global config at runtime.

## How to Use?

If you want to provide default configurations to some components, please use `provideAlainConfig` function. object providing implements interface `AlainConfig` For example:

```typescript
// global-config.module.ts
import { AlainConfig } from '@delon/util/config';

const alainConfig: AlainConfig = {
  st: { ps: 3 },
};

@NgModule({
  providers: [
    provideAlainConfig(alainConfig)
  ],
})
export class GlobalConfigModule {}
```

These global configuration would be injected into a service named `AlainConfigService` and gets stored.

## About NG-ZORRO

Please refer to NG-ZORRO Website [Documentation](https://ng.ant.design/docs/global-config/en).
