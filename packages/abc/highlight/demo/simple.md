---
order: 1
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzHighlightModule } from 'ng-zorro-antd/core/highlight';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-demo',
  template: `
    <p class="mb-md" [innerHTML]="str | nzHighlight: searchValue : 'i' : 'highlight'"></p>
    <nz-input-group nzAddOnBefore="String" class="mb-md">
      <input type="text" nz-input [(ngModel)]="str" />
    </nz-input-group>
    <nz-input-group nzAddOnBefore="Search Value">
      <input type="text" nz-input [(ngModel)]="searchValue" />
    </nz-input-group>
  `,
  styles: [
    `
      :host ::ng-deep .highlight {
        color: #f50;
      }
    `
  ],
  standalone: true,
  imports: [NzHighlightModule, NzInputModule, FormsModule]
})
export class DemoComponent {
  str = [...Array(26)].map((_, i) => (i + 10).toString(36)).join('');
  searchValue = 'mn';
}
```
