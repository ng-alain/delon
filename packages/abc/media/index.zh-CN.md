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

由于 plyr 脚本大小以及对视频播放并不是刚需的原因，因此采用一种延迟加载脚本的形式，可以通过[全局配置](/docs/global-config)配置来改变默认 CDN 路径，默认情况下使用 `https://cdn.jsdelivr.net/npm/plyr/dist/plyr.min.js`、`https://cdn.jsdelivr.net/npm/plyr/dist/plyr.css`。

**使用本地路径**

```json
// angular.json
{
  "glob": "**/{plyr.min.js,plyr.css,plyr.svg}",
  "input": "./node_modules/plyr/dist",
  "output": "assets/plyr/"
}
```

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  media: {
    urls: ['assets/plyr/plyr.min.js', 'assets/plyr/plyr.css'],
    options: {
      iconUrl: 'assets/plyr/plyr.svg',
      blankVideo: 'https://cdn.plyr.io/static/blank.mp4'
    }
  }
};
```

## API

### [media]

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[type]` | 媒体类型 | `audio, video` | `video` | - |
| `[source]` | 媒体数据源 | `string, PlyrMediaSource` | - | - |
| `[options]` | 播放器参数 [plyr options](https://github.com/sampotts/plyr#options) | `any` | - | ✅ |
| `[delay]` | 延迟初始化，单位：毫秒 | `number` | - | - |
| `(ready)` | 准备就绪回调 | `EventEmitter<Plyr>` | - | - |

## FAQ

### 如何更友好的使用 Plyr 类型

```ts
import type Plyr from 'plyr';
```
