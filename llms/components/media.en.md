---
type: Basic
order: 1
title: media
subtitle: HTML5 Media
cols: 2
module: import { MediaModule } from '@delon/abc/media';
---

HTML5 player based on [plyr](https://github.com/sampotts/plyr).

## Dependencies

The plyr script file takes the form of lazy loading，you can change the default CDN path via [Global Configuration](/docs/global-config). By default: `https://cdn.jsdelivr.net/npm/plyr/dist/plyr.min.js`, `https://cdn.jsdelivr.net/npm/plyr/dist/plyr.css`.

**Use local path**

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

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[type]` | Media type | `audio, video` | `video` | - |
| `[source]` | Source of the media | `string, PlyrMediaSource` | - | - |
| `[options]` | Source options of the media, please refer to [plyr options](https://github.com/sampotts/plyr#options) | `any` | - | ✅ |
| `[delay]` | Delay init plyr player, unit: ms | `number` | - | - |
| `(ready)` | Ready callback | `EventEmitter<Plyr>` | - | - |

## FAQ

### How to use Plyr types more friendly

```ts
import type * as Plyr from 'plyr';
```

---

## Examples

### MP4 Basic Usage

Simplest of usage.

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

### MP3 Basic Usage

Specify `type="audio"` to play MP3.

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

### Custom

Specify `source` and` options` to customize the player.

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
