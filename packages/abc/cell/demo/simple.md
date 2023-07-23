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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { delay, finalize, of, take } from 'rxjs';

import { subDays } from 'date-fns';

import { CellBadge, CellFuValue, CellOptions, CellRenderType } from '@delon/abc/cell';

@Component({
  selector: 'app-demo',
  template: `
    <div nz-row nzGutter="16" class="mt-md">
      <div *ngFor="let i of baseList" nz-col nzSpan="8"> {{ i | json }} => <cell [value]="i"></cell> </div>
      <div nz-col nzSpan="8"> date-fn => <cell [value]="day3" [options]="{ date: { format: 'fn' } }"></cell> </div>
      <div nz-col nzSpan="8"> mega => <cell value="15900000000" size="large" [options]="{ type: 'mega' }"></cell> </div>
      <div nz-col nzSpan="8"> mask => <cell value="15900000000" [options]="{ mask: '999****9999' }"></cell> </div>
      <div nz-col nzSpan="8"> currency => <cell value="100000" [options]="{ type: 'currency' }"></cell> </div>
      <div nz-col nzSpan="8"> cny => <cell value="100000" [options]="{ type: 'cny' }"></cell> </div>
      <div nz-col nzSpan="8">
        yn => <cell [value]="yn" [options]="{ type: 'boolean' }"></cell>
        <a (click)="yn = !yn">Change Value</a>
      </div>
      <div nz-col nzSpan="8">
        img =>
        <cell
          value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          [options]="{ type: 'img' }"
        ></cell>
      </div>
      <div nz-col nzSpan="8">
        img preview =>
        <cell
          value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          [options]="bigImg"
        ></cell>
      </div>
      <div nz-col nzSpan="8">
        img list =>
        <cell
          [value]="[
            'https://randomuser.me/api/portraits/thumb/women/46.jpg',
            'https://randomuser.me/api/portraits/thumb/women/47.jpg'
          ]"
          [options]="{ type: 'img' }"
        ></cell>
      </div>
      <div nz-col nzSpan="8">
        link =>
        <cell value="Link" [options]="{ link: { url: 'https://ng-alain.com' } }" [disabled]="disabled"></cell>
        <a (click)="disabled = !disabled" class="ml-sm">Change Disabled</a>
      </div>
      <div nz-col nzSpan="8">
        html =>
        <cell [value]="HTML" [options]="{ type: 'html' }"></cell>
      </div>
      <div nz-col nzSpan="8">
        SafeHtml =>
        <cell [value]="safeHtml"></cell>
        <a (click)="updateSafeHtml()" class="ml-sm">updateSafeHtml</a>
      </div>
      <div nz-col nzSpan="8">
        badge =>
        <cell value="FINISHED" [options]="{ badge: { data: status } }"></cell>
      </div>
      <div nz-col nzSpan="8">
        tag =>
        <cell value="WAIT" [options]="{ tag: { data: status } }"></cell>
      </div>
      <div nz-col nzSpan="8">
        checkbox =>
        <cell
          [(value)]="checkbox"
          [options]="{ type: 'checkbox', tooltip: 'Tooltip', checkbox: { label: 'Label' } }"
          [disabled]="disabled"
        ></cell>
        <a (click)="disabled = !disabled" class="ml-sm">Change Disabled</a>
      </div>
      <div nz-col nzSpan="8">
        radio =>
        <cell
          [(value)]="radio"
          [options]="{ type: 'radio', tooltip: 'Tooltip', radio: { label: 'Radio' } }"
          [disabled]="disabled"
        ></cell>
        <a (click)="radio = !radio">Change Value</a>
        <a (click)="disabled = !disabled" class="ml-sm">Change Disabled</a>
      </div>
      <div nz-col nzSpan="8">
        enum =>
        <cell [(value)]="enumValue" [options]="{ enum }"></cell>
        <a (click)="enumValue = enumValue === 1 ? 2 : 1">Change Value</a>(enum value: {{ enumValue }})
      </div>
      <div nz-col nzSpan="8">
        default =>
        <cell [value]="null"></cell>
      </div>
      <div *ngFor="let i of typeList" nz-col nzSpan="8">
        {{ i }} =>
        <cell [value]="i" [options]="{ renderType: i }"></cell>
      </div>
      <div nz-col nzSpan="8">
        size =>
        <cell value="small" size="small"></cell>, <cell value="default"></cell>,
        <cell value="large" size="large"></cell>
      </div>
      <div nz-col nzSpan="8">
        tooltip =>
        <cell value="tooltip" [options]="{ tooltip: 'Tooltip' }"></cell>
      </div>
      <div nz-col nzSpan="8">
        loading =>
        <cell value="Done" [loading]="loading"></cell>
        <a (click)="loading = !loading" class="ml-md">Change</a>
      </div>
      <div nz-col nzSpan="8">
        Async =>
        <cell [value]="async" [loading]="asyncLoading"></cell>
        <a *ngIf="!asyncLoading" (click)="again()" class="ml-md">Again</a>
      </div>
      <div nz-col nzSpan="8"> Unit => <cell value="3" [options]="{ unit: '人' }"></cell> </div>
      <div nz-col nzSpan="8"> Text Unit => <cell [value]="{ text: '100', unit: '元' }"></cell> </div>
      <div nz-col nzSpan="8">
        custom widget =>
        <cell
          value="https://randomuser.me/api/portraits/thumb/women/47.jpg"
          [options]="{ widget: { key: 'test', data: 'new url' } }"
        ></cell>
      </div>
    </div>
  `,
  styles: [
    `
      :host ::ng-deep .ant-col {
        margin-bottom: 8px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  typeList: CellRenderType[] = ['primary', 'success', 'danger', 'warning'];
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
  safeHtml = this.ds.bypassSecurityTrustHtml(`<strong>Strong Html</strong>`);
  enum = { 1: 'Success', 2: 'Error' };
  enumValue = 1;
  bigImg: CellOptions = {
    img: {
      size: 32,
      big: true // 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  };

  constructor(
    private ds: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.again();
  }

  refresh(): void {
    this.value = new Date();
    this.cdr.detectChanges();
  }

  again(): void {
    this.asyncLoading = true;
    this.async = (() =>
      of({ text: `${+new Date()}` }).pipe(
        take(1),
        delay(1000 * 1),
        finalize(() => {
          this.asyncLoading = false;
          this.cdr.detectChanges();
        })
      )) as CellFuValue;
    this.cdr.detectChanges();
  }

  updateSafeHtml(): void {
    this.safeHtml = this.ds.bypassSecurityTrustHtml(`alert('a');<script>alert('a')</script>`);
    this.cdr.detectChanges();
  }
}
```
