---
type: Service
order: 5
title: ResponsiveService
subtitle: Responsive Service
---

More friendly use responsive rules, the original `xs`, `sm` etc. reduced to `col` property, the default response rule:

| `col` | `<576px` | `≥576px` | `≥768px` | `≥992px` | `≥1200px` | `≥1600px` |
| ----- | -------- | -------- | -------- | -------- | --------- | --------- |
| `1`   | 1        | 1        | 1        | 1        | 1         | 1         |
| `2`   | 1        | 2        | 2        | 2        | 2         | 2         |
| `3`   | 1        | 2        | 3        | 3        | 3         | 3         |
| `4`   | 1        | 2        | 3        | 4        | 4         | 4         |
| `5`   | 1        | 2        | 3        | 4        | 6         | 6         |
| `6`   | 1        | 2        | 3        | 4        | 6         | 12        |

In order to better develop responsives this view or edit pages, the rule will be used by default in `sg`, `sv`, `se` components. You can via `ResponsiveConfig` to override the default rules.

## ResponsiveConfig

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
