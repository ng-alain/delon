---
order: 2
title:
  zh-CN: 设计器
  en-US: Designer
---

## zh-CN

利用 `change` 可以回调二维码 dataURL 值。

## en-US

Get QR code (dataURL value) via `change`.

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { QRModule } from '@delon/abc/qr';
import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-demo',
  template: `
    <div nz-row [nzGutter]="24">
      <div nz-col [nzSpan]="8" class="text-center">
        <qr
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
          style="border:1px solid #999"
        />
      </div>
      <div nz-col [nzSpan]="16">
        <se-container col="1">
          <se label="背景">
            <nz-input-group>
              <div nz-row [nzGutter]="8">
                <div nz-col nzSpan="12">
                  <input nz-input type="color" [(ngModel)]="background" [ngModelOptions]="{ standalone: true }" />
                </div>
                <div nz-col nzSpan="12">
                  <nz-input-number
                    [(ngModel)]="backgroundAlpha"
                    [nzMin]="0"
                    [nzMax]="1"
                    [nzStep]="0.1"
                    [ngModelOptions]="{ standalone: true }"
                  />
                </div>
              </div>
            </nz-input-group>
          </se>
          <se label="前景">
            <nz-input-group>
              <div nz-row [nzGutter]="8">
                <div nz-col nzSpan="12">
                  <input nz-input type="color" [(ngModel)]="foreground" [ngModelOptions]="{ standalone: true }" />
                </div>
                <div nz-col nzSpan="12">
                  <nz-input-number
                    [(ngModel)]="foregroundAlpha"
                    [nzMin]="0"
                    [nzMax]="1"
                    [nzStep]="0.1"
                    [ngModelOptions]="{ standalone: true }"
                  />
                </div>
              </div>
            </nz-input-group>
          </se>
          <se label="误差">
            <nz-select [(ngModel)]="level" [ngModelOptions]="{ standalone: true }">
              <nz-option nzValue="L" nzLabel="L" />
              <nz-option nzValue="M" nzLabel="M" />
              <nz-option nzValue="Q" nzLabel="Q" />
              <nz-option nzValue="H" nzLabel="H" />
            </nz-select>
          </se>
          <se label="Mime">
            <nz-select [(ngModel)]="mime" [ngModelOptions]="{ standalone: true }">
              <nz-option nzValue="image/png" nzLabel="image/png" />
              <nz-option nzValue="image/jpeg" nzLabel="image/jpeg" />
              <nz-option nzValue="image/gif" nzLabel="image/gif" />
            </nz-select>
          </se>
          <se label="内边距">
            <nz-input-number [(ngModel)]="padding" [ngModelOptions]="{ standalone: true }" [nzMin]="0" [nzMax]="100" />
            px
          </se>
          <se label="大小">
            <nz-input-number
              [(ngModel)]="size"
              [ngModelOptions]="{ standalone: true }"
              [nzMin]="100"
              [nzMax]="1000"
              [nzStep]="padding"
            />
            px
          </se>
        </se-container>
      </div>
    </div>
  `,
  standalone: true,
  imports: [
    QRModule,
    NzGridModule,
    SEModule,
    NzInputModule,
    NzInputNumberModule,
    NzButtonModule,
    FormsModule,
    NzGridModule,
    NzSelectModule
  ]
})
export class DemoComponent {
  value = 'https://ng-alain.com/';
  background = '#ffffff';
  backgroundAlpha = 1.0;
  foreground = '#000000';
  foregroundAlpha = 1.0;
  level = 'L';
  mime = 'image/png';
  padding = 10;
  size = 220;

  change(dataURL: string): void {
    console.log(dataURL);
  }
}
```
