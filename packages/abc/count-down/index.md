---
type: Basic
title: count-down
subtitle: 倒计时
cols: 3
module: CountDownModule
---

倒计时组件，依赖 [ngx-countdown](https://github.com/cipchk/ngx-countdown)。

## 依赖

```
yarn add ngx-countdown
```

## API

### count-down

| 参数       | 说明                                     | 类型                   | 默认值 |
|------------|----------------------------------------|------------------------|--------|
| `[target]` | 目标时间，`number` 表示秒                 | `number | Date`        | -      |
| `[config]` | 完整 [Config](https://github.com/cipchk/ngx-countdown#config) 参数                                 | `object`               |        |
| `(begin)`  | 开始时触发                               | `EventEmitter<void>`   | -      |
| `(notify)` | 通知时触发，需要在 `config` 中配置 notify | `EventEmitter<number>` | -      |
| `(end)`    | 结束时触发                               | `EventEmitter<void>`   | -      |

## 关于重绘

重绘是指当Timer一次跳动时会执行一次（如果是0.1s精度的，会更频繁）；因此，可以制定一些不一样的效果。有关细节可以参考 [Flip](https://cipchk.github.io/ngx-countdown/#/tpl/flip)。
