---
title: tinymce
subtitle: Tinymce富文本
type: Third Widgets
---

Tinymce富文本。

> 注：第三方小部件默认并未注册，细节见[定制小部件](https://ng-alain.com/form/customize)。


## 如何使用

**安装依赖**

由于Tinymce编辑器依赖第三方插件[ngx-tinymce](https://github.com/cipchk/ngx-tinymce)，所以使用时应首先安装依赖

`npm install ngx-tinymce`

**导入模块**

- 使用最新脚手架搭建出的项目提供了第三方控件注册入口: `src/app/shared/json-schema/json-schema.module.ts`
- 需将`TinymceWidget`在`JsonSchemaModule`中进行声明
- 以给出的插件列表与工具栏为全量列表，可根据需求删减

```ts
export const SCHEMA_THIRDS_COMPONENTS = [TinymceWidget];

@NgModule({
  declarations: SCHEMA_THIRDS_COMPONENTS,
  imports: [
    SharedModule,
    DelonFormModule.forRoot(),
    NgxTinymceModule.forRoot({
      baseURL: './assets/tinymce/',
      config: {
        language: 'zh_CN',
        language_url: './assets/tinymce/langs/zh_CN.js',
        branding: false,
        paste_data_images: true,
        automatic_uploads: false,
        menubar: true,
        toolbar_mode: 'wrap',
        plugins:
          'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount image textpattern help emoticons autosave autoresize',
        toolbar:
          'code undo redo restoredraft | cut copy | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat |  table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen |  indent2em'
      }
    })
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
    widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
  }
}
```

**导入静态资源**

Tinymce支持高度自定义的插件模式,通过配置插件和静态资源可以有效的减少包体体积

- 插件下载: [CustomBuilds](https://www.tiny.cloud/get-tiny/custom-builds/)
- 语言包下载: [LanguagePackages](https://www.tiny.cloud/get-tiny/language-packages/)
- 将下载好的插件放入`baseURL`可访问到的目录内
- 将下载好的语言包放入`language_url`可访问到的目录内


## 源代码

[源代码](https://github.com/ng-alain/delon/tree/master/packages/form/widgets-third/tinymce)。

## API

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[config]` | 配置项说明，[见官网](https://www.tinymce.com/docs/configure/integration-and-setup/) | `object` | - |
| `[loading]` | 初始化提示文本 | `string` | `加载中...` |
| `[change]` | 编辑器内容发生改变时会触发该事件 | `(html: string) => void` | - |
