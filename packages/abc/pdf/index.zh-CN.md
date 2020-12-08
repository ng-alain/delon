---
type: Basic
order: 3
title: pdf
subtitle: Pdf
cols: 1
module: import { PdfModule } from '@delon/abc/pdf';
---

基于 [pdf.js](https://neocotic.com/qrious) 的PDF预览组件。

默认PDF预览并不是刚需的原因，因此采用一种延迟加载脚本的形式，可以通过[全局配置](/docs/global-config)配置来改变默认 pdf.js 类库的根路径（或使用本地路径）。

> 组件也是受 [ng2-pdf-viewer](https://github.com/VadimDez/ng2-pdf-viewer) 启发。

## API

### pdf

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[src]` | 指定文档路径 | `string, object, UInt8Array` | - | - |
| `[pi]` | 当前页 | `number` | `1` | - |
| `[showAll]` | 是否显示全部页 | `boolean` | `true` | ✅ |
| `[renderText]` | 是否启用文字层，开启后允许文字选择 | `boolean` | `true` | ✅ |
| `[textLayerMode]` | 文字层渲染模式 | `PdfTextLayerMode` | `ENABLE` | - |
| `[showBorders]` | 是否显示页面边框 | `boolean` | `false` | ✅ |
| `[stickToPage]` | 是否视野保持在 `pi` 页上 | `boolean` | `false` | - |
| `[originalSize]` | 控制文档显示大小，`true` 按原始大小，`false` 按容器大小 | `boolean` | `true` | ✅ |
| `[fitToPage]` | 控制原始尺寸不会超出容器大小 | `boolean` | `false` | ✅ |
| `[zoom]` | 控制缩放文档 | `number` | `1` | - |
| `[zoomScale]` | 缩放文档的计算方式 | `PdfZoomScale` | `page-width` | - |
| `[rotation]` | 旋转文档 | `number` | `0` | - |
| `[autoReSize]` | 是否自动缩放 | `boolean` | `true` | ✅ |
| `[externalLinkTarget]` | 外部链接打开形式 | `PdfExternalLinkTarget` | `BLANK` | - |
| `[delay]` | 延迟初始化，单位：毫秒 | `number` | - | - |
| `(change)` | 变更时回调 | `EventEmitter<PdfChangeEvent>` | - | - |

## 常见问题

### 为什么有时需要指定高度

当启用显示全部页时，如果要让页码的控制产生有效，需要确保组件的高度是一个有效值。
