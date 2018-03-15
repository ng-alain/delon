---
order: 2
title: 打印设计
---

使用打印设计对字体、字号、对象排版等，并利用 `attachCode` 方法自动附加设计生成的代码至 Lodop 对象，且支持动态参数。调用 `print` 压制打印数据并监听 `events` 可进行无限制批量套打。

```ts
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { LodopService, Lodop } from '@delon/abc';

@Component({
    selector: 'components-lodop-design',
    template: `
    <nz-alert *ngIf="error" [nzType]="'warning'">
      <span alert-body>
        请先下载<a href="http://c-lodop.com/download.html" target="_blank">Lodop插件</a>。
      </span>
    </nz-alert>
    <form *ngIf="lodop && !error" nz-form>
        <div nz-form-item nz-row>
            <div nz-form-label nz-col [nzSm]="6">
                <label>标题</label>
            </div>
            <div nz-form-control nz-col [nzSm]="18">
                <nz-input [(ngModel)]="context['标题']" name="标题"></nz-input>
            </div>
        </div>
        <div nz-form-item nz-row>
            <div nz-form-label nz-col [nzSm]="6">
                <label>费用</label>
            </div>
            <div nz-form-control nz-col [nzSm]="18">
                <nz-input [(ngModel)]="context['费用']" name="费用"></nz-input>
            </div>
        </div>
        <div nz-form-item nz-row>
            <div nz-form-label nz-col [nzSm]="6">
                <label>打印内容</label>
            </div>
            <div nz-form-control nz-col [nzSm]="18">
                <nz-input [(ngModel)]="code" name="code" nzType="textarea" [nzAutosize]="{ minRows: 2, maxRows: 6 }"></nz-input>
            </div>
        </div>
      <div nz-form-item nz-row>
        <div nz-form-control nz-col [nzSm]="18" [nzOffset]="6">
            <button nz-button (click)="design()" [nzSize]="'large'" [nzLoading]="doing">打印设计</button>
            <button nz-button (click)="setup()" [nzSize]="'large'">打印维护</button>
            <button nz-button (click)="print()" [nzSize]="'large'">打印预览</button>
            <button nz-button (click)="printBatch()" [nzSize]="'large'" [nzLoading]="doing">批量打印3张</button>
        </div>
      </div>
    </form>
    `
})
export class ComponentsLodopDesignComponent {
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
