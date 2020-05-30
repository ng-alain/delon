---
title: ueditor
subtitle: Ueditor Rich Text
type: Third Widgets
---

Ueditor Rich Text.

> Note: third party widget is not registered by default, see details from [Customize Widgets](https://ng-alain.com/form/customize/en).

## Source Code

[Source Code](https://github.com/ng-alain/delon/tree/master/packages/form/widgets-third/ueditor)。

## API

### ui

Property    | Description                                                                           | Type                     | Default
------------|---------------------------------------------------------------------------------------|--------------------------|---------
`[config]`  | Configuration options, [official website](http://fex.baidu.com/ueditor/#start-config) | `object`                 | -
`[loading]` | Initial hint message                                                                  | `string`                 | `加载中...`
`[delay]`   | Lazy initialize UEditor, unit: millisecond                                            | `number`                 | `300`
`[change]`  | Callback function when content in editor is changed                                   | `(html: string) => void` | -
