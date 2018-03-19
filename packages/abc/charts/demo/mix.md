---
order: 0
title: 图表套件组合展示
---

利用 ng-alain 提供的图表套件，可以灵活组合符合设计规范的图表来满足复杂的业务需求。

```ts
import { Component, OnInit } from '@angular/core';
import * as format from 'date-fns/format';

@Component({
  selector: 'app-demo',
  template: `
    <div nz-row [nzGutter]="24">
        <div nz-col [nzSpan]="24">
            <g2-card [title]="'搜索用户数量'" contentHeight="134" [bordered]="true">
                <number-info subTitle="本周访问" total="12,321" subTotal="17.1" status="up"></number-info>
                <g2-mini-area line height="45" [data]="visitData"></g2-mini-area>
            </g2-card>
        </div>
        <div nz-col [nzSpan]="24" class="mt-lg">
            <g2-card [title]="'访问量'" total="8,846" footer="日访问量 1,234" contentHeight="46" [action]="visitAction" [bordered]="true">
                <ng-template #visitAction>
                    <nz-tooltip [nzTitle]="'指标说明'">
                        <i nz-tooltip class="anticon anticon-info-circle-o"></i>
                    </nz-tooltip>
                </ng-template>
                <g2-mini-bar height="46" [data]="visitData"></g2-mini-bar>
            </g2-card>
        </div>
        <div nz-col [nzSpan]="24" class="mt-lg">
            <g2-card [title]="'线上购物转化率'" total="78%" footer="日访问量 1,234" contentHeight="46"
                [action]="action" [footer]="footer" [bordered]="true">
                <ng-template #action>
                    <nz-tooltip [nzTitle]="'指标说明'">
                        <i nz-tooltip class="anticon anticon-info-circle-o"></i>
                    </nz-tooltip>
                </ng-template>
                <ng-template #footer>
                    周同比<trend flag="up" style="margin: 0 16px 0 8px; color: rgba(0,0,0,.85)">12%</trend>
                    日环比<trend flag="down" style="margin: 0 0 0 8px; color: rgba(0,0,0,.85)">11%</trend>
                </ng-template>
                <g2-mini-progress percent="78" strokeWidth="8" target="80"></g2-mini-progress>
            </g2-card>
        </div>
    </div>
  `
})
export class DemoComponent implements OnInit {
    visitData: any[] = [];
    ngOnInit(): void {
        const beginDay = new Date().getTime();
        for (let i = 0; i < 20; i += 1) {
            this.visitData.push({
                x: format(new Date(beginDay + (1000 * 60 * 60 * 24 * i)), 'YYYY-MM-DD'),
                y: Math.floor(Math.random() * 100) + 10,
            });
        }
    }
}
```
