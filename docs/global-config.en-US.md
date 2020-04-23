---
order: 90
title:
  en-US: Global Configuration
  zh-CN: 全局配置项
type: Dev
---

We add support of **global configuration** to many components. You can define the default behavior of the component through global configuration, thus reducing the code that needs to be written in the template, and support changing global config at runtime.

## How to Use?

If you want to provide default configurations to some components, you should provide an object that implements the interface **AlainConfig** with the injection token **ALAIN_CONFIG**, in the root module (in another word, to the root injector). Like this:

```typescript
// global-config.module.ts
import { AlainConfig, ALAIN_CONFIG } from '@delon/theme';

const alainConfig: AlainConfig = {
  st: { ps: 3 },
};

@NgModule({
  providers: [
    { provide: ALAIN_CONFIG, useValue: alainConfig },
  ],
})
export class DelonModule {}
```

These global configuration would be injected into a service named `AlainConfigService` and gets stored.

## About NG-ZORRO

Please refer to NG-ZORRO Website [Documentation](https://ng.ant.design/docs/global-config/en).