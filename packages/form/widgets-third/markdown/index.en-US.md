---
title: markdown
subtitle: Markdown Editor
type: Third Widgets
---

Markdown Editor

> Note: third party widget is not registered by default, see details from [Customize Widgets](https://ng-alain.com/form/customize/en).

## How to Use

**Import Module**

By default, you need to register `SimplemdeModule` at two places.

- Import `SimplemdeModule.forRoot({})` in `AppModule`, which allows to set a global configuration
- Import `SimplemdeModule` in `SharedModule`, which guarantees it can be used in all sub modules

**Import Resource**

Import related resource in `angular.json`.

```json
"styles": [
  "node_modules/ngx-simplemde/src/index.css",
],
"scripts": [
  "node_modules/simplemde-antd/dist/simplemde.min.js",
]
```

## Source Code

[Source Code](https://github.com/ng-alain/delon/tree/master/packages/form/widgets-third/markdown).

## API

### ui

Property    | Description                                                                        | Type                   | Default
------------|------------------------------------------------------------------------------------|------------------------|--------
`[options]` | Configuration options, [official website](https://github.com/cipchk/ngx-simplemde) | `object`               | -
`[change]`  | Callback function when content in editor is changed                                | `(md: string) => void` | -
