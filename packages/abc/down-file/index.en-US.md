---
type: Basic
title: down-file
subtitle: Download file
cols: 1
module: DownFileModule
---

A file download based on `blob`.

## Dependencies

```
yarn add file-saver
```

## API

### [down-file]

Property | Description | Type | Default
----|------|-----|------
`[http-data]` | Parameter of request | `any` | -
`[http-method]` | Method of request | `'POST','GET','HEAD','PUT','PATCH','DELETE'` | `'GET'`
`[http-url]` | Url of request | `string` | -
`[file-name]` | Specify a file name | `string` | -
`(success)` | Success callback | `EventEmitter<HttpResponse<Blob>>` | -
`(error)` | Error callback | `EventEmitter<any>` | -

## FAQ

### File name order

1. `file-name`
2. `filename*`, `filename` of `content-disposition`
3. `filename`, `x-filename` of `headers`
