---
title: g2-card
subtitle: 图表卡片
cols: 2
module: G2CardModule
type: Components
---

图表卡片，用于展示图表的卡片容器，可以方便的配合其它图表套件展示丰富信息。

## API

### g2-card

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| `[title]` | 卡片标题 | `string,TemplateRef<void>` | - |
| `[avatar]` | 头像 | `string,TemplateRef<void>` | - |
| `[action]` | 卡片操作 | `string,TemplateRef<void>` | - |
| `[total]` | 数据总量（支持HTML） | `string` | - |
| `[footer]` | 卡片底部 | `string,TemplateRef<void>` | - |
| `[contentHeight]` | 内容区域高度（单位：`px`） | `string` | - |
| `[bordered]` | 是否显示边框 | `boolean` | `false` |
