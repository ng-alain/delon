---
type: Basic
title: zip
order: 7
subtitle: Zip
cols: 1
module: import { ZipModule } from '@delon/abc/zip';
---

A Zip file operation based on [jszip](http://stuk.github.io/jszip/).

## Dependencies

The jszip script file takes the form of lazy loading，you can change the default CDN path (or use the [local path](https://angular.io/guide/workspace-config#asset-config)) via [Global Configuration](/docs/global-config). By default: `//cdn.bootcss.com/jszip/3.3.0/jszip.min.js`.

## API

### ZipService

Property | Description | Type | Default
----|------|-----|------
`read(fileOrUrl: File | string, options?: JSZip.JSZipLoadOptions)` | Decompression  | `Promise<JSZip>` | -
`create()` | Create a Zip instance for creating a compressed file  | `Promise<JSZip>` | -
`pushUrl(zip: JSZip, path: string, url: string)` | Download the URL resource and write it to zip  | `Promise<void>` | -
`save(zip: JSZip, options?: ZipWriteOptions)` | Save  | `Promise<void>` | -
