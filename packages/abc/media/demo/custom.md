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
import { PlyrMediaSource } from '@delon/abc/media';

@Component({
  selector: 'app-demo',
  template: `
    <div class="mb-sm">
      <button nz-button (click)="media.player.play()">Play</button>
      <button nz-button (click)="media.player.pause()">Pause</button>
      <button nz-button (click)="media.player.restart()">Restart</button>
    </div>
    <media #media [source]="source" [options]="options" style="height: 200px"></media>
  `,
})
export class DemoComponent {
  source: PlyrMediaSource = {
    type: 'video',
    sources: [
      {
        src: `https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_Bastion_TheLastBastion.mp4`,
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
}
```
