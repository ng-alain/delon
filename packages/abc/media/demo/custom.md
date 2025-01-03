---
order: 3
title:
  zh-CN: 自定义
  en-US: Custom
---

## zh-CN

指定 `source`、`options` 来自定义播放器。

## en-US

Specify `source` and` options` to customize the player.

```ts
import { Component } from '@angular/core';

import type Plyr from 'plyr';

import { MediaComponent } from '@delon/abc/media';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-demo',
  template: `
    <div class="mb-sm">
      <button nz-button (click)="play('video')">Change Play Video</button>
      <button nz-button (click)="play('audio')">Change Play Audio</button>
    </div>
    <div media #media [source]="source" [options]="options"></div>
  `,
  imports: [NzButtonModule, MediaComponent]
})
export class DemoComponent {
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
