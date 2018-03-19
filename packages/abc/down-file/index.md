---
title: down-file
subtitle: 下载文件
order: 310
cols: 1
type: Directive
module: AdDownFileModule
---

一个基于 `blob` 的文件下载。

## 依赖

```
npm install --save file-saver
```

## API

参数 | 说明 | 类型 | 默认值
----|------|-----|------
http-data | URL请求参数 | `any` | -
http-method | 请求类型 | `string` | `get`
http-url | 下载地址 | `string` | -
file-name | 指定文件名，若为空从服务端返回的 `header` 中获取 `filename`、`x-filename` | `string` | -
success | 成功回调 | `EventEmitter` | -
error | 错误回调 | `EventEmitter` | -
