---
order: 11
type: Basic
title: 升级到 9.0 版本
hot: true
---

本文描述是指从 `8.9.x` 升级至 `9` 的描述说明；NG-ALAIN 依然需要从三个部分来升级：

- Angula 并无什么破坏性变更，可以根据 [Angular Update Guide | 8.0 -> 9.0 for Basic Apps](https://update.angular.io/#8.0:9.0) 逐一检查升级
- NG-ZORRO 部分，本次也并无任何破坏性变更，只是移除在 `8.x` 时就已经警告的过期属性，绝大部分项目可以直接 `ng update ng-zorro-antd` 完成升级，有关更多可能遇到的问题请至 [NG-ZORRO v9 升级指南](https://github.com/NG-ZORRO/ng-zorro-antd/issues/5035)。
- NG-ALAIN 如果你是 `8.x` 可以直接使用 `ng update ng-alain`，会修复一次细节的变动；`@delon/*` 系列的大变动，反之会受 NG-ZORRO 部分而少些细节需要处理；除此之外，主要对代码风格、G2、强制使用 `date-fns` 作为日期操作的首选进行优化。

# 注意：如果你升级过程中有任何问题，请提交一份 [Issues](https://github.com/ng-alain/ng-alain/issues/new?template=bug_report.md) 并详细描述，也可以通过 [8-to-9标签](https://github.com/ng-alain/ng-alain/labels/8-to-9) 来检索已知问题。

## 开始之前

1. 首先确保你 `Node.js` >= `10.13`
2. 创建新的分支，或者使用其他方式备份当前项目
3. 删除项目下 `node_modules`、`package-lock.json` 或 `yarn.lock` 文件

## 主要项目

### 1、全局配置

通过 `ALAIN_CONFIG` 可以对所有 `@delon/*`、`ng-zorro-antd` 统一默认项配置，移除原 `delon.module.ts` 换成 [global-config.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/global-config.module.ts)。

### 2、date-fns

`date-fns` 升级至 `2.x` 所有导入名称有变化：

```diff
- import { format } from 'date-fns';
+ import format from 'date-fns/format';
```

> 核心因素还是由于Angular自带的DatePipe并非按照ISO标准算法实现，所以默认将强制使用 date-fns 来格式化日期，细节参考[如何使用 date-fns 进行日期格式化](https://ng.ant.design/docs/i18n/zh#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-date-fns-%E8%BF%9B%E8%A1%8C%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F%E5%8C%96)。

**增加默认语言**

[完整参考代码](https://github.com/ng-alain/ng-alain/blob/master/src/app/app.module.ts#L26)。

```diff
+ { provide: NZ_DATE_LOCALE, useValue: LANG.date },
```

如果项目正在使用国际化，也务必至 [i18n.service.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/core/i18n/i18n.service.ts#L25) 对日期的导入。

### 3、@delon/abc 目录结构

重构部分目录结构，会导致导入路径也发生改变：

- `@delon/abc/table` => `@delon/abc/st`
- `@delon/abc/view` => `@delon/abc/sv`
- `@delon/abc/grid` => `@delon/abc/sg`
- `@delon/abc/edit` => `@delon/abc/se`

### 4、移除

| 原 | 现 |
|---|---|
| `@delon/util` => `ng-zorro-antd/core/outlet` | `*stringTemplateOutlet` => `*nzStringTemplateOutlet` |

### 5、G2

G2 最新版本全面支持 TypeScript，因此不再需要 `angular.json` 中引用完整的依赖包：

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

**使用变更**

```ts
import { Chart } from '@antv/g2';
const chart = new Chart();
```

如果你有自定义 G2 部分，请参考 [G2 4.0 升级指南](https://g2.antv.vision/zh/docs/manual/upgrade)。

## 可选升级

### 1、tslint

[import-blacklist](https://github.com/ng-alain/ng-alain/blob/master/tslint.json#L42-L44) 新增 `"ng-zorro-antd", "@delon/abc", "@delon/chart"` 强制只能使用次级导入。

### 2、共享模块

分别增加 [shared-zorro.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/shared-zorro.module.ts) 和 [shared-delon.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/shared-delon.module.ts) 次级导入模块文件，并且在 [shared.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/shared.module.ts#L35) 引用它们，这有效的降低可能会包体的大小。
