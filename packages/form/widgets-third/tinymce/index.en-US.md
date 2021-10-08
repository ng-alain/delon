---
title: tinymce
subtitle: Tinymce Rich Text
type: Third Widgets
---

Tinymce rich text

> Note: third party widget is not registered by default, see details from [Customize Widgets](https://ng-alain.com/form/customize/en).

**Installation dependencies**  

Since the Tinymce editor relies on a third-party plug-in [ngx-tinymce](https://github.com/cipchk/ngx-tinymce), the dependency should be installed first when using it

`npm install ngx-tinymce`


**Import module**    

- The project built using the latest scaffolding provides a third-party widget registration entry: `src/app/shared/json-schema/json-schema.module.ts`.
- `TinymceWidget` needs to be declared in `JsonSchemaModule`.
- Take the given plug-in list and toolbar as a full list, which can be deleted according to needs.

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

**Widget registration**  

- Register the widget to the `WidgetRegistry` registry

```ts
export class JsonSchemaModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
  }
}
```

**Import resources**

Tinymce supports a highly customized plug-in mode, which can effectively reduce the size of the package body by configuring plug-ins and static resources.

- Plug-in download: [CustomBuilds](https://www.tiny.cloud/get-tiny/custom-builds/)
- Language package download: [LanguagePackages](https://www.tiny.cloud/get-tiny/language-packages/)
- Put the downloaded plug-in into a directory accessible by `baseURL`
- Put the downloaded language pack into a directory accessible by `language_url`

## Source Code

[Source Code](https://github.com/ng-alain/delon/tree/master/packages/form/widgets-third/tinymce)。

## API

### ui 

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[config]` | Configuration options, [official website](https://www.tinymce.com/docs/configure/integration-and-setup/) | `object` | - |
| `[loading]` | Initial hint message | `string` | `加载中...` |
| `[change]` | Callback function when content in editor is changed | `(html: string) => void` | - |
