---
type: Basic
order: 3
title: qr
subtitle: 二维码
cols: 1
module: import { QRModule } from '@delon/abc/qr';
---

基于 [qrious](https://neocotic.com/qrious) 生成二维码。

默认二维码的操作并不是刚需的原因，因此采用一种延迟加载脚本的形式，可以通过[全局配置](/docs/global-config)配置来改变默认 CDN 路径（或使用本地路径），默认情况下使用 `https://cdn.bootcdn.net/ajax/libs/qrious/4.0.2/qrious.min.js`。或安装 `npm i --save qrious` 依赖包并在 `angular.json` 的 `scripts` 引用 `"node_modules/qrious/dist/qrious.min.js"`。

## API

### qr

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[value]` | 值 | `string` | - |  |
| `[background]` | 背景 | `string` | `white` | ✅ |
| `[backgroundAlpha]` | 背景透明级别，范围：`0-1` 之间 | `number` | `1` | ✅ |
| `[foreground]` | 前景 | `string` | `white` | ✅ |
| `[foregroundAlpha]` | 前景透明级别，范围：`0-1` 之间 | `number` | `1` | ✅ |
| `[level]` | 误差校正级别 | `'L','M','Q','H'` | `'L'` | ✅ |
| `[mime]` | 二维码输出图片MIME类型 | `string` | `image/png` | ✅ |
| `[padding]` | 内边距（单位：px） | `number` | `10` | ✅ |
| `[size]` | 大小（单位：px） | `number` | `220` | ✅ |
| `(change)` | 变更时回调，返回二维码dataURL值 | `EventEmitter<string>` | - |  |

## 常见问题

### 自定义LOGO

参考 [#100](https://github.com/neocotic/qrious/issues/100#issuecomment-308249343) 的写法。
