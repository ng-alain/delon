---
type: Basic
order: 2
title: _src
subtitle: Image
cols: 2
module: import { ImageModule } from '@delon/abc/image';
---

like `src`, but more features:

- Support WeChat, qq avatar thumbnail rule
- Support remove http&https protocol
- Support onerror events
- Support use `HttpClient` to request image resources, Automatically converted to Base64, generally used to request image resources that require authorization
- Support preview image

## API

### [_src]

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[size]` | Size of image | `number` | `64` | ✅ |
| `[error]` | Replaces failed image | `string` | `./assets/img/logo.svg` | ✅ |
| `[useHttp]` | Whether to use `HttpClient` to request image resources | `boolean` | `false` | - |
| `[previewSrc]` | Image of the preview | `string` | - | - |
| `[previewModalOptions]` | Modal options of the preview modal | `ModalOptions` | - |  ✅ |