---
order: 2
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

import { MediaModule } from '@delon/abc/media';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-demo',
  template: `
    <div class="mb-sm">
      <button nz-button (click)="media.player?.play()">Play</button>
      <button nz-button (click)="media.player?.pause()">Pause</button>
      <button nz-button (click)="media.player?.restart()">Restart</button>
    </div>
    <div media #media type="audio" [source]="mp3"></div>
  `,
  standalone: true,
  imports: [NzButtonModule, MediaModule]
})
export class DemoComponent {
  mp3 = `https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3`;
}
```
