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

---

## Examples

### Style 1

Usage of style 1.

```typescript
import { Component } from '@angular/core';

import { G2CardModule } from '@delon/chart/card';
import { TrendModule } from '@delon/chart/trend';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'chart-card-style1',
  template: `
    <g2-card
      [title]="'销售额'"
      [bordered]="true"
      [total]="'¥ 126,560.00'"
      footer="日访问量 12,423"
      contentHeight="46"
      [action]="action"
    >
      <ng-template #action>
        <nz-icon nz-tooltip nzTooltipTitle="指标说明" nzType="info-circle" />
      </ng-template>
      周同比
      <trend flag="up" style="margin: 0 16px 0 8px; color: rgba(0,0,0,.85)">12%</trend>
      日环比
      <trend flag="down" style="margin: 0 0 0 8px; color: rgba(0,0,0,.85)">11%</trend>
    </g2-card>
  `,
  imports: [G2CardModule, NzTooltipModule, TrendModule]
})
export class ChartCardStyle1 {}
```

### Style 2

Usage of style 2.

```typescript
import { Component } from '@angular/core';

import { G2CardModule } from '@delon/chart/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'chart-card-style2',
  template: `
    <g2-card
      [title]="'移动指标'"
      [bordered]="true"
      [total]="'¥ 126,560.00'"
      footer="日访问量 12,423"
      [avatar]="avatar"
      [action]="action"
    >
      <ng-template #avatar><img style="width:56px; height: 56px" src="./assets/img/logo-color.svg" /></ng-template>
      <ng-template #action>
        <nz-icon nz-tooltip nzTooltipTitle="指标说明" nzType="info-circle" />
      </ng-template>
    </g2-card>
  `,
  imports: [G2CardModule, NzTooltipModule, NzIconModule]
})
export class ChartCardStyle2 {}
```

### Style 3

Usage of style 3.

```typescript
import { Component } from '@angular/core';

import { G2CardModule } from '@delon/chart/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'chart-card-style3',
  template: `
    <g2-card [title]="'移动指标'" [bordered]="true" [total]="'¥ 126,560.00'" [avatar]="avatar" [action]="action">
      <ng-template #avatar><img style="width:56px; height: 56px" src="./assets/img/logo-color.svg" /></ng-template>
      <ng-template #action>
        <nz-icon nz-tooltip nzTooltipTitle="指标说明" nzType="info-circle" />
      </ng-template>
    </g2-card>
  `,
  imports: [G2CardModule, NzTooltipModule, NzIconModule]
})
export class ChartCardStyle3 {}
```
