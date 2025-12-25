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
