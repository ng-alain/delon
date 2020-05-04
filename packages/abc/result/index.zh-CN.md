---
type: Layout
title: result
subtitle: 处理结果
cols: 1
module: import { ResultModule } from '@delon/abc/result';
---

结果页用于对用户进行的一系列任务处理结果进行反馈。

## API

### result

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[type]` | 类型，不同类型自带对应的图标 | `string` | - |
| `[title]` | 标题 | `string,TemplateRef<void>` | - |
| `[description]` | 结果描述 | `string,TemplateRef<void>` | - |
| `[extra]` | 补充信息，有默认的灰色背景 | `string,TemplateRef<void>` | - |
| `ng-content` | 操作建议，推荐放置跳转链接，按钮组等 | `ng-content` | - |
