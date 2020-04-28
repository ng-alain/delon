---
order: 1
title:
  zh-CN: MP3基础样例
  en-US: MP3 Basic Usage
---

## zh-CN

指定 `type="audio"` 来播放 MP3。

## en-US

Specify `type="audio"` to play MP3.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <div class="mb-sm">
      <button nz-button (click)="media.player.play()">Play</button>
      <button nz-button (click)="media.player.pause()">Pause</button>
      <button nz-button (click)="media.player.restart()">Restart</button>
    </div>
    <media #media type="audio" [source]="mp3" style="height: 200px"></media>
  `,
})
export class DemoComponent {
  mp3 = `http://h5player.bytedance.com/video/music/audio.mp3`;
}
```
