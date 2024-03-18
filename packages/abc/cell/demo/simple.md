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
import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { delay, finalize, of, take } from 'rxjs';

import { subDays } from 'date-fns';

import { CellBadge, CellFuValue, CellModule, CellOptions, CellRenderType } from '@delon/abc/cell';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-demo',
  template: `
    <div nz-row nzGutter="16" class="mt-md">
      @for (i of baseList; track $index) {
        <div nz-col nzSpan="8"> {{ i | json }} => <cell [value]="i" /> </div>
      }
      <div nz-col nzSpan="8"> date-fn => <cell [value]="day3" [options]="{ date: { format: 'fn' } }" /> </div>
      <div nz-col nzSpan="8"> mega => <cell value="15900000000" size="large" [options]="{ type: 'mega' }" /> </div>
      <div nz-col nzSpan="8"> mask => <cell value="15900000000" [options]="{ mask: '999****9999' }" /> </div>
      <div nz-col nzSpan="8"> currency => <cell value="100000" [options]="{ unit: '$' }" /> </div>
      <div nz-col nzSpan="8"> cny => <cell value="100000" [options]="{ type: 'cny' }" /> </div>
      <div nz-col nzSpan="8">
        yn => <cell [value]="yn" [options]="{ type: 'boolean' }" />
        <a (click)="yn = !yn">Change Value</a>
      </div>
      <div nz-col nzSpan="8">
        img =>
        <cell
          value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          [options]="{ type: 'img' }"
        />
      </div>
      <div nz-col nzSpan="8">
        img preview =>
        <cell value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" [options]="bigImg" />
      </div>
      <div nz-col nzSpan="8">
        img list =>
        <cell
          [value]="[
            'https://randomuser.me/api/portraits/thumb/women/46.jpg',
            'https://randomuser.me/api/portraits/thumb/women/47.jpg'
          ]"
          [options]="{ type: 'img' }"
        />
      </div>
      <div nz-col nzSpan="8">
        link =>
        <cell value="Link" [options]="{ link: { url: 'https://ng-alain.com' } }" [disabled]="disabled" />
        <a (click)="disabled = !disabled" class="ml-sm">Change Disabled</a>
      </div>
      <div nz-col nzSpan="8">
        html =>
        <cell [value]="HTML" [options]="{ type: 'html' }" />
      </div>
      <div nz-col nzSpan="8">
        SafeHtml =>
        <cell [value]="safeHtml" />
        <a (click)="updateSafeHtml()" class="ml-sm">updateSafeHtml</a>
      </div>
      <div nz-col nzSpan="8">
        badge =>
        <cell value="FINISHED" [options]="{ badge: { data: status } }" />
      </div>
      <div nz-col nzSpan="8">
        tag =>
        <cell value="WAIT" [options]="{ tag: { data: status } }" />
      </div>
      <div nz-col nzSpan="8">
        checkbox =>
        <cell
          [(value)]="checkbox"
          [options]="{ type: 'checkbox', tooltip: 'Tooltip', checkbox: { label: 'Label' } }"
          [disabled]="disabled"
        />
        <a (click)="disabled = !disabled" class="ml-sm">Change Disabled</a>
      </div>
      <div nz-col nzSpan="8">
        radio =>
        <cell
          [(value)]="radio"
          [options]="{ type: 'radio', tooltip: 'Tooltip', radio: { label: 'Radio' } }"
          [disabled]="disabled"
        />
        <a (click)="radio = !radio">Change Value</a>
        <a (click)="disabled = !disabled" class="ml-sm">Change Disabled</a>
      </div>
      <div nz-col nzSpan="8">
        enum =>
        <cell [(value)]="enumValue" [options]="{ enum }" />
        <a (click)="enumValue = enumValue === 1 ? 2 : 1">Change Value</a>(enum value: {{ enumValue }})
      </div>
      <div nz-col nzSpan="8">
        default =>
        <cell [value]="null" />
      </div>
      @for (i of typeList; track $index) {
        <div nz-col nzSpan="8">
          {{ i }} =>
          <cell [value]="i" [options]="{ renderType: i }" />
        </div>
      }
      <div nz-col nzSpan="8">
        size =>
        <cell value="small" size="small" />, <cell value="default" />,
        <cell value="large" size="large" />
      </div>
      <div nz-col nzSpan="8">
        tooltip =>
        <cell value="tooltip" [options]="{ tooltip: 'Tooltip' }" />
      </div>
      <div nz-col nzSpan="8">
        loading =>
        <cell value="Done" [loading]="loading" />
        <a (click)="loading = !loading" class="ml-md">Change</a>
      </div>
      <div nz-col nzSpan="8">
        Async =>
        <cell [value]="async" [loading]="asyncLoading" />
        @if (!asyncLoading) {
          <a (click)="again()" class="ml-md">Again</a>
        }
      </div>
      <div nz-col nzSpan="8"> Unit => <cell value="3" [options]="{ unit: '人' }" /> </div>
      <div nz-col nzSpan="8"> Text Unit => <cell [value]="{ text: '100', unit: '元' }" /> </div>
      <div nz-col nzSpan="8">
        custom widget =>
        <cell [value]="imageValue" [options]="{ widget: { key: 'test', data: 'new url' } }" />
        <a (click)="refreshImage()">Refresh Image</a>
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CellModule, FormsModule, JsonPipe, NzGridModule]
})
export class DemoComponent implements OnInit {
  private readonly ds = inject(DomSanitizer);
  private readonly cdr = inject(ChangeDetectorRef);
  value: unknown = 'string';
  imageValue = 'https://randomuser.me/api/portraits/thumb/women/47.jpg';
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
    WAIT: { text: 'Wait', tooltip: 'Refers to waiting for the user to ship' },
    FINISHED: { text: 'Done', color: 'success' }
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

  refreshImage(): void {
    this.imageValue = `https://randomuser.me/api/portraits/thumb/women/${Math.floor(Math.random() * 50) + 10}.jpg`;
    this.cdr.detectChanges();
  }
}
```
