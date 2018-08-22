---
order: 2
title: 设计器
---

通过 `QRService` 操作更多参数；`change` 可以回调二维码 dataURL 值。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <nz-row [nzGutter]="24">
    <nz-col [nzSpan]="8" class="text-center">
      <na-qr
        [value]="value"
        [background]="background"
        [backgroundAlpha]="backgroundAlpha"
        [foreground]="foreground"
        [foregroundAlpha]="foregroundAlpha"
        [level]="level"
        [mime]="mime"
        [padding]="padding"
        [size]="size"
        (change)="change($event)"
        style="border:1px solid #999"></na-qr>
    </nz-col>
    <nz-col [nzSpan]="16">
    <form nz-form>
      <nz-form-item>
        <nz-form-label [nzSpan]="8">背景</nz-form-label>
        <nz-form-control [nzSpan]="16">
          <nz-input-group>
            <div nz-col nzSpan="12">
              <input nz-input type="color" [(ngModel)]="background" [ngModelOptions]="{standalone: true}">
            </div>
            <div nz-col nzSpan="12">
              <nz-input-number [(ngModel)]="backgroundAlpha" [nzMin]="0" [nzMax]="1" [nzStep]="0.1" [ngModelOptions]="{standalone: true}"></nz-input-number>
            </div>
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="8">前景</nz-form-label>
        <nz-form-control [nzSpan]="16">
          <nz-input-group>
            <div nz-col nzSpan="12">
              <input nz-input type="color" [(ngModel)]="foreground" [ngModelOptions]="{standalone: true}">
            </div>
            <div nz-col nzSpan="12">
              <nz-input-number [(ngModel)]="foregroundAlpha" [nzMin]="0" [nzMax]="1" [nzStep]="0.1" [ngModelOptions]="{standalone: true}"></nz-input-number>
            </div>
          </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="8">误差</nz-form-label>
        <nz-form-control [nzSpan]="16">
          <nz-select [(ngModel)]="level" [ngModelOptions]="{standalone: true}">
            <nz-option nzValue="L" nzLabel="L"></nz-option>
            <nz-option nzValue="M" nzLabel="M"></nz-option>
            <nz-option nzValue="Q" nzLabel="Q"></nz-option>
            <nz-option nzValue="H" nzLabel="H"></nz-option>
          </nz-select>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="8">Mime</nz-form-label>
        <nz-form-control [nzSpan]="16">
          <nz-select [(ngModel)]="mime" [ngModelOptions]="{standalone: true}">
            <nz-option nzValue="image/png" nzLabel="image/png"></nz-option>
            <nz-option nzValue="image/jpeg" nzLabel="image/jpeg"></nz-option>
            <nz-option nzValue="image/gif" nzLabel="image/gif"></nz-option>
          </nz-select>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="8">内边距</nz-form-label>
        <nz-form-control [nzSpan]="16">
          <nz-input-number [(ngModel)]="padding" [ngModelOptions]="{standalone: true}" [nzMin]="0" [nzMax]="100"></nz-input-number>px
        </nz-form-control>
      </nz-form-item>
      <nz-form-item>
        <nz-form-label [nzSpan]="8">大小</nz-form-label>
        <nz-form-control [nzSpan]="16">
          <nz-input-number [(ngModel)]="size" [ngModelOptions]="{standalone: true}" [nzMin]="100" [nzMax]="1000" [nzStep]="padding"></nz-input-number>px
        </nz-form-control>
      </nz-form-item>
    </form>
    </nz-col>
  </nz-row>
  `,
})
export class DemoComponent {
  value = 'https://ng-alain.com/';
  background = 'white';
  backgroundAlpha = 1.0;
  foreground = 'black';
  foregroundAlpha = 1.0;
  level = 'L';
  mime = 'image/png';
  padding = 10;
  size = 220;

  change(dataURL: string) {
    console.log(dataURL);
  }
}
```
