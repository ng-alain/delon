---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component, OnInit } from '@angular/core';
import { delay, finalize, of } from 'rxjs';

import { subDays } from 'date-fns';

import { CellBadge, CellFuValue, CellOptions } from '@delon/abc/cell';

@Component({
  selector: 'app-demo',
  template: `
    <div nz-row nzGutter="16" class="mt-md">
      <div *ngFor="let i of baseList" nz-col nzSpan="8"> {{ i | json }} => <span cell [value]="i"></span> </div>
      <div nz-col nzSpan="8"> date-fn => <span cell [value]="day3" [options]="{ date: { format: 'fn' } }"></span> </div>
      <div nz-col nzSpan="8">
        mega => <span cell value="15900000000" size="large" [options]="{ type: 'mega' }"></span>
      </div>
      <div nz-col nzSpan="8"> mask => <span cell value="15900000000" [options]="{ mask: '999****9999' }"></span> </div>
      <div nz-col nzSpan="8"> currency => <span cell value="100000" [options]="{ type: 'currency' }"></span> </div>
      <div nz-col nzSpan="8"> cny => <span cell value="100000" [options]="{ type: 'cny' }"></span> </div>
      <div nz-col nzSpan="8">
        yn => <span cell [value]="yn" [options]="{ type: 'boolean' }"></span>
        <a (click)="yn = !yn">Change Value</a>
      </div>
      <div nz-col nzSpan="8">
        img =>
        <span
          cell
          value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          [options]="{ type: 'img' }"
        ></span>
      </div>
      <div nz-col nzSpan="8">
        img list =>
        <span
          cell
          [value]="[
            'https://randomuser.me/api/portraits/thumb/women/46.jpg',
            'https://randomuser.me/api/portraits/thumb/women/47.jpg'
          ]"
          [options]="{ type: 'img' }"
        ></span>
      </div>
      <div nz-col nzSpan="8">
        link =>
        <span cell value="Link" [options]="{ link: { url: 'https://ng-alain.com' } }" [disabled]="disabled"></span>
        <a (click)="disabled = !disabled" class="ml-sm">Change Disabled</a>
      </div>
      <div nz-col nzSpan="8">
        html =>
        <span cell [value]="HTML" [options]="{ type: 'html' }"></span>
      </div>
      <div nz-col nzSpan="8">
        badge =>
        <span cell value="FINISHED" [options]="{ badge: { data: status } }"></span>
      </div>
      <div nz-col nzSpan="8">
        tag =>
        <span cell value="WAIT" [options]="{ tag: { data: status } }"></span>
      </div>
      <div nz-col nzSpan="8">
        checkbox =>
        <span
          cell
          [(value)]="checkbox"
          [options]="{ type: 'checkbox', tooltip: 'Tooltip' }"
          [disabled]="disabled"
        ></span>
        {{ checkbox | json }}
        <a (click)="disabled = !disabled" class="ml-sm">Change Disabled</a>
      </div>
      <div nz-col nzSpan="8">
        radio =>
        <span cell [(value)]="radio" [options]="{ type: 'radio', tooltip: 'Tooltip' }" [disabled]="disabled"></span>
        <a (click)="radio = !radio">Change Value</a>
        <a (click)="disabled = !disabled" class="ml-sm">Change Disabled</a>
        {{ radio | json }}
      </div>
      <div nz-col nzSpan="8">
        default =>
        <span cell [value]="null"></span>
      </div>
      <div *ngFor="let i of typeList" nz-col nzSpan="8">
        {{ i }} =>
        <span cell [value]="i" [type]="$any(i)"></span>
      </div>
      <div nz-col nzSpan="8">
        large =>
        <span cell value="large" size="large"></span>
      </div>
      <div nz-col nzSpan="8">
        small =>
        <span cell value="small" size="small"></span>
      </div>
      <div nz-col nzSpan="8">
        tooltip =>
        <span cell value="tooltip" [options]="{ tooltip: 'Tooltip' }"></span>
      </div>
      <div nz-col nzSpan="8">
        loading =>
        <span cell value="Done" [loading]="loading"></span>
        <a (click)="loading = !loading" class="ml-md">Change</a>
      </div>
      <div nz-col nzSpan="8">
        Async =>
        <span cell [value]="async" [loading]="asyncLoading"></span>
        <a *ngIf="!asyncLoading" (click)="again()" class="ml-md">Again</a>
      </div>
      <div nz-col nzSpan="8"> Unit => <span cell [value]="{ text: '100', unit: '元' }"></span> </div>
      <div nz-col nzSpan="8">
        custom widget =>
        <span
          cell
          value="https://randomuser.me/api/portraits/thumb/women/47.jpg"
          [options]="{ widget: { key: 'test', data: 'new url' } }"
        ></span>
      </div>
    </div>
  `,
  styles: [
    `
      :host ::ng-deep .ant-col {
        margin-bottom: 8px;
      }
    `
  ]
})
export class DemoComponent implements OnInit {
  value: unknown = 'string';
  checkbox = false;
  radio = true;
  disabled = false;
  yn = true;
  default: string = '-';
  defaultCondition: unknown = '*';
  options?: CellOptions;
  baseList = ['string', true, false, 100, 1000000, new Date()];
  typeList = ['primary', 'success', 'danger', 'warning'];
  now = new Date();
  day3 = subDays(new Date(), 3);
  HTML = `<strong>Strong</string>`;
  status: CellBadge = {
    WAIT: { text: '等待' },
    FINISHED: { text: '完成', color: 'success' }
  };
  loading = true;
  asyncLoading = true;
  async?: CellFuValue;

  ngOnInit(): void {
    this.again();
  }

  refresh(): void {
    this.value = new Date();
  }

  again(): void {
    this.asyncLoading = true;
    this.async = (() =>
      of({ text: `${+new Date()}` }).pipe(
        delay(1000 * 2),
        finalize(() => {
          this.asyncLoading = false;
        })
      )) as CellFuValue;
  }
}
```
