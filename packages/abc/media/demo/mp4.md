---
order: 1
title:
  zh-CN: MP4基础样例
  en-US: MP4 Basic Usage
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

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
    <div media #media [source]="mp4"></div>
  `,
  standalone: true,
  imports: [NzButtonModule, MediaModule]
})
export class DemoComponent {
  mp4 = `https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4`;
}
```
