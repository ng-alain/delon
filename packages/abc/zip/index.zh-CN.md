---
type: Basic
title: zip
order: 7
subtitle: Zip 操作
cols: 1
module: NaZipModule
config: ZipConfig
---

一个基于 [jszip](http://stuk.github.io/jszip/) 的Zip文件操作。

## 依赖

```
yarn add file-saver
```

由于 jszip 脚本大小以及对 Zip 的操作并不是刚需的原因，因此采用一种延迟加载脚本的形式。在导入 `NaZipModule` 模块时允许你指定个 URL、CDN 路径，默认情况下使用 `//cdn.bootcss.com/jszip/3.1.5/jszip.min.js`。

## API

### ZipService

成员 | 说明 | 类型 | 默认值
----|------|-----|------
`read(fileOrUrl: File | string, options?: JSZip.JSZipLoadOptions)` | 解压  | `Promise<JSZip>` | -
`create()` | 创建 Zip 实例，用于创建压缩文件  | `Promise<JSZip>` | -
`pushUrl(zip: JSZip, path: string, url: string)` | 下载URL资源并写入 zip  | `Promise<void>` | -
`save(zip: JSZip, options?: ZipWriteOptions)` | 保存Zip  | `Promise<void>` | -
