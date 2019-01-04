---
title: markdown
subtitle: Markdown编辑器
type: Third Widgets
---

Markdown编辑器。

> 注：第三方小部件默认并未注册，细节见[定制小部件](https://ng-alain.com/form/customize)。

## 如何使用

**导入模块**

默认需要自行在两个地方注册 `SimplemdeModule`。

- 在 `AppModule` 导入 `SimplemdeModule.forRoot({})` 允许指定一个全局配置
- 在 `SharedModule` 导入 `SimplemdeModule` 确保所有子模块可以使用

**导入资源**

在 `angular.json` 导入相应资源。

```json
"styles": [
  "node_modules/ngx-simplemde/src/index.css",
],
"scripts": [
  "node_modules/simplemde-antd/dist/simplemde.min.js",
]
```

## 源代码

[源代码](https://github.com/ng-alain/delon/tree/master/packages/form/widgets-third/markdown)。

## API

### ui 属性

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[options]` | 配置项说明，[见官网](https://github.com/cipchk/ngx-simplemde) | `object` | -
`[change]` | 编辑器内容发生改变时会触发该事件 | `(md: string) => void` | -
