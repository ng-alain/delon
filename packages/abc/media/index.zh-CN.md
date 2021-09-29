---
type: Basic
order: 1
title: media
subtitle: HTML5媒体
cols: 2
module: import { MediaModule } from '@delon/abc/media';
---

基于 [plyr](https://github.com/sampotts/plyr) HTML5播放器。

## 依赖

由于 plyr 脚本大小以及对视频播放并不是刚需的原因，因此采用一种延迟加载脚本的形式，可以通过[全局配置](/docs/global-config)配置来改变默认 CDN 路径（或使用[本地路径](https://angular.cn/guide/workspace-config#asset-config)），默认情况下使用 `https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.min.js`、`https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.css`。

## API

### media

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[type]` | 媒体类型 | `audio, video` | `video` | - |
| `[source]` | 媒体数据源 | `string, PlyrMediaSource` | - | - |
| `[options]` | 播放器参数 [plyr options](https://github.com/sampotts/plyr#options) | `any` | - | ✅ |
| `[delay]` | 延迟初始化，单位：毫秒 | `number` | - | - |
| `(ready)` | 准备就绪回调 | `EventEmitter<Plyr>` | - | - |
