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
