---
order: 2
title:
  zh-CN: 定制化
  en-US: Customization
---

## zh-CN

提供丰富接口用于定制化。

## en-US

Provide rich interfaces for customization.

```ts

import { Component, OnInit, ViewChild } from '@angular/core';
import { PdfChangeEvent, PdfComponent, PdfZoomScale } from '@delon/abc/pdf';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-demo',
  template: `
    <div nz-row nzGutter="16">
      <div nz-col nzSpan="8">
        <div se-container col="1">
          <se label="Url of the pdf file (Press enter to run)">
            <input #url nz-input [ngModel]="src" (keyup.enter)="uploadSrc(url.value)" />
          </se>
          <se label="Local of the pdf file">
            <nz-upload nzAccept=".pdf" [nzBeforeUpload]="beforeUpload">
              <button nz-button><i nz-icon nzType="upload"></i>Select File</button>
            </nz-upload>
          </se>
          <se label="Original size">
            <nz-switch [(ngModel)]="originalSize"></nz-switch>
          </se>
          <se *ngIf="originalSize" label="Fit to page">
            <nz-switch [(ngModel)]="fitToPage"></nz-switch>
          </se>
          <se label="Auto size">
            <nz-switch [(ngModel)]="autoReSize"></nz-switch>
          </se>
          <se label="Show All Pages">
            <nz-switch [(ngModel)]="showAll" (ngModelChange)="changeShowAllPages($event)"></nz-switch>
          </se>
          <se *ngIf="!originalSize" label="Zoom Scale">
            <nz-select [(ngModel)]="zoomScale">
              <nz-option nzValue="page-height" nzLabel="Page Height"></nz-option>
              <nz-option nzValue="page-fit" nzLabel="Page Fit"></nz-option>
              <nz-option nzValue="page-width" nzLabel="Page Width"></nz-option>
            </nz-select>
          </se>
          <se label="Zoom">
            <nz-input-number [(ngModel)]="zoom" [nzStep]="0.1"></nz-input-number>
          </se>
          <se *ngIf="showAll" label="Stick to page ">
            <nz-switch [(ngModel)]="stickToPage"></nz-switch>
          </se>
          <se *ngIf="stickToPage" label="Page">
            <nz-pagination [(nzPageIndex)]="pi" [nzPageSize]="1" [nzTotal]="total" nzSimple></nz-pagination>
          </se>
          <se label="Rotation">
            <nz-input-number [(ngModel)]="rotation" [nzStep]="90"></nz-input-number>
          </se>
          <se label="Outline">
            <nz-switch [(ngModel)]="outline"></nz-switch>
          </se>
          <se *ngIf="outline" [label]="null">
            <nz-empty *ngIf="outlineList == null"></nz-empty>
            <ng-template #outlineTpl let-ls let-level="level">
              <li *ngFor="let i of ls" [style.paddingLeft.px]="level * 16">
                <a (click)="navigateTo(i.dest)">{{ i.title }}</a>
                <ul *ngIf="i.items && i.items.length > 0">
                  <ng-container *ngTemplateOutlet="outlineTpl; context: { $implicit: i.items, level: level + 1 }"></ng-container>
                </ul>
              </li>
            </ng-template>
            <ul *ngIf="outlineList">
              <ng-container *ngTemplateOutlet="outlineTpl; context: { $implicit: outlineList, level: 0 }"></ng-container>
            </ul>
          </se>
          <se label="Search pdf">
            <input #qIpt nz-input placeholder="Search..." (input)="search$.next(qIpt.value)" (keyup.enter)="search$.next(qIpt.value)" />
          </se>
        </div>
      </div>
      <div nz-col nzSpan="16" style="background-color: #fafafa; padding: 32px 0;">
        <pdf
          #pdf
          [src]="src"
          [pi]="pi"
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
        ></pdf>
      </div>
    </div>
  `,
})
export class DemoComponent implements OnInit {
  @ViewChild('pdf') private comp: PdfComponent;
  src = `https://raw.githubusercontent.com/mozilla/pdf.js/master/web/compressed.tracemonkey-pldi-09.pdf`;
  pi = 1;
  total = 0;
  stickToPage = true;
  originalSize = true;
  fitToPage = false;
  showAll = true;
  zoomScale: PdfZoomScale = 'page-width';
  rotation = 0;
  zoom = 1;
  autoReSize = true;
  outline = false;
  outlineList: any;
  q = '';
  search$ = new Subject<string>();

  ngOnInit(): void {
    this.search$.subscribe((q: string) => {
      if (q !== this.q) {
        this.q = q;
        this.comp.findController.executeCommand('find', {
          query: this.q,
          highlightAll: true,
        });
      } else {
        this.comp.findController.executeCommand('findagain', {
          query: this.q,
          highlightAll: true,
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

  changeShowAllPages(_val: boolean): void {
    this.stickToPage = true;
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.src = e.target.result;
    };
    reader.readAsArrayBuffer(file as any);
    return false;
  };

  loadOutline(): void {
    this.comp.pdf.getOutline().then((outline: any[]) => {
      this.outlineList = outline;
    });
  }

  navigateTo(dest: any): void {
    this.comp.linkService.navigateTo(dest);
  }
}
```
