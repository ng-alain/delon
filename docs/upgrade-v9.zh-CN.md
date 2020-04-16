---
order: 11
type: Basic
title: 升级到 9.0 版本
hot: true
---

## 核心描述

- `date-fns` 升级至 `2.x` 所有导入名称有变化：

```diff
- import { format } from 'date-fns';
+ import format from 'date-fns/format';
```

重构部分目录结构：

- `@delon/abc/table` => `@delon/abc/st`
- `@delon/abc/view` => `@delon/abc/sv`
- `@delon/abc/grid` => `@delon/abc/sg`
- `@delon/abc/edit` => `@delon/abc/se`

减少与 `ng-zorro-antd` 重复性代码：

- `*stringTemplateOutlet` => `*nzStringTemplateOutlet`

由于Angular自带的DatePipe并非按照ISO标准算法实现，所以默认将强制使用 date-fns 来格式化日期，细节参考[如何使用 date-fns 进行日期格式化](https://ng.ant.design/docs/i18n/zh#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-date-fns-%E8%BF%9B%E8%A1%8C%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F%E5%8C%96)。

## 可选升级

### tslint

- `import-blacklist` 新增 `"ng-zorro-antd", "@delon/abc", "@delon/chart"` 强制只能使用次级导入

## G2 升级至 `4.0`

### angular.json

```diff
- "node_modules/@antv/g2/build/g2.js",
+ "node_modules/@antv/g2/dist/g2.min.js",
```

