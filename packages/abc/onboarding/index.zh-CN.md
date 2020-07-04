---
type: Basic
title: onboarding
subtitle: 用户引导流程
order: 7
cols: 1
module: import { OnboardingModule } from '@delon/abc/onboarding';
---

用户引导流程，是帮助用户更好的理解和使用产品。

## API

### ZipService

成员 | 说明 | 类型 | 默认值
----|------|-----|------
`read(fileOrUrl: File | string, options?: JSZip.JSZipLoadOptions)` | 解压  | `Promise<JSZip>` | -
`create()` | 创建 Zip 实例，用于创建压缩文件  | `Promise<JSZip>` | -
`pushUrl(zip: JSZip, path: string, url: string)` | 下载URL资源并写入 zip  | `Promise<void>` | -
`save(zip: JSZip, options?: ZipWriteOptions)` | 保存Zip  | `Promise<void>` | -
