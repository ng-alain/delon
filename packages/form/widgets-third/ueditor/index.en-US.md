---
title: ueditor
subtitle: Ueditor Rich Text
type: Third Widgets
---

Ueditor Rich Text.

> Note: third party widget is not registered by default, see details from [Customize Widgets](https://ng-alain.com/form/customize/en).

**Installation dependencies**  

Since the Ueditor relies on a third-party plug-in [ngx-ueditor](https://github.com/cipchk/ngx-ueditor), the dependency should be installed first when using it

`npm install ngx-ueditor`


**Import module**    

- The project built using the latest scaffolding provides a third-party widget registration entry: `src/app/shared/json-schema/json-schema.module.ts`.
- `UeditorWidget` needs to be declared in `JsonSchemaModule`.


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

**Widget registration**  

- Register the widget to the `WidgetRegistry` registry

```ts
export class JsonSchemaModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
  }
}
```

**Import resources**

Roughly the same as `Tinymce`, `Ueditor` also needs to import some static resource files to run normally

- It can be downloaded from [Ueditor Release](https://github.com/fex-team/ueditor/releases) as needed
- Put the static resource file into a path accessible by `config` to complete the configuration

## Source Code

[Source Code](https://github.com/ng-alain/delon/tree/master/packages/form/widgets-third/ueditor)。

## API

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[config]` | Configuration options, [official website](http://fex.baidu.com/ueditor/#start-config) | `object` | - |
| `[loading]` | Initial hint message | `string` | `加载中...` |
| `[delay]` | Lazy initialize UEditor, unit: millisecond | `number` | `300` |
| `[change]` | Callback function when content in editor is changed | `(html: string) => void` | - |
