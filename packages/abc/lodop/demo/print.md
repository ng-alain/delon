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
    selector: 'app-demo',
    template: `
    <nz-alert *ngIf="error" [nzType]="'warning'" [nzMessage]="message">
        <ng-template #message>
            请先下载<a href="http://c-lodop.com/download.html" target="_blank">Lodop插件</a>，
            安装后点击<a (click)="reload()">重试</a>。
        </ng-template>
    </nz-alert>
    <form *ngIf="!error" nz-form>
      <nz-form-item nz-row>
        <nz-form-label nz-col [nzSm]="6">打印服务器</nz-form-label>
        <nz-form-control nz-col [nzSm]="18">
            <nz-input-group>
                <div nz-col [nzSpan]="16">
                    <input nz-input nzPlaceHolder="https://localhost:8443/CLodopfuncs.js" [(ngModel)]="cog.url" name="url">
                </div>
                <div nz-col [nzSpan]="8">
                    <button nz-button (click)="reload(null)">重新加载打印机</button>
                </div>
            </nz-input-group>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item nz-row>
        <nz-form-label nz-col [nzSm]="6">打印机</nz-form-label>
        <nz-form-control nz-col [nzSm]="18">
            <nz-select style="width:90%;" nzPlaceHolder="请选择打印机" nzShowSearch nzAllowClear
                [(ngModel)]="cog.printer" name="printer" (ngModelChange)="changePinter($event)">
                <nz-option
                    *ngFor="let name of pinters"
                    [nzLabel]="name"
                    [nzValue]="name">
                </nz-option>
            </nz-select>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item nz-row>
        <nz-form-label nz-col [nzSm]="6">纸张类型</nz-form-label>
        <nz-form-control nz-col [nzSm]="18">
            <nz-select style="width:90%;" nzPlaceHolder="请选择纸张类型" nzShowSearch nzAllowClear
                [(ngModel)]="cog.paper" name="paper">
                <nz-option
                    *ngFor="let name of papers"
                    [nzLabel]="name"
                    [nzValue]="name">
                </nz-option>
            </nz-select>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item nz-row>
        <nz-form-label nz-col [nzSm]="6">打印内容</nz-form-label>
        <nz-form-control nz-col [nzSm]="18">
            <textarea nz-input [(ngModel)]="cog.html" name="html" nzAutosize></textarea>
            <div nz-form-extra>仅限HTML，更多类型支持请参考官网</div>
        </nz-form-control>
      </nz-form-item>
      <nz-form-item nz-row>
        <nz-form-control nz-col [nzSm]="18" [nzOffset]="6">
            <button nz-button (click)="print(true)" [nzLoading]="printing">打印预览</button>
            <button nz-button (click)="print()" [nzLoading]="printing">直接打印</button>
        </nz-form-control>
      </nz-form-item>
    </form>
    `
})
export class DemoComponent {
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
