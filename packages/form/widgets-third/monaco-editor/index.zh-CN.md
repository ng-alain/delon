---
title: monaco-editor
subtitle: Monaco Editor
type: Third Widgets
---

Markdown编辑器。

## 如何使用

**安装依赖**  

`yarn add @ng-util/monaco-editor`

- 1、在 `app.config.ts` 下注册 `provideNuMonacoEditorConfig()`
- 2、在 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) 注册 `withMonacoEditorWidget`。

> 关于更多 Monaco Editor 配置请参考 [@ng-util/monaco-editor](https://github.com/ng-util/ng-util/blob/master/packages/monaco-editor/README.md#usage)。

## API

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[options]` | 配置项说明，[见官网](https://microsoft.github.io/monaco-editor/docs.html) | `monaco.editor.IStandaloneEditorConstructionOptions` | - |
| `[delay]` | 延迟加载时间 | `number` | - |
| `[change]` | 编辑器内容发生改变时会触发该事件 | `(value: string) => void` | - |
| `[height]` | Height of monaco editor | `string` | `200px` |
| `[model]` | Model of monaco editor | `NuMonacoEditorModel` | - |
| `(event)` | Event callback | `EventEmitter<NuMonacoEditorEvent>` | - |
