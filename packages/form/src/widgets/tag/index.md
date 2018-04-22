---
title: tag
subtitle: 热门标签
type: Widgets
---

进行标记标签，**注：** 只支持 `checkable` 标签模式。

## schema 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
enum | 数据源 | `SFSchemaEnumType[]` | -

## ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
asyncData | 异步数据源 | `() => Observable<SFSchemaEnumType[]>` | -

## Demo

```ts
schema = {
    properties: {
        like: {
            type: 'number',
            title: '兴趣',
            enum: [
                { value: 1, label: '电影' },
                { value: 2, label: '书' },
                { value: 3, label: '旅行' }
            ],
            ui: {
                widget: 'tag'
            },
            default: [ 1, 2 ]
        }
    }
}
```
