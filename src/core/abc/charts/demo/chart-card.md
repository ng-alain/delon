---
order: 1
title: 图表卡片
---

用于展示图表的卡片容器，可以方便的配合其它图表套件展示丰富信息。

```ts
import { Component } from '@angular/core';
import { yuan } from '@delon/abc';

@Component({
  selector: 'app-demo',
  template: `
    <div nz-row [nzGutter]="24">
        <div nz-col [nzSpan]="24">
            <chart-card [title]="'销售额'" [bordered]="true" [total]="yuan(126560)" footer="日访问量 12,423" contentHeight="46" [action]="action">
                <ng-template #action>
                    <nz-tooltip [nzTitle]="'指标说明'">
                        <nz-icon nzType="info-circle-o" nz-tooltip></nz-icon>
                    </nz-tooltip>
                </ng-template>
                周同比<trend flag="up" style="margin: 0 16px 0 8px; color: rgba(0,0,0,.85)">12%</trend>
                日环比<trend flag="down" style="margin: 0 0 0 8px; color: rgba(0,0,0,.85)">11%</trend>
            </chart-card>
        </div>
        <div nz-col [nzSpan]="24" class="mt-lg">
            <chart-card [title]="'移动指标'" [bordered]="true" [total]="yuan(126560)" footer="日访问量 12,423"
                [avatar]="avatar" [action]="action">
                <ng-template #avatar><img style="width:56px; height: 56px" src="./assets/img/logo-color.svg"/></ng-template>
                <ng-template #action>
                    <nz-tooltip [nzTitle]="'指标说明'">
                        <nz-icon nzType="info-circle-o" nz-tooltip></nz-icon>
                    </nz-tooltip>
                </ng-template>
            </chart-card>
        </div>
        <div nz-col [nzSpan]="24" class="mt-lg">
            <chart-card [title]="'移动指标'" [bordered]="true" [total]="yuan(126560)"
                [avatar]="avatar" [action]="action">
                <ng-template #avatar><img style="width:56px; height: 56px" src="./assets/img/logo-color.svg"/></ng-template>
                <ng-template #action>
                    <nz-tooltip [nzTitle]="'指标说明'">
                        <nz-icon nzType="info-circle-o" nz-tooltip></nz-icon>
                    </nz-tooltip>
                </ng-template>
            </chart-card>
        </div>
    </div>
  `
})
export class DemoComponent {
    yuan = yuan;
}
```
