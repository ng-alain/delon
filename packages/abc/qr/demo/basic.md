---
order: 1
title:
  zh-CN: 基础样例
  en-US: Basic Usage
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <h3>{{ type }}</h3>
    <qr [value]="value"></qr>
    <div>
      <button *ngFor="let t of types" nz-button (click)="change(t)">{{ t }}</button>
    </div>
  `,
})
export class DemoComponent implements OnInit {
  types = ['url', 'email', 'tel', 'cn', 'vcard'];
  value = '';
  type = '';
  change(type: string) {
    this.type = type;
    switch (type) {
      case 'url':
        this.value = 'https://ng-alain.com/';
        break;
      case 'email':
        this.value = 'mailto:cipchk@qq.com';
        break;
      case 'tel':
        this.value = 'tel:15900000000';
        break;
      case 'cn':
        this.value = '你好🇨🇳';
        break;
      case 'vcard':
        this.value = `BEGIN:VCARD
VERSION:4.0
N:色;卡;;Mr.;
FN:卡色
ORG:NG-ALAIN
TITLE:NG-ALAIN
PHOTO;MEDIATYPE=image/svg:https://ng-alain.com/assets/img/logo-color.svg
TEL;TYPE=work,voice;VALUE=uri:tel:15900000000
ADR;TYPE=WORK;PREF=1;LABEL="中国上海":;;上海;中国
EMAIL:cipchk@qq.com
x-qq:94458893
END:VCARD`;
        break;
    }
  }

  ngOnInit(): void {
    this.change('url');
  }
}
```
