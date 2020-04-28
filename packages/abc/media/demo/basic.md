---
order: 1
title:
  zh-CN: 视频基础样例
  en-US: Video Basic Usage
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
    <button nz-button (click)="media.player.play()">Play</button>
    <button nz-button (click)="media.player.pause()">Pause</button>
    <button nz-button (click)="media.player.restart()">Restart</button>
    <media #media [src]="mp4"></media>
  `,
})
export class DemoComponent {
  mp4 = `https://vdept.bdstatic.com/43716b786b4c6477434c765575656549/6c54426679534555/b264641d3acca2ed40226f3914c3ed4f39974fb163cc5f3492e64c652fe583aaa389b955e06c26a524213c4356fd41d3.mp4?auth_key=1588090559-0-0-a98ebf0efb528be0dd033f5035a82c17`;
}
```
