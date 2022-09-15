---
type: CURD
title: cell
subtitle: 单元格数据
cols: 1
order: 2
module: import { CellModule } from '@delon/abc/cell';
---

支持十几种数据类型的格式化。

## API

### [cell]

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[value]` | 值 | `unknown` | - |
| `[options]` | 选项 | `CellOptions` | - |
| `[default]` | 默认值 | `string` | `-` |
| `[defaultCondition]` | 默认值条件 | `unknown` | `null` |
| `[truncate]` | 是否截短 | `boolean` | `false` |
| `[loading]` | 是否加载中 | `boolean` | `false` |
| `[type]` | 类型 | `primary,success,danger,warning` | - |
| `[size]` | 大小 | `large,small` | - |

### CellOptions

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[type]` | 渲染类型 | - | - |
| `[tooltip]` | 文字提示 | `string` | - |
| `[mask]` | 格式化掩码, 参考[文档](https://ng-alain.com/util/format/zh#formatMask) | `string, FormatMaskOption` | - |
| `[widget]` | 小部件配置 | `{key?: string, data?: string}` | - |
| `[date]` | 日期配置 | `{format?: string}` | - |
| `[mega]` | 大数据格式化配置 | `CurrencyMegaOptions` | - |
| `[currency]` | 货币配置 | `CurrencyFormatOptions` | - |
| `[boolean]` | 布尔配置 | `YNOptions` | - |
| `[img]` | 图像配置，支持大图预览 | `{ size?: number; big?: boolean }` | - |
| `[link]` | 链接配置 | `{ url?: string; target?: string }` | - |
| `[html]` | HTML 配置 | `{ safe?: string }` | - |
| `[badge]` | 徽章配置 | `{ data?: CellBadge }` | - |
| `[tag]` | 标签配置 | `{ data?: CellTag }` | - |

**渲染类型**

- `string` 字符串
- `number` 数字
- `mega` 大数据格式化
- `currency` 货币
- `boolean` 布尔
- `date` 日期
- `img` 图像，支持大图预览
- `link` 链接
- `html` HTML
- `badge` 徽章
- `tag` 标签
- `widget` 自定义小部件
