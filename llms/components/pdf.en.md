---
type: Basic
order: 3
title: pdf
subtitle: Pdf
cols: 1
module: import { PdfModule } from '@delon/abc/pdf';
---

Pdf view based on [pdf.js](https://mozilla.github.io/pdf.js/).

pdf.js libary is lazy loading by default，you can change the default root CDN path via [Global Configuration](/docs/global-config).

> The component inspired by [ng2-pdf-viewer](https://github.com/VadimDez/ng2-pdf-viewer).

**Use local path**

```bash
npm i -S pdfjs-dist
```

```json
// angular.json
{
  "glob": "{build,web}/**",
  "input": "./node_modules/pdfjs-dist/",
  "ignore": ["*.js.map", "*.d.ts"],
  "output": "assets/pdfjs/"
}
```

```ts
// global-config.module.ts
const alainConfig: AlainConfig = {
  pdf: {
    lib: '/assets/pdfjs/'
  }
};
```

## API

### pdf

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[src]` | Specify path of the pdf | `string, object, UInt8Array` | - | - |
| `[pi]` | Current page | `number` | `1` | - |
| `[showAll]` | Whether to show all pages | `boolean` | `true` | ✅ |
| `[renderText]` | Enable text rendering, allows to select text | `boolean` | `true` | ✅ |
| `[textLayerMode]` | Text rendering mode | `PdfTextLayerMode` | `ENABLE` | - |
| `[showBorders]` | Show page borders | `boolean` | `false` | ✅ |
| `[stickToPage]` | Sticks view to the page | `boolean` | `false` | - |
| `[originalSize]` | Control document display size, `true` size will be as same as original document, `false` size will be as same as container block | `boolean` | `true` | ✅ |
| `[fitToPage]` | Works in combination with `originalSize`. You can show your document in original size, and make sure that it's not bigger then container block. | `boolean` | `false` | ✅ |
| `[zoom]` | Zoom pdf | `number` | `1` | - |
| `[zoomScale]` | Defines how the Zoom scale is computed | `PdfZoomScale` | `page-width` | - |
| `[rotation]` | Rotate PDF, Allowed step is 90 degree, ex. 0, 90, 180 | `number` | `0` | - |
| `[autoReSize]` | Turn on or off auto resize | `boolean` | `true` | ✅ |
| `[externalLinkTarget]` | Link target of the external | `PdfExternalLinkTarget` | `BLANK` | - |
| `[delay]` | Delayed rendering, unit: ms | `number` | `0` | - |
| `(change)` | change event | `EventEmitter<PdfChangeEvent>` | - | - |

### Component properties

Used API interfaces.

| Name | Description |
| --- | ---- |
| `pdf` | Current PDF instance |
| `eventBus` | Event bus for PDF files, eg: find document, etc. |
| `findController` | Find controller, now instead by `eventBus` |
| `pageViewer` | View Controls |
| `linkService` | Navigation Service |

## FAQ

### Why need to specify the height of the pdf component

When `showAll` is enabled, if you want to make the page number control effective, you need to ensure that the height of the component is a valid value.

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component } from '@angular/core';

import { PdfComponent, type PdfChangeEvent } from '@delon/abc/pdf';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'components-pdf-basic',
  template: `
    <button nz-button nzType="primary" (click)="src = src === one ? two : one">Change File</button>
    <pdf [src]="src" style="height: 300px" (change)="handle($event)" />
  `,
  imports: [NzButtonModule, PdfComponent]
})
export class ComponentsPdfBasic {
  one = `https://raw.githubusercontent.com/mozilla/pdf.js/master/web/compressed.tracemonkey-pldi-09.pdf`;
  two = `https://raw.githubusercontent.com/mozilla/pdf.js/master/examples/learning/helloworld.pdf`;
  src = this.one;

  handle(ev: PdfChangeEvent): void {
    console.log(ev);
  }
}
```

### Customization

Provide rich interfaces for customization.

```typescript
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

import { PdfChangeEvent, PdfComponent, PdfZoomScale } from '@delon/abc/pdf';
import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';

@Component({
  selector: 'components-pdf-design',
  template: `
    <div nz-row [nzGutter]="16">
      <div nz-col nzSpan="8">
        <div se-container col="1">
          <se label="Url of the pdf file (Press enter to run)">
            <input #url nz-input [ngModel]="src" (keyup.enter)="uploadSrc(url.value)" />
          </se>
          <se label="Local of the pdf file">
            <nz-upload nzAccept=".pdf" [nzBeforeUpload]="beforeUpload">
              <button nz-button><nz-icon nzType="upload" />Select File</button>
            </nz-upload>
          </se>
          <se label="Render Text">
            <nz-switch [(ngModel)]="renderText" />
          </se>
          <se label="Original size">
            <nz-switch [(ngModel)]="originalSize" />
          </se>
          @if (originalSize) {
            <se label="Fit to page">
              <nz-switch [(ngModel)]="fitToPage" />
            </se>
          }
          <se label="Auto size">
            <nz-switch [(ngModel)]="autoReSize" />
          </se>
          <se label="Show All Pages">
            <nz-switch [(ngModel)]="showAll" (ngModelChange)="changeShowAllPages($event)" />
          </se>
          @if (!originalSize) {
            <se label="Zoom Scale">
              <nz-select [(ngModel)]="zoomScale">
                <nz-option nzValue="page-height" nzLabel="Page Height" />
                <nz-option nzValue="page-fit" nzLabel="Page Fit" />
                <nz-option nzValue="page-width" nzLabel="Page Width" />
              </nz-select>
            </se>
          }
          <se label="Zoom">
            <nz-input-number [(ngModel)]="zoom" [nzStep]="0.1" />
          </se>
          @if (showAll) {
            <se label="Stick to page ">
              <nz-switch [(ngModel)]="stickToPage" />
            </se>
          }
          @if (stickToPage) {
            <se label="Page">
              <nz-pagination [(nzPageIndex)]="pi" [nzPageSize]="1" [nzTotal]="total" nzSimple />
            </se>
          }
          <se label="Rotation">
            <nz-input-number [(ngModel)]="rotation" [nzStep]="90" />
          </se>
          <se label="Outline">
            <nz-switch [(ngModel)]="outline" />
          </se>
          @if (outline) {
            <se [label]="null">
              @if (outlineList === null) {
                <nz-empty />
              }
              <ng-template #outlineTpl let-ls let-level="level">
                @for (i of ls; track $index) {
                  <li [style.paddingLeft.px]="level * 16">
                    <a (click)="navigateTo(i.dest)">{{ i.title }}</a>
                    @if (i.items && i.items.length > 0) {
                      <ul>
                        <ng-container
                          *ngTemplateOutlet="outlineTpl; context: { $implicit: i.items, level: level + 1 }"
                        />
                      </ul>
                    }
                  </li>
                }
              </ng-template>
              @if (outlineList) {
                <ul>
                  <ng-container *ngTemplateOutlet="outlineTpl; context: { $implicit: outlineList, level: 0 }" />
                </ul>
              }
            </se>
          }
          <se label="Search pdf">
            <input
              #qIpt
              nz-input
              placeholder="Search..."
              (input)="search$.next(qIpt.value)"
              (keyup.enter)="search$.next(qIpt.value)"
            />
          </se>
        </div>
      </div>
      <div nz-col nzSpan="16" style="background-color: #fafafa; padding: 32px 0;">
        <pdf
          #pdf
          [src]="src"
          [pi]="pi"
          [renderText]="renderText"
          [showAll]="showAll"
          [originalSize]="originalSize"
          [fitToPage]="fitToPage"
          [stickToPage]="stickToPage"
          [zoomScale]="zoomScale"
          [zoom]="zoom"
          [rotation]="rotation"
          [autoReSize]="autoReSize"
          (change)="change($event)"
          style="height: 600px"
        />
      </div>
    </div>
  `,
  imports: [
    NzButtonModule,
    PdfComponent,
    NzGridModule,
    NzInputModule,
    FormsModule,
    NzUploadModule,
    SEModule,
    NzIconModule,
    NzSwitchModule,
    NzSelectModule,
    NzInputNumberModule,
    NzPaginationModule,
    NzEmptyModule,
    NgTemplateOutlet
  ]
})
export class ComponentsPdfDesign implements OnInit {
  @ViewChild('pdf') private comp!: PdfComponent;
  src = `https://raw.githubusercontent.com/mozilla/pdf.js/master/web/compressed.tracemonkey-pldi-09.pdf`;
  pi = 1;
  total = 0;
  renderText = true;
  stickToPage = true;
  originalSize = true;
  fitToPage = false;
  showAll = true;
  zoomScale: PdfZoomScale = 'page-width';
  rotation = 0;
  zoom = 1;
  autoReSize = true;
  outline = false;
  outlineList: NzSafeAny = null;
  q = '';
  search$ = new Subject<string>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.search$.subscribe((q: string) => {
      if (q !== this.q) {
        this.q = q;
        this.comp.eventBus?.dispatch('find', {
          query: this.q,
          highlightAll: true
        });
      } else {
        this.comp.eventBus?.dispatch('findagain', {
          query: this.q,
          highlightAll: true
        });
      }
    });
  }

  change(ev: PdfChangeEvent): void {
    switch (ev.type) {
      case 'loaded':
        this.total = ev.total!;
        this.loadOutline();
        break;
      case 'pi':
        this.pi = ev.pi!;
        break;
    }

    if (ev.type !== 'load-progress') console.log(ev);
  }

  uploadSrc(src: string): void {
    this.src = src;
  }

  changeShowAllPages(v: boolean): void {
    this.stickToPage = true;
    console.log('changeShowAllPages', v);
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      this.src = e.target!.result as string;
      this.cdr.detectChanges();
    };
    reader.readAsArrayBuffer(file as unknown as Blob);
    return false;
  };

  loadOutline(): void {
    this.comp.pdf?.getOutline().then((outline: NzSafeAny) => {
      this.outlineList = outline;
    });
  }

  navigateTo(dest: string): void {
    this.comp.linkService?.goToDestination(dest);
  }
}
```
