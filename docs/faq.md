---
order: 20
title:
  en-US: FAQ
  zh-CN: 常见问题
type: Other
---

提问之前，请先查阅下面的常见问题。

## 如何覆盖 @delon/* 的配置

```ts
// delon.module.ts
import { DelonAuthConfig } from '@delon/auth';
export function delonAuthConfig(): DelonAuthConfig {
    return Object.assign(new DelonAuthConfig(), <DelonAuthConfig>{
        login_url: '/passport/login'
    });
}

@NgModule({})
export class DelonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DelonModule,
            providers: [
                { provide: DelonAuthConfig, useFactory: delonAuthConfig}
            ]
        };
    }
}
```
