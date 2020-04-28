---
type: Basic
order: 1
title: vedio-plyr
subtitle: HTML5视频播放器
cols: 1
module: VedioPlyrModule
---

基于 [plyr](https://github.com/sampotts/plyr) HTML5视频播放器。

## 注意

默认 `QRModule` 并没有强制依赖 `qrious`，因此还需要额外在 `angular.json` 的 `scripts` 节点引用它。

```bash
npm i --save qrious
```

```ts
"scripts": [
  "node_modules/qrious/dist/qrious.min.js"
]
```

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
