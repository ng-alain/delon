---
type: Basic
order: 2
title: _src
subtitle: 显示图像
cols: 2
module: import { ImageModule } from '@delon/abc/image';
---

等同于 `src`，但相比较更多功能：

+ 支持微信、qq头像规则缩略图规则
+ 支持移除http&https协议http
+ 支持增加onerror事件
+ 支持使用 `HttpClient` 来获取图像资源，自动转化成 Base64，一般用于请求需要授权的图像资源

## API

### [_src]

| 参数 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[size]` | 图像大小 | `number` | `64` | ✅ |
| `[error]` | 替代图像无法加载 | `string` | `./assets/img/logo.svg` | ✅ |
| `[useHttp]` | 是否使用 `HttpClient` 来请求图像资源 | `boolean` | `false` | - |