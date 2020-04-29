---
order: 11
type: Basic
title: Upgrade to version 9.0
hot: true
---

This description refers to the description of the upgrade from `8.9.x' to `9'; NG-ALAIN still needs to be upgraded from three parts.

- There are no disruptive changes to Angular, and you can check upgrades one by one according to [Angular Update Guide | 8.0 -> 9.0 for Basic Apps](https://update.angular.io/#8.0:9.0)
- In the NG-ZORRO section, there are no disruptive changes this time either, just the removal of expired attributes that were warned at `8.x`, the vast majority of items can be upgraded directly by `ng update ng-zorro-antd`, for more information on possible problems go to [NG-ZORRO v9 Upgrade Guide] (https://github.com/NG-ZORRO/ng-zorro-antd/issues/5035).
- NG-ALAIN If you are `8.x`, you can directly use` ng update ng-alain`, it will fix a detail change; does not have changes to the `@delon/*` series, but instead is subject to the NG-ZORRO section with less detail to deal with; other than that, it is mainly optimized for code style, G2, and forcing the use of `date-fns` as the preferred date operation.

# Note: If you have any problems during the upgrade process, please submit a [Issues](https://github.com/ng-alain/ng-alain/issues/new?template=bug_report.md) and describe detail. You can also search through [8-to-9 tags](https://github.com/ng-alain/ng-alain/labels/8-to-9) known issues.

## Before upgrade

1. Make sure `Node.js` >= `10.13`.
2. Create a new branch, or use other methods to back up the current project.
3. Delete the `node_modules`, `package-lock.json` or `yarn.lock` file.

## Major projects

### 1. Global configuration

Through `ALAIN_CONFIG`, you can unify the default configuration for all `@delon/*` and `ng-zorro-antd`, remove `delon.module.ts` file and replace with [global-config.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts).

### 2. date-fns

`date-fns` Upgrade to `2.x` All import names have changed.

```diff
- import { format } from 'date-fns';
+ import format from 'date-fns/format';
```

> The core factor is that Angular's own DatePipe is not implemented according to the ISO standard algorithm, so date-fns will be forced to format the date by default, see [How to use date-fns for date formatting](https://ng.ant.design/docs/i18n/en#how-to-format-a-date-using-date-fns) for details.

**Add default language**

[full reference code] (https://github.com/ng-alain/ng-alain/blob/master/src/app/app.module.ts#L26).

```diff
+ { provide: NZ_DATE_LOCALE, useValue: LANG.date },
```

If the project is using internationalization, also be sure to go to [i18n.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/i18n/i18n.service.ts#L25) to import the date.

### 3. @delon/abc directory structure

Restructuring part of the directory structure will cause the import path to change as well.

- `@delon/abc/table` => `@delon/abc/st`
- `@delon/abc/view` => `@delon/abc/sv`
- `@delon/abc/grid` => `@delon/abc/sg`
- `@delon/abc/edit` => `@delon/abc/se`

### 4. Remove

| Original | Current |
|----------|---------|
| `@delon/util` => `ng-zorro-antd/core/outlet` | `*stringTemplateOutlet` => `*nzStringTemplateOutlet` |


### 5. G2

The latest version of G2 fully supports TypeScript, so there is no longer a need to reference full dependency packages in `angular.json`.

**angular.json**

```diff
- "node_modules/@antv/g2/build/g2.js",
- "node_modules/@antv/data-set/dist/data-set.min.js",
- "node_modules/@antv/g2-plugin-slider/dist/g2-plugin-slider.min.js",
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
