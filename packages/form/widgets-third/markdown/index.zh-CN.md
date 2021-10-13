---
title: markdown
subtitle: Markdown编辑器
type: Third Widgets
---

Markdown编辑器。

> 注：第三方小部件默认并未注册，细节见[定制小部件](https://ng-alain.com/form/customize)。

## 如何使用

**安装依赖**  

由于Markdown编辑器依赖第三方插件[ngx-simplemde](https://github.com/cipchk/ngx-simplemde)，所以使用时应首先安装依赖  

`npm install ngx-simplemde`

**导入模块**

- 使用最新脚手架搭建出的项目提供了第三方控件注册入口: `src/app/shared/json-schema/json-schema.module.ts`
- 需将`MarkdownWidget`在`JsonSchemaModule`中进行声明

```ts
export const SCHEMA_THIRDS_COMPONENTS = [MarkdownWidget];

@NgModule({
  declarations: SCHEMA_THIRDS_COMPONENTS,
  imports: [
    SharedModule,
    DelonFormModule.forRoot(),
    SimplemdeModule.forRoot({ style: 'default' }),
  ],
  exports: SCHEMA_THIRDS_COMPONENTS
})
export class JsonSchemaModule {
}
```

**控件注册**

- 将控件注册到`WidgetRegistry`注册表中

```ts
export class JsonSchemaModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(MarkdownWidget.KEY, MarkdownWidget);
  }
}
```

**导入资源**

在 `angular.json` 导入相应资源。

```json
"styles": [
  "src/styles.less"
]
"scripts": [
  "node_modules/simplemde-antd/dist/simplemde.min.js"
]
```

**导入样式**

使用`style.less`作为样式入口后，需将`ngx-simplemde`的样式文件导入进去，并定义一些自定义变量

```less
// src/style.less
@import '~ngx-simplemde/index.less';
// Change existing parameters here:
@simplemde-icon-url: '//at.alicdn.com/t/font_700857_mnodkd1cp9l766r';
@simplemde-statusbar-lines: 'Lins:';
@simplemde-statusbar-words: 'words:';
@simplemde-statusbar-characters: '字符：';
@simplemde-statusbar-counts: '字数：';
```

## 源代码

[源代码](https://github.com/ng-alain/delon/tree/master/packages/form/widgets-third/markdown)。

## API

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[options]` | 配置项说明，[见官网](https://github.com/cipchk/ngx-simplemde) | `object` | - |
| `[change]` | 编辑器内容发生改变时会触发该事件 | `(md: string) => void` | - |
