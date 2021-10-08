---
title: markdown
subtitle: Markdown Editor
type: Third Widgets
---

Markdown Editor

> Note: third party widget is not registered by default, see details from [Customize Widgets](https://ng-alain.com/form/customize/en).

## How to Use

**Installation dependencies**  

Since the Markdown editor relies on a third-party plug-in [ngx-simplemde](https://github.com/cipchk/ngx-simplemde), the dependency should be installed first when using it

`npm install ngx-simplemde`


**Import module**    

- The project built using the latest scaffolding provides a third-party widget registration entry: `src/app/shared/json-schema/json-schema.module.ts`
- `MarkdownWidget` needs to be declared in `JsonSchemaModule`

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

**Widget registration**  

- Register the widget to the `WidgetRegistry` registry

```ts
export class JsonSchemaModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(MarkdownWidget.KEY, MarkdownWidget);
  }
}
```

**Import resources**  

Import the corresponding resources in `angular.json`.

```json
"styles": [
  "src/styles.less"
]
"scripts": [
  "node_modules/simplemde-antd/dist/simplemde.min.js"
]
```

**Import styles**  

After using `style.less` as the style entry, you need to import the style file of `ngx-simplemde` and define some custom variables

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

## Source Code

[Source Code](https://github.com/ng-alain/delon/tree/master/packages/form/widgets-third/markdown).

## API

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[options]` | Configuration options, [official website](https://github.com/cipchk/ngx-simplemde) | `object` | - |
| `[change]` | Callback function when content in editor is changed | `(md: string) => void` | - |
