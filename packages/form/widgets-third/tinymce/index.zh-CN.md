---
title: tinymce
subtitle: Tinymce富文本
type: Third Widgets
---

Tinymce富文本。

## 如何使用

**安装依赖**  

`npm i -S ngx-tinymce`

**导入模块**

- 1、在 `app.module.ts` 下导入 `NgxTinymceModule.forRoot()`
- 2、在 [json-schema.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11) 导入 `TinymceWidgetModule`。

> 关于更多 tinymce 配置请参考 [ngx-tinymce](https://github.com/cipchk/ngx-tinymce)。

## API

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| config | `any` |  | see [configure](https://www.tinymce.com/docs/configure/integration-and-setup/) |
| loading | `string,TemplateRef` | - | Loading status of tinymce |
| disabled | `boolean` | `false` | Set tinymce mode is `readonly` if `true` |
| inline | `boolean` | `false` | Inline editor |
| delay | `number` | 0 | Delayed rendering, unit is 'millisecond' |
| placeholder | `string` | - | Placeholder for tinymce, **NOTE:** dependent on [tinymce-placeholder](https://github.com/mohan/tinymce-placeholder) |
| ready | `EventEmitter<any>` | - | Tinymce ready callback |
