---
title: g2-card
subtitle: Chart Card
cols: 2
type: G2
module: import { G2CardModule } from '@delon/chart/card';
---

Chart card, a card container for charts, which can be easily combined with other chart suites to display rich information.

## API

### g2-card

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[title]` | Title of the card | `string,TemplateRef<void>` | - |
| `[avatar]` | Avatar | `string,TemplateRef<void>` | - |
| `[action]` | Action of the card | `string,TemplateRef<void>` | - |
| `[total]` | Total amount of the data (HTML supported) | `string` | - |
| `[footer]` | Footer of the card | `string,TemplateRef<void>` | - |
| `[contentHeight]` | Height of the content area (unit: `px`) | `string` | - |
| `[bordered]` | Whether to display the border | `boolean` | `false` |
| `[loading]` | Whether to display the loading state (`nz-spin` wraps the content) | `boolean` | `false` |
