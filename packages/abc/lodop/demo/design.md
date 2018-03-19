---
order: 2
title: 打印设计
---

使用打印设计对字体、字号、对象排版等，并利用 `attachCode` 方法自动附加设计生成的代码至 Lodop 对象，且支持动态参数。调用 `print` 压制打印数据并监听 `events` 可进行无限制批量套打。

```ts
import { Component } from '@angular/core';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';
import { LodopService, Lodop } from '@delon/abc';

@Component({
    selector: 'app-demo',
    template: `
    <nz-alert *ngIf="error" [nzType]="'warning'" [nzMessage]="message">
        <ng-template #message>
            请先下载<a href="http://c-lodop.com/download.html" target="_blank">Lodop插件</a>。
        </ng-template>
    </nz-alert>
    <form *ngIf="lodop && !error" nz-form>
        <nz-form-item nz-row>
            <nz-form-label nz-col [nzSm]="6">标题</nz-form-label>
            <nz-form-control nz-col [nzSm]="18">
                <input nz-input [(ngModel)]="context['标题']" name="标题">
            </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
            <nz-form-label nz-col [nzSm]="6">费用</nz-form-label>
            <nz-form-control nz-col [nzSm]="18">
                <input nz-input [(ngModel)]="context['费用']" name="费用">
            </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
            <nz-form-label nz-col [nzSm]="6">打印内容</nz-form-label>
            <nz-form-control nz-col [nzSm]="18">
                <textarea [(ngModel)]="code" name="code" nz-input [nzAutosize]="{ minRows: 2, maxRows: 6 }"></textarea>
            </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
            <nz-form-control nz-col [nzSm]="18" [nzOffset]="6">
                <button nz-button (click)="design()" [nzLoading]="doing">打印设计</button>
                <button nz-button (click)="setup()">打印维护</button>
                <button nz-button (click)="print()">打印预览</button>
                <button nz-button (click)="printBatch()" [nzLoading]="doing">批量打印3张</button>
            </nz-form-control>
        </nz-form-item>
    </form>
    `
})
export class DemoComponent {
    doing = false;
    error = false;
    lodop: Lodop = null;
    context: any = {
        标题: '自定义标题',
        费用: '100.00 元'
    };
    code = `LODOP.PRINT_INITA(10,10,762,533,"测试套打");
LODOP.ADD_PRINT_TEXT(38,78,408,30,"{{标题}}");
LODOP.SET_PRINT_STYLEA(0,"FontSize",15);
LODOP.SET_PRINT_STYLEA(0,"FontColor","#800000");
LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
LODOP.ADD_PRINT_TEXT(259,579,100,23,"{{费用}}");
LODOP.ADD_PRINT_TEXT(260,520,58,24,"合计：");`;
    constructor(public lodopSrv: LodopService, private msg: NzMessageService) {
        this.lodopSrv.lodop.subscribe(({ lodop, ok }) => {
            if (!ok) {
                this.error = true;
                return;
            }
            this.error = false;
            this.lodop = lodop;
        });
    }

    design() {
        this.lodopSrv.attachCode(this.code);
        this.doing = true;
        this.lodopSrv.design().then((code) => {
            this.code = code;
            this.doing = false;
        });
    }

    setup() {
        this.lodopSrv.attachCode(this.code);
        this.lodop.PRINT_SETUP();
    }

    print() {
        this.lodopSrv.attachCode(this.code, this.context);
        this.lodop.PREVIEW();
    }

    printBatch() {
        this.doing = true;
        const data = new Array(3).fill({}).map((item, index) => Object.assign({ index: index + 1 }, this.context));
        this.lodopSrv.print(this.code + `
        LODOP.ADD_PRINT_TEXT(10,10,100,100,"第{{index}}张");
        `, data);
        const batch$ = this.lodopSrv.events.subscribe((res) => {
            console.log('finish', res);
            if (res.item.index === data.length - 1) {
                this.msg.success(`全部打印完成`);
                this.doing = false;
                batch$.unsubscribe();
            }
        });
    }

}
```
