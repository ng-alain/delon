---
title: monaco-editor
subtitle: Monaco Editor
type: Third Widgets
---

Markdown Editor

## How to Use

**Installation dependencies**  

`yarn add @ng-util/monaco-editor`

**Import module**    

- 1. Import `NuMonacoEditorModule.forRoot()` in `app.module.ts`
- 2. Import `MonacoEditorWidgetModule` in [json-schema.module.ts](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/json-schema.module.ts#L11).

> For more Monaco Editor configuration, please refer to [@ng-util/monaco-editor](https://github.com/ng-util/ng-util/blob/master/packages/monaco-editor/README.md#usage).

## API

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[options]` | Configuration options, [official website](https://microsoft.github.io/monaco-editor/docs.html) | `monaco.editor.IStandaloneEditorConstructionOptions` | - |
| `[delay]` | Time of lazy loading | `number` | - |
| `[change]` | Callback function when content in editor is changed | `(value: string) => void` | - |
| `[height]` | Height of monaco editor | `string` | `200px` |
| `[model]` | Model of monaco editor | `NuMonacoEditorModel` | - |
| `(event)` | Event callback | `EventEmitter<NuMonacoEditorEvent>` | - |
