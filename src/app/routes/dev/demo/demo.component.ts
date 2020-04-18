import { Component, OnInit } from '@angular/core';
import format from 'date-fns/format';

@Component({
  selector: 'app-demo',
  template: ` <g2-timeline [data]="chartData" [titleMap]="{ y1: '客流量', y2: '支付笔数' }" [height]="200"></g2-timeline>`,
})
export class DemoComponent implements OnInit {
  chartData: any[] = [];
  ngOnInit(): void {
    for (let i = 0; i < 20; i += 1) {
      this.chartData.push({
        time: format(new Date().getTime() + 1000 * 60 * 30 * i, 'yyyy-MM-dd HH:mm'),
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10,
      });
    }
  }
}
