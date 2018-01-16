---
title: zip
subtitle: Zip 操作
order: 220
cols: 1
module: AdZipModule
---

一个基于 [jszip](http://stuk.github.io/jszip/) 的Zip文件操作。

## 依赖

```
npm install --save file-saver
```

由于 jszip 脚本大小以及对 Zip 的操作并不是刚需的原因，因此采用一种延迟加载脚本的形式。在导入 `AdZipModule` 模块时允许你指定个 URL、CDN 路径，默认情况下使用 `//cdn.bootcss.com/jszip/3.1.5/jszip.min.js`。

## API

### ZipService

方法 | 说明 |
----|------
`read(fileOrUrl: File | string, options?: JSZip.JSZipLoadOptions): Promise<JSZip>` | 解压
`create(): Promise<JSZip>` | 创建 Zip 实例，用于创建压缩文件
`pushUrl(zip: JSZip, path: string, url: string): Promise<void>` | 下载URL资源并写入 zip
`save(zip: JSZip, options?: ZipWriteOptions): Promise<void>` | 保存Zip
