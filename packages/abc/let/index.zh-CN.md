---
type: Basic
order: 1
title: let
subtitle: 定义
cols: 1
module: import { LetModule } from '@delon/abc/lett';
---

允许在模板内复用计算值（包含异步），避免重复重新计算。

```html
<div *let="value1 as v">
  <p>{{ v }}</p>
</div>
<div *let="time$ | async as time">
  <p>{{ time }}</p>
</div>
```

## API

### [let]

| 参数 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[let]` | 表达式 | `T` | - | - |
