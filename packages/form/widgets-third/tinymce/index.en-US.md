---
title: tinymce
subtitle: Tinymce Rich Text
type: Third Widgets
---

Tinymce rich text.

## How to Use

**Installation dependencies**  

Since the Tinymce editor relies on a third-party plug-in [ngx-tinymce](https://github.com/cipchk/ngx-tinymce), the dependency should be installed first when using it

`npm i -S ngx-tinymce`

- 1. Register `provideNuMonacoEditorConfig()` in `app.config.ts`
- 2. Register `withTinymceWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

> For more tinymce configuration, please refer to [ngx-tinymce](https://github.com/cipchk/ngx-tinymce).

## API

### ui 

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| config | `any` |  | see [configure](https://www.tinymce.com/docs/configure/integration-and-setup/) |
| loading | `string,TemplateRef` | - | Loading status of tinymce |
| disabled | `boolean` | `false` | Set tinymce mode is `readonly` if `true` |
| inline | `boolean` | `false` | Inline editor |
| delay | `number` | 0 | Delayed rendering, unit is 'millisecond' |
| placeholder | `string` | - | Placeholder for tinymce, **NOTE:** dependent on [tinymce-placeholder](https://github.com/mohan/tinymce-placeholder) |
| ready | `EventEmitter<any>` | - | Tinymce ready callback |
