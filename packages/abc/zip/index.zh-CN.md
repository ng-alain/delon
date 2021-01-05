---
type: Basic
title: zip
order: 7
subtitle: Zip 操作
cols: 1
module: import { ZipModule } from '@delon/abc/zip';
---

一个基于 [jszip](http://stuk.github.io/jszip/) 的Zip文件操作。

## 依赖

由于 jszip 脚本大小以及对 Zip 的操作并不是刚需的原因，因此采用一种延迟加载脚本的形式，可以通过[全局配置](/docs/global-config)配置来改变默认 CDN 路径（或使用本地路径），默认情况下使用 `//cdn.bootcss.com/jszip/3.3.0/jszip.min.js`。

## API

### ZipService

成员 | 说明 | 类型 | 默认值
----|------|-----|------
`read(fileOrUrl: File | string, options?: JSZip.JSZipLoadOptions)` | 解压  | `Promise<JSZip>` | -
`create()` | 创建 Zip 实例，用于创建压缩文件  | `Promise<JSZip>` | -
`pushUrl(zip: JSZip, path: string, url: string)` | 下载URL资源并写入 zip  | `Promise<void>` | -
`save(zip: JSZip, options?: ZipWriteOptions)` | 保存Zip  | `Promise<void>` | -
