---
type: Service
order: 6
title: RTLService
subtitle: RTL服务
---

RTL服务控制。

## API

| 接口名 | 参数 | 描述 |
|-----|----|----|
| `dir` | `Direction` | 获取或设置当前文字方向 |
| `nextDir` | `Direction` | 获取下一次文字方向 |
| `change` | `Observable<Direction>` | 订阅变更通知 |
| `toggle()` | - | 切换文字方向 |
