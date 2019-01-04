---
type: Basic
title: down-file
subtitle: 下载文件
cols: 1
module: DownFileModule
---

一个基于 `blob` 的文件下载。

## 依赖

```
yarn add file-saver
```

## API

### [down-file]

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[http-data]` | URL请求参数 | `any` | -
`[http-method]` | 请求类型 | `'POST','GET','HEAD','PUT','PATCH','DELETE'` | `'GET'`
`[http-url]` | 下载地址 | `string` | -
`[file-name]` | 指定文件名，若为空从服务端返回的 `header` 中获取 `filename`、`x-filename` | `string` | -
`(success)` | 成功回调 | `EventEmitter<HttpResponse<Blob>>` | -
`(error)` | 错误回调 | `EventEmitter<any>` | -

## 常见问题

### 文件名获取顺序

1. `file-name`
2. `content-disposition` 的 `filename*`、`filename`
3. header 参数 `filename`、`x-filename`
