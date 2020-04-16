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

## 可选升级

### tslint

- `import-blacklist` 新增 `"ng-zorro-antd", "@delon/abc", "@delon/chart"` 强制只能使用次级导入

## G2 升级至 `4.0`

### angular.json

```diff
- "node_modules/@antv/g2/build/g2.js",
+ "node_modules/@antv/g2/dist/g2.min.js",
```

