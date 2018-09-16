---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN

模仿自 [antv基础漏斗图](https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html)。

## en-US

Copy [Basic Funnel Chart](https://antv.alipay.com/zh-cn/g2/3.x/demo/funnel/basic.html)。

```ts
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <g2-custom (render)="render($event)"></g2-custom>
  `,
})
export class DemoComponent {
  render(el: ElementRef) {
    const { DataView } = DataSet;
    let data = [
      {
        action: '浏览网站',
        pv: 50000,
      },
      {
        action: '放入购物车',
        pv: 35000,
      },
      {
        action: '生成订单',
        pv: 25000,
      },
      {
        action: '支付订单',
        pv: 15000,
      },
      {
        action: '完成交易',
        pv: 8000,
      },
    ];

    const dv = new DataView().source(data);
    dv.transform({
      type: 'percent',
      field: 'pv',
      dimension: 'action',
      as: 'percent',
    });
    data = dv.rows;
    const chart = new G2.Chart({
      container: el.nativeElement,
      forceFit: true,
      height: window.innerHeight,
      padding: [20, 120, 95],
    });
    chart.source(data, {
      percent: {
        nice: false,
      },
    });
    chart.axis(false);
    chart.tooltip({
      showTitle: false,
      itemTpl:
        '<li data-index={index} style="margin-bottom:4px;">' +
        '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
        '{name}<br/>' +
        '<span style="padding-left: 16px">浏览人数：{pv}</span><br/>' +
        '<span style="padding-left: 16px">占比：{percent}</span><br/>' +
        '</li>',
    });
    chart
      .coord('rect')
      .transpose()
      .scale(1, -1);
    chart
      .intervalSymmetric()
      .position('action*percent')
      .shape('funnel')
      .color('action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF'])
      .label(
        'action*pv',
        function(action, pv) {
          return action + ' ' + pv;
        },
        {
          offset: 35,
          labelLine: {
            lineWidth: 1,
            stroke: 'rgba(0, 0, 0, 0.15)',
          },
        },
      )
      .tooltip('action*pv*percent', function(action, pv, percent) {
        return {
          name: action,
          percent: (percent * 100).toFixed(2) + '%',
          pv: pv,
        };
      });
    data.forEach((obj: any) => {
      // 中间标签文本
      chart.guide().text({
        top: true,
        position: {
          action: obj.action,
          percent: 'median',
        },
        content: (obj.percent * 100).toFixed(2) + '%', // 显示的文本内容
        style: {
          fill: '#fff',
          fontSize: '12',
          textAlign: 'center',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)',
        },
      });
    });
    chart.render();
  }
}
```
