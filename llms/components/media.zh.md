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
import type * as Plyr from 'plyr';
```

---

## 代码示例

### MP4基础样例

最简单的用法。

```typescript
import { Component } from '@angular/core';

import { MediaComponent } from '@delon/abc/media';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-media-mp4',
  template: `
    <div class="mb-sm">
      <button nz-button (click)="media.player?.play()">Play</button>
      <button nz-button (click)="media.player?.pause()">Pause</button>
      <button nz-button (click)="media.player?.restart()">Restart</button>
    </div>
    <div media #media [source]="mp4"></div>
  `,
  imports: [NzButtonModule, MediaComponent]
})
export class ComponentsMediaMp4 {
  mp4 = `https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4`;
}
```

### MP3基础样例

指定 `type="audio"` 来播放 MP3。

```typescript
import { Component } from '@angular/core';

import { MediaComponent } from '@delon/abc/media';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-media-mp3',
  template: `
    <div class="mb-sm">
      <button nz-button (click)="media.player?.play()">Play</button>
      <button nz-button (click)="media.player?.pause()">Pause</button>
      <button nz-button (click)="media.player?.restart()">Restart</button>
    </div>
    <div media #media type="audio" [source]="mp3"></div>
  `,
  imports: [NzButtonModule, MediaComponent]
})
export class ComponentsMediaMp3 {
  mp3 = `https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3`;
}
```

### 自定义

指定 `source`、`options` 来自定义播放器。

```typescript
import { Component } from '@angular/core';

import type * as Plyr from 'plyr';

import { MediaComponent } from '@delon/abc/media';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-media-custom',
  template: `
    <div class="mb-sm">
      <button nz-button (click)="play('video')">Change Play Video</button>
      <button nz-button (click)="play('audio')">Change Play Audio</button>
    </div>
    <div media #media [source]="source" [options]="options"></div>
  `,
  imports: [NzButtonModule, MediaComponent]
})
export class ComponentsMediaCustom {
  source: Plyr.SourceInfo = {
    type: 'video',
    sources: [
      {
        src: ``
      }
    ],
    // 字幕
    tracks: []
  };

  options: Plyr.Options = {
    // If you any problems, open `debug` and you can quickly find the issues
    debug: true,
    // controls: ['play-large'],
    i18n: {
      // For more parameters, please refer to: https://github.com/sampotts/plyr/blob/master/src/js/config/defaults.js#L151
      play: '播放',
      pause: '暂停',
      speed: '速度',
      normal: '正常'
    }
  };

  constructor() {
    this.play('video');
  }

  play(type: 'audio' | 'video'): void {
    this.source.type = type;
    if (type === 'video') {
      this.source.sources[0].src = `https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4`;
    } else {
      this.source.sources[0].src = `https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3`;
    }
    this.source = { ...this.source };
  }
}
```
