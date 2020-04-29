---
order: 1
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
import { PlyrMediaSource, PlyrMediaType } from '@delon/abc/media';

@Component({
  selector: 'app-demo',
  template: `
    <div class="mb-sm">
      <button nz-button (click)="play('video')">Change Play Video</button>
      <button nz-button (click)="play('audio')">Change Play Audio</button>
    </div>
    <media #media [source]="source" [options]="options" style="height: 200px;"></media>
  `,
})
export class DemoComponent {
  source: PlyrMediaSource = {
    type: 'video',
    sources: [
      {
        src: ``,
      },
    ],
    // 字幕
    tracks: [],
  };

  options = {
    // If you any problems, open `debug` and you can quickly find the issues
    debug: true,
    // controls: ['play-large'],
    i18n: {
      // For more parameters, please refer to: https://github.com/sampotts/plyr/blob/master/src/js/config/defaults.js#L151
      play: '播放',
      pause: '暂停',
      speed: '速度',
      normal: '正常',
    },
  };

  constructor() {
    this.play('video');
  }

  play(type: PlyrMediaType): void {
    this.source.type = type;
    if (type === 'video') {
      this.source.sources[0].src = `https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_Bastion_TheLastBastion.mp4`;
    } else {
      this.source.sources[0].src = `http://h5player.bytedance.com/video/music/audio.mp3`;
    }
    this.source = { ...this.source };
  }
}
```
