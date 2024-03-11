---
title: color
subtitle: 颜色
type: Non-built-in widgets
---

当用户需要自定义颜色选择的时候使用。

## 如何使用

**安装依赖**  

`yarn add ng-antd-color-picker`

非内置模块，需要额外在 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) 注册 `withColorWidget`。


## API

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[format]`       | 颜色格式       | `rgb`｜`hex`｜`hsb`                 | `hex`    |
| `[defaultValue]` | 颜色默认的值     | `string`｜`NzColor`                  | -        |
| `[allowClear]`   | 允许清除选择的颜色  | `boolean`                         | `false`  |
| `[trigger]`      | 颜色选择器的触发模式 | `hover`｜`click`                   | `click`  |
| `[showText]`      | 显示颜色文本     | `boolean`                         | `false`  |
| `[title]`      | 设置颜色选择器的标题 | `TemplateRef<void>`｜`string`      | -        |
| `(change)`     | 颜色变化的回调    | `EventEmitter<{ color: NzColor; format: string }>` | -        |
| `(formatChange)`      | 颜色格式变化的回调  | `EventEmitter<'rgb'｜'hex'｜'hsb'>` | -        |
| `[block]`   | 是否颜色块  | `boolean`                         | `false`  |
