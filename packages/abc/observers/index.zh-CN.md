---
type: Basic
title: Observers
subtitle: 观察者
order: 7
module: import { ObserversModule } from '@delon/abc/observers';
---

`ObserversModule` 包提供了基于原生 Web 平台的观察者 API（比如 `MutationObserver`） 的便捷指令。

## API

### [observeSize]

观察DOM大小变化。

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `(observeSize)` | 事件 | `MutationRecord[]` | - |  |
