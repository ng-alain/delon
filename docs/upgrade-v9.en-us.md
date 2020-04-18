---
order: 11
type: Basic
title: Upgrade to version 9.0
hot: true
---

This description refers to the description of the upgrade from `8.9.x' to `9'; NG-ALAIN still needs to be upgraded from three parts.

- There are no disruptive changes to Angula, and you can check upgrades one by one according to [Angular Update Guide | 8.0 -> 9.0 for Basic Apps](https://update.angular.io/#8.0:9.0)
- In the NG-ZORRO section, there are no disruptive changes this time either, just the removal of expired attributes that were warned at `8.x`, the vast majority of items can be upgraded directly by `ng update ng-zorro-antd`, for more information on possible problems go to [NG-ZORRO v9 Upgrade Guide] (https://github.com/NG-ZORRO/ng-zorro-antd/issues/5035).
- NG-ALAIN does not have changes to the `@delon/*` series, but instead is subject to the NG-ZORRO section with less detail to deal with; other than that, it is mainly optimized for code style, G2, and forcing the use of `date-fns` as the preferred date operation.

## Major projects

### 1, date-fns

`date-fns` Upgrade to `2.x` All import names have changed.

```diff
- import { format } from 'date-fns';
+ import format from 'date-fns/format';
```

> The core factor is that Angular's own DatePipe is not implemented according to the ISO standard algorithm, so date-fns will be forced to format the date by default, see [How to use date-fns for date formatting](https://ng.ant.design/docs/i18n/zh#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-date-fns-%E8%BF%9B%E8%A1%8C%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F%E5%8C%96) for details.

**Add default language**

[full reference code] (https://github.com/ng-alain/ng-alain/blob/master/src/app/app.module.ts#L26).

```diff
+ { provide: NZ_DATE_LOCALE, useValue: LANG.date },
```

If the project is using internationalization, also be sure to go to [i18n.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/i18n/i18n.service.ts#L25) to import the date.

### 2, @delon/abc directory structure

Restructuring part of the directory structure will cause the import path to change as well.

- `@delon/abc/table` => `@delon/abc/st`
- `@delon/abc/view` => `@delon/abc/sv`
- `@delon/abc/grid` => `@delon/abc/sg`
- `@delon/abc/edit` => `@delon/abc/se`

### 3. Remove.

| Database | Original | Current
--- --- --- --- --- --- --- --- --- ---
| `@delon/util` | `*stringTemplateOutlet` | `*nzStringTemplateOutlet` |

### 4, G2

The latest version of G2 fully supports TypeScript, so there is no longer a need to reference full dependency packages in `angular.json`.

**angular.json**

```diff
- "node_modules/@antv/g2/build/g2.js",
+ "node_modules/@antv/g2/dist/g2.min.js",
```


**typings.d.ts**

```diff
- // G2
- declare var G2: any;
- declare var DataSet: any;
- declare var Slider: any;
```

**Change in use**


```ts
import { Chart } from '@antv/g2';
const chart = new Chart();
```

If you have a custom G2 section, please refer to [G2 4.0 Upgrade Guide] (https://g2.antv.vision/zh/docs/manual/upgrade).

## Optional upgrade

### 1, tslint

[import-blacklist](https://github.com/ng-alain/ng-alain/blob/master/tslint.json#L42-L44) Added "ng-zorro-antd", "@delon/abc", "@delon/chart"` to force only secondary imports.

### 2. Shared modules

Add [shared-zorro.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/shared-zorro.module.ts) and [shared-delon.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/shared-delon.module.ts) secondary import module files, respectively, and reference them in [shared.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/shared.module.ts#L35), which effectively reduces the size of the possible envelope.
