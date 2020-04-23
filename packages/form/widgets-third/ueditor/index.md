---
title: ueditor
subtitle: Ueditor富文本
type: Third Widgets
---

Ueditor富文本。

> 注：第三方小部件默认并未注册，细节见[定制小部件](https://ng-alain.com/form/customize)。

## 源代码

[源代码](https://github.com/ng-alain/delon/tree/master/packages/form/widgets-third/ueditor)。

## API

### ui 属性

成员 | 说明 | 类型 | 默认值
----|------|-----|------
`[config]` | 前端配置项说明，[见官网](http://fex.baidu.com/ueditor/#start-config) | `object` | -
`[loading]` | 初始化提示文本 | `string` | `加载中...`
`[delay]` | 延迟初始化UEditor，单位：毫秒 | `number` | `300`
`[change]` | 编辑器内容发生改变时会触发该事件 | `(html: string) => void` | -
