---
type: Basic
order: 2
title: _src
subtitle: Image
cols: 1
module: ImageModule
config: ImageConfig
---

like `src`, but more features:

- Support WeChat, qq avatar thumbnail rule
- Support remove http&https protocol
- Support onerror events

## API

### [_src]

| Property  | Description           | Type     | Default                 |
| --------- | --------------------- | -------- | ----------------------- |
| `[size]`  | Size of image         | `number` | `64`                    |
| `[error]` | Replaces failed image | `string` | `./assets/img/logo.svg` |
