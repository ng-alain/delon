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

The plyr script file takes the form of lazy loading，you can change the default CDN path (or use the [local path](https://angular.io/guide/workspace-config#asset-config)) via [Global Configuration](/docs/global-config). By default: `https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.min.js`, `https://cdn.bootcdn.net/ajax/libs/plyr/3.5.10/plyr.css`.

## API

### media

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[type]` | Media type | `audio, video` | `video` | - |
| `[source]` | Source of the media | `string, PlyrMediaSource` | - | - |
| `[options]` | Source options of the media, please refer to [plyr options](https://github.com/sampotts/plyr#options) | `any` | - | ✅ |
| `[delay]` | Delay init plyr player, unit: ms | `number` | - | - |
| `(ready)` | Ready callback | `EventEmitter<Plyr>` | - | - |
