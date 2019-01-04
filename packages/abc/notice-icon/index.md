---
type: Business
title: notice-icon
subtitle: 通知菜单
cols: 1
module: NoticeIconModule
---

用在导航工具栏上，作为整个产品统一的通知中心。

## API

### notice-icon

参数                     | 说明                | 类型                             | 默认值
-------------------------|-------------------|----------------------------------|--------
`[data]`                 | 数据                | `NoticeItem[]`                   | -
`[count]`                | 图标上的消息总数    | `number`                         | -
`[loading]`              | 弹出卡片加载状态    | `boolean`                        | `false`
`(select)`               | 点击列表项的回调    | `EventEmitter<NoticeIconSelect>` | -
`(clear)`                | 点击清空按钮的回调  | `EventEmitter<string>`           | -
`[popoverVisible]`       | 手动控制Popover显示 | `boolean`                        | `false`
`(popoverVisibleChange)` | Popover显隐回调     | `EventEmitter<boolean>`          | -

### NoticeItem

参数           | 说明                        | 类型               | 默认值
---------------|---------------------------|--------------------|------
`[title]`      | 标题                        | `string`           | -
`[list]`       | 列表数据，格式参照下表       | `NoticeIconList[]` | -
`[emptyText]`  | 针对每个 Tab 定制空数据文案 | `string`           | `无通知`
`[emptyImage]` | 针对每个 Tab 定制空数据图片 | `string`           | -
`[clearText]`  | 针对每个 Tab 清空按钮文本   | `string`           | `清空`

### NoticeIconList

参数            | 说明                    | 类型      | 默认值
----------------|-----------------------|-----------|----
`[avatar]`      | 头像图片链接            | `string`  | -
`[title]`       | 标题                    | `string`  | -
`[description]` | 描述信息                | `string`  | -
`[datetime]`    | 时间戳                  | `string`  | -
`[extra]`       | 额外信息，在列表项右上角 | `string`  | -
`[read]`        | 是否已读状态            | `boolean` | -

### NoticeIconSelect

参数      | 说明   | 类型         | 默认值
----------|------|--------------|----
`[title]` | 标题   | `string`     | -
`[item]`  | 数据项 | `NoticeItem` | -
