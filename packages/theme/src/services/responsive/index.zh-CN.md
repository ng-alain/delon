---
type: Service
order: 5
title: ResponsiveService
subtitle: 响应式服务
---

更友好的使用响应式规则，将原 `xs`、`sm` 等属性简化成 `col` 栏，默认响应式规则：

| `col` | `<576px` | `≥576px` | `≥768px` | `≥992px` | `≥1200px` | `≥1600px` |
| ----- | -------- | -------- | -------- | -------- | --------- | --------- |
| `1`   | 1        | 1        | 1        | 1        | 1         | 1         |
| `2`   | 1        | 2        | 2        | 2        | 2         | 2         |
| `3`   | 1        | 2        | 3        | 3        | 3         | 3         |
| `4`   | 1        | 2        | 3        | 4        | 4         | 4         |
| `5`   | 1        | 2        | 3        | 4        | 6         | 6         |
| `6`   | 1        | 2        | 3        | 4        | 6         | 12        |

为了更好的开发响应式查看、编辑页，这种规则将默认将运用在 `sg`、`sv`、`se` 等组件中。你也可以利用 `ResponsiveConfig` 来改写默认规则。

## ResponsiveConfig

通用配置项，例如统一对 `ResponsiveService` 设置响应式规则。

```ts
import { AlainThemeConfig } from '@delon/theme';
export function fnAlainThemeConfig(): AlainThemeConfig {
  return Object.assign(new AlainThemeConfig(), <AlainThemeConfig>{
    responsive: <ResponsiveConfig>{
      rules: {
        1: { xs: 24 },
        2: { xs: 24, sm: 12 },
        3: { xs: 24, sm: 12, md: 8 },
        4: { xs: 24, sm: 12, md: 8, lg: 6 },
        5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
        6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 },
      }
    },
  });
}

@NgModule({})
export class DelonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonModule,
      providers: [
        { provide: AlainThemeConfig, useFactory: fnAlainThemeConfig },
      ],
    };
  }
}
```
