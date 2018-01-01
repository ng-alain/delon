---
order: 5
title: 饼状图
---

一个基础饼状图。

```ts
import { Component, OnInit } from '@angular/core';
import { yuan } from '@delon/abc';

@Component({
    selector: 'app-demo',
    template: `
    <pie
        [hasLegend]="true"
        title="销售额"
        subTitle="销售额"
        [total]="total"
        [valueFormat]="format"
        [data]="salesPieData"
        height="294"></pie>`
})
export class DemoComponent implements OnInit {
    salesPieData = [
        {
            x: '家用电器',
            y: 4544,
        },
        {
            x: '食用酒水',
            y: 3321,
        },
        {
            x: '个护健康',
            y: 3113,
        },
        {
            x: '服饰箱包',
            y: 2341,
        },
        {
            x: '母婴产品',
            y: 1231,
        },
        {
            x: '其他',
            y: 1231,
        },
    ];
    total: string;
    ngOnInit(): void {
        this.total = yuan(this.salesPieData.reduce((pre, now) => now.y + pre, 0));
    }
    format(val: number) {
        return yuan(val);
    }
}
```
