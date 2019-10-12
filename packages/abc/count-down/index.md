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
| `[config]` | 完整 [Config](https://github.com/cipchk/ngx-countdown#countdownconfig) 参数                                 | `CountdownConfig`  | - |
| `(event)`  | 事件通知                               | `EventEmitter<CountdownEvent>`   | -      |
| (deprecated) `(begin)`  | 开始时触发                               | `EventEmitter<void>`   | -      |
| (deprecated) `(notify)` | 通知时触发，需要在 `config` 中配置 notify | `EventEmitter<number>` | -      |
| (deprecated) `(end)`    | 结束时触发                               | `EventEmitter<void>`   | -      |
