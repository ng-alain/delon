---
title: ueditor
subtitle: Ueditor富文本
type: Third Widgets
---

Ueditor富文本。

> 注：第三方小部件默认并未注册，细节见[定制小部件](https://ng-alain.com/form/customize)。


## 如何使用

**安装依赖**

由于Tinymce编辑器依赖第三方插件[ngx-ueditor](https://github.com/cipchk/ngx-ueditor)，所以使用时应首先安装依赖

`npm install ngx-ueditor`

**导入模块**

- 使用最新脚手架搭建出的项目提供了第三方控件注册入口: `src/app/shared/json-schema/json-schema.module.ts`
- 需将`UeditorWidget`在`JsonSchemaModule`中进行声明

```ts
export const SCHEMA_THIRDS_COMPONENTS = [UeditorWidget];

@NgModule({
  declarations: SCHEMA_THIRDS_COMPONENTS,
  imports: [
    SharedModule,
    DelonFormModule.forRoot(),
    UEditorModule.forRoot({
      js: [`./assets/ueditor/ueditor.config.js`, `./assets/ueditor/ueditor.all.min.js`],
      // 默认前端配置项
      options: {
        UEDITOR_HOME_URL: './assets/ueditor/'
      }
    }),
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
    widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
  }
}
```

**导入静态资源**

与`Tinymce`大致相同，`Ueditor`也需要导入一些静态资源文件才可正常运行

- 根据需要可从 [Ueditor Release](https://github.com/fex-team/ueditor/releases) 下载
- 将静态资源文件放入`config`可访问的路径中即完成配置


## 源代码

[源代码](https://github.com/ng-alain/delon/tree/master/packages/form/widgets-third/ueditor)。

## API

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[config]` | 前端配置项说明，[见官网](http://fex.baidu.com/ueditor/#start-config) | `object` | - |
| `[loading]` | 初始化提示文本 | `string` | `加载中...` |
| `[delay]` | 延迟初始化UEditor，单位：毫秒 | `number` | `300` |
| `[change]` | 编辑器内容发生改变时会触发该事件 | `(html: string) => void` | - |
