---
order: 1
title: 基础信息
---

用于获取打印服务器（包括：远程）信息。

```ts
import { Component } from '@angular/core';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';
import { LodopService, Lodop } from '@delon/abc';

@Component({
    selector: 'components-lodop-print',
    template: `
    <nz-alert *ngIf="error" [nzType]="'warning'">
      <span alert-body>
        请先下载<a href="http://c-lodop.com/download.html" target="_blank">Lodop插件</a>，
        安装后点击<a (click)="reload()">重试</a>。
      </span>
    </nz-alert>
    <form *ngIf="!error" nz-form>
      <div nz-form-item nz-row>
        <div nz-form-label nz-col [nzSm]="6">
          <label>打印服务器</label>
        </div>
        <div nz-form-control nz-col [nzSm]="18">
            <nz-input-group [nzSize]="'large'">
                <div nz-col [nzSpan]="16">
                    <nz-input [nzSize]="'large'" nzPlaceHolder="https://localhost:8443/CLodopfuncs.js" [(ngModel)]="cog.url" name="url"></nz-input>
                </div>
                <div nz-col [nzSpan]="8">
                    <button nz-button (click)="reload(null)" [nzSize]="'large'">重新加载打印机</button>
                </div>
            </nz-input-group>
        </div>
      </div>
      <div nz-form-item nz-row>
        <div nz-form-label nz-col [nzSm]="6">
          <label>打印机</label>
        </div>
        <div nz-form-control nz-col [nzSm]="18">
            <nz-select style="width:90%;" nzPlaceHolder="请选择打印机" [nzSize]="'large'" nzShowSearch nzAllowClear
                [(ngModel)]="cog.printer" name="printer" (ngModelChange)="changePinter($event)">
                <nz-option
                    *ngFor="let name of pinters"
                    [nzLabel]="name"
                    [nzValue]="name">
                </nz-option>
            </nz-select>
        </div>
      </div>
      <div nz-form-item nz-row>
        <div nz-form-label nz-col [nzSm]="6">
          <label>纸张类型</label>
        </div>
        <div nz-form-control nz-col [nzSm]="18">
            <nz-select style="width:90%;" nzPlaceHolder="请选择纸张类型" [nzSize]="'large'" nzShowSearch nzAllowClear
                [(ngModel)]="cog.paper" name="paper">
                <nz-option
                    *ngFor="let name of papers"
                    [nzLabel]="name"
                    [nzValue]="name">
                </nz-option>
            </nz-select>
        </div>
      </div>
      <div nz-form-item nz-row>
        <div nz-form-label nz-col [nzSm]="6">
          <label>打印内容</label>
        </div>
        <div nz-form-control nz-col [nzSm]="18">
            <nz-input [(ngModel)]="cog.html" name="html" nzType="textarea" nzAutosize></nz-input>
            <div nz-form-extra>仅限HTML，更多类型支持请参考官网</div>
        </div>
      </div>
      <div nz-form-item nz-row>
        <div nz-form-control nz-col [nzSm]="18" [nzOffset]="6">
            <button nz-button (click)="print(true)" [nzSize]="'large'" [nzLoading]="printing">打印预览</button>
            <button nz-button (click)="print()" [nzSize]="'large'" [nzLoading]="printing">直接打印</button>
        </div>
      </div>
    </form>
    `
})
export class ComponentsLodopPrintComponent {
    cog: any = {
        url: 'https://localhost:8443/CLodopfuncs.js',
        printer: '',
        paper: '',
        html: `
        <h1>Title</h1>
        <p>这~！@#￥%……&*（）——sdilfjnvn</p>
        <p>这~！@#￥%……&*（）——sdilfjnvn</p>
        <p>这~！@#￥%……&*（）——sdilfjnvn</p>
        <p>这~！@#￥%……&*（）——sdilfjnvn</p>
        <p>这~！@#￥%……&*（）——sdilfjnvn</p>
        `
    };
    error = false;
    lodop: Lodop = null;
    pinters: any[] = [];
    papers: string[] = [];
    constructor(public lodopSrv: LodopService, private msg: NzMessageService, private notify: NzNotificationService) {
        this.lodopSrv.lodop.subscribe(({ lodop, ok }) => {
            if (!ok) {
                this.error = true;
                return;
            }
            this.error = false;
            this.msg.success(`打印机加载成功`);
            this.lodop = lodop;
            this.pinters = this.lodopSrv.printer;
        });
    }

    reload(options: any = { url: 'https://localhost:8443/CLodopfuncs.js' }) {
        this.pinters = [];
        this.papers = [];
        this.cog.printer = '';
        this.cog.paper = '';

        this.lodopSrv.cog = Object.assign({}, this.cog, options);
        this.error = false;
        if (options === null)
            this.lodopSrv.reset();
    }

    changePinter(name: string) {
        this.papers = this.lodop.GET_PAGESIZES_LIST(name, '\n').split('\n');
    }

    printing = false;
    print(isPrivew = false) {
        const LODOP = this.lodop;
        LODOP.PRINT_INITA(10, 20, 810, 610, '测试C-Lodop远程打印四步骤');
        LODOP.SET_PRINTER_INDEXA(this.cog.printer);
        LODOP.SET_PRINT_PAGESIZE(0, 0, 0, this.cog.paper);
        LODOP.ADD_PRINT_TEXT(1, 1, 300, 200, '下面输出的是本页源代码及其展现效果：');
        LODOP.ADD_PRINT_TEXT(20, 10, '90%', '95%', this.cog.html);
        LODOP.SET_PRINT_STYLEA(0, 'ItemType', 4);
        LODOP.NewPageA();
        LODOP.ADD_PRINT_HTM(20, 10, '90%', '95%', this.cog.html);
        if (isPrivew)
            LODOP.PREVIEW();
        else
            LODOP.PRINT();

    }
}
```
