---
title: qr-code
subtitle: 二维码
type: Non-built-in widgets
---

当需要将链接转换成为二维码时使用。

## 导入模块

非内置模块，需要额外在 [json-schema.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11) 导入 `QrCodeWidgetModule`。

## API

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[color]`    | 二维码颜色        | `string`                          | `#000`    |
| `[bgColor]` | 二维码背景颜色      | `string`                        | `#FFFFFF` |
| `[qrSize]`     | 二维码大小        | `number`                          | `160`     |
| `[padding]`  | 二维码填充        | `number \| number[]`              | `0`       |
| `[icon]`     | 二维码中 icon 地址 | `string`                          | -         |
| `[iconSize]` | 二维码中 icon 大小 | `number`                          | `40`      |
| `[bordered]` | 是否有边框        | `boolean`                         | `true`    |
| `[status]`   | 二维码状态        | `'active'｜'expired' ｜'loading'`   | `active`  |
| `[level]`    | 二维码容错等级      | `'L'｜'M'｜'Q'｜'H'`                 | `M`       |
| `(refresh)`  | 点击"点击刷新"的回调  | `EventEmitter<string>`            | -         |
