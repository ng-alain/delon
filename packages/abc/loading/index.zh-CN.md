---
type: Basic
order: 2
title: loading
subtitle: 加载指示符
cols: 2
module: import { LoadingModule } from '@delon/abc/loading';
---

全局加载指示符，一般用于某个操作需要中断用户操作。

## API

### LoadingService

| 名称 | 说明 |
|----|----|
| `open(options?: LoadingShowOptions)` | 打开 |
| `close()` | 关闭 |

### LoadingShowOptions

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `type` | 显示类型 | `LoadingType` | `spin` | ✅ |
| `text` | 描述文案 | `string` | `加载中...` | ✅ |
| `icon` | 类型为 `icon` 的配置项 | `LoadingIcon` | - | ✅ |
| `custom` | 类型为 `custom` 的配置项 | `LoadingCustom` | - | ✅ |
| `delay` | 延迟显示加载效果的时间（防止闪烁），单位：毫秒 | `number` | - | ✅ |
