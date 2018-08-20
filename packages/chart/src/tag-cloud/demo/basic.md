---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

基础用法。

```ts
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
    <g2-tag-cloud [data]="tags" [height]="200"></g2-tag-cloud>`
})
export class DemoComponent implements OnInit {
    tags: any[] = [];
    ngOnInit(): void {
        for (let i = 0; i < 50; i += 1) {
            this.tags.push({
                name: `TagClout-Title-${i}`,
                value: Math.floor((Math.random() * 50)) + 20,
            });
        }
        // mock big number
        this.tags.push({ name: `我最大`, value: 1500 });
    }
}
```
