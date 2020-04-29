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

@Component({
  selector: 'app-demo',
  template: `
    <div class="mb-sm">
      <button nz-button (click)="media.player.play()">Play</button>
      <button nz-button (click)="media.player.pause()">Pause</button>
      <button nz-button (click)="media.player.restart()">Restart</button>
    </div>
    <media #media [source]="mp4" style="height: 200px"></media>
  `,
})
export class DemoComponent {
  mp4 = `https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_Bastion_TheLastBastion.mp4`;
}
```
