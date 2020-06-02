---
title: tinymce
subtitle: Tinymce Rich Text
type: Third Widgets
---

Tinymce rich text

> Note: third party widget is not registered by default, see details from [Customize Widgets](https://ng-alain.com/form/customize/en).

## Source Code

[Source Code](https://github.com/ng-alain/delon/tree/master/packages/form/widgets-third/tinymce)。

## API

### ui 

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[config]` | Configuration options, [official website](https://www.tinymce.com/docs/configure/integration-and-setup/) | `object` | - |
| `[loading]` | Initial hint message | `string` | `加载中...` |
| `[change]` | Callback function when content in editor is changed | `(html: string) => void` | - |
