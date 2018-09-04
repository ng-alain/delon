---
type: Basic
title: zip
order: 7
subtitle: Zip
cols: 1
module: NaZipModule
---

A Zip file operation based on [jszip](http://stuk.github.io/jszip/).

## Dependencies

```
yarn add file-saver
```

The jszip script file takes the form of lazy loading. Allows you to specify a CDN URL in `NaZipModule.forRoot({})` module. The default is `//cdn.bootcss.com/jszip/3.1.5/jszip.min.js`.

## API

### ZipService

Property | Description | Type | Default
----|------|-----|------
`read(fileOrUrl: File | string, options?: JSZip.JSZipLoadOptions)` | Decompression  | `Promise<JSZip>` | -
`create()` | Create a Zip instance for creating a compressed file  | `Promise<JSZip>` | -
`pushUrl(zip: JSZip, path: string, url: string)` | Download the URL resource and write it to zip  | `Promise<void>` | -
`save(zip: JSZip, options?: NaZipWriteOptions)` | Save  | `Promise<void>` | -
