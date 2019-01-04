---
type: Basic
order: 3
title: qr
subtitle: 二维码
cols: 1
module: QRModule
config: QRConfig
---

基于 [qrious](https://neocotic.com/qrious) 生成二维码。

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

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[value]` | 值，不支持中文 [#62](https://github.com/neocotic/qrious/issues/62) | `string` | -
`[background]` | 背景 | `string` | `white`
`[backgroundAlpha]` | 背景透明级别，范围：`0-1` 之间 | `number` | `1.0`
`[foreground]` | 前景 | `string` | `white`
`[foregroundAlpha]` | 前景透明级别，范围：`0-1` 之间 | `number` | `1.0`
`[level]` | 误差校正级别 | `'L','M','Q','H'` | `'L'`
`[mime]` | 二维码输出图片MIME类型 | `string` | `image/png`
`[padding]` | 内边距（单位：px） | `number` | `10`
`[size]` | 大小（单位：px） | `number` | `220`
`(change)` | 变更时回调，返回二维码dataURL值 | `EventEmitter<string>` | -

## 常见问题

### 自定义LOGO

参考 [#100](https://github.com/neocotic/qrious/issues/100#issuecomment-308249343) 的写法。
