---
type: Basic
order: 4
title: lodop
subtitle: Lodop Print
cols: 1
module: import { LodopModule } from '@delon/abc/lodop';
---

The basic implementation of [Lodop](http://c-lodop.com/) printing, commercial needs to buy lodop license. (Also thanks lodop for free ng-alain for genuine KEY)

> Prerequisites for running the example must be installed [Lodop](http://c-lodop.com/download.html).

## API

### LodopService

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `cog` | Get or set config | `AlainLodopConfig` | - |
| `events` | process notification | `Observable<LodopPrintResult>` | - |
| `lodop` | Get the Lodop instance | `Observable<LodopResult>` | - |

**Auxiliary API after Lodop is successfully loaded**

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `printer` | Get a list of printers | `string[]` | - |
| `attachCode()` | Attach code to the `lodop` object | `void` | - |
| `design()` | Run the print design manually after closing the return code | `Promise<string>` | - |
| `print()` | Print now, generally used for batch printing | `void` | - |

### LodopPrintResult

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `ok` | Whether print is successful | `boolean` | - |
| `error` | Error message | `string` | - |
| `code` | Code of lodop | `string` | - |
| `item` | Dynamic parameter context object | `any` | - |
| `parser` | Code parsing expression | `RegExp` | - |

### LodopResult

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `ok` | Whether print is successful | `boolean` | - |
| `status` | Status of result | `string` | - |
| `lodop` | Lodop instance | `Lodop` | - |
| `error` | Error message | `any` | - |

### AlainLodopConfig

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `companyName` | Company name | `string` | - | ✅ |
| `license` | License | `string` | - | ✅ |
| `licenseA` | LicenseA | `string` | - | ✅ |
| `licenseB` | LicenseB | `string` | - | ✅ |
| `url` | Lodop remote script URL address | `string` | `//localhost:8443/Lodopfuncs.js` | ✅ |
| `name` | Lodop variable name | `string` | `LODOP` | ✅ |
| `checkMaxCount` | Exceeded the number of inspections as a failure, Because of Lodop needs to connect to WebSocket | `number` | `100` | ✅ |

---

## Examples

### Basic

Get print server information (including: remote).

```typescript
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Lodop, LodopService } from '@delon/abc/lodop';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'components-lodop-print',
  template: `
    @if (error) {
      <nz-alert [nzType]="'warning'" [nzMessage]="message">
        <ng-template #message>
          请先下载<a href="http://c-lodop.com/download.html" target="_blank">Lodop插件</a>， 安装后点击<a
            (click)="reload()"
            >重试</a
          >。
        </ng-template>
      </nz-alert>
    } @else {
      <form nz-form>
        <nz-form-item nz-row>
          <nz-form-label nz-col [nzSm]="6">打印服务器</nz-form-label>
          <nz-form-control nz-col [nzSm]="18">
            <nz-input-wrapper>
              <div nz-col [nzSpan]="16">
                <input
                  nz-input
                  nzPlaceHolder="https://localhost:8443/CLodopfuncs.js"
                  [(ngModel)]="cog.url"
                  name="url"
                />
              </div>
              <div nz-col [nzSpan]="8">
                <button nz-button (click)="reload(null)">重新加载打印机</button>
              </div>
            </nz-input-wrapper>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
          <nz-form-label nz-col [nzSm]="6">打印机</nz-form-label>
          <nz-form-control nz-col [nzSm]="18">
            <nz-select
              style="width:90%;"
              nzPlaceHolder="请选择打印机"
              nzShowSearch
              nzAllowClear
              [(ngModel)]="cog.printer"
              name="printer"
              (ngModelChange)="changePinter($event)"
            >
              @for (name of pinters; track $index) {
                <nz-option [nzLabel]="name" [nzValue]="name" />
              }
            </nz-select>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
          <nz-form-label nz-col [nzSm]="6">纸张类型</nz-form-label>
          <nz-form-control nz-col [nzSm]="18">
            <nz-select
              style="width:90%;"
              nzPlaceHolder="请选择纸张类型"
              nzShowSearch
              nzAllowClear
              [(ngModel)]="cog.paper"
              name="paper"
            >
              @for (name of papers; track $index) {
                <nz-option [nzLabel]="name" [nzValue]="name" />
              }
            </nz-select>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
          <nz-form-label nz-col [nzSm]="6">打印内容</nz-form-label>
          <nz-form-control nz-col [nzSm]="18" nzExtra="仅限HTML，更多类型支持请参考官网">
            <textarea nz-input [(ngModel)]="cog.html" name="html" cdkTextareaAutosize></textarea>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
          <nz-form-control nz-col [nzSm]="18" [nzOffset]="6">
            <button nz-button (click)="print(true)" [nzLoading]="printing">打印预览</button>
            <button nz-button (click)="print()" [nzLoading]="printing">直接打印</button>
          </nz-form-control>
        </nz-form-item>
      </form>
    }
  `,
  imports: [
    NzFormModule,
    NzAlertModule,
    NzGridModule,
    FormsModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    CdkTextareaAutosize
  ]
})
export class ComponentsLodopPrint {
  private lodopSrv = inject(LodopService);
  private msg = inject(NzMessageService);

  constructor() {
    this.lodopSrv.lodop.subscribe(({ lodop, ok }) => {
      if (!ok) {
        this.error = true;
        return;
      }
      this.error = false;
      this.msg.success(`打印机加载成功`);
      this.lodop = lodop as Lodop;
      this.pinters = this.lodopSrv.printer;
    });
  }
  cog: NzSafeAny = {
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
  lodop: Lodop | null = null;
  pinters: NzSafeAny[] = [];
  papers: string[] = [];

  printing = false;

  reload(options: NzSafeAny = { url: 'https://localhost:8443/CLodopfuncs.js' }): void {
    this.pinters = [];
    this.papers = [];
    this.cog.printer = '';
    this.cog.paper = '';

    this.lodopSrv.cog = { ...this.cog, ...options };
    this.error = false;
    if (options === null) this.lodopSrv.reset();
  }

  changePinter(name: string): void {
    this.papers = this.lodop!.GET_PAGESIZES_LIST(name, '\n').split('\n');
  }
  print(isPrivew: boolean = false): void {
    const LODOP = this.lodop!;
    LODOP.PRINT_INITA(10, 20, 810, 610, '测试C-Lodop远程打印四步骤');
    LODOP.SET_PRINTER_INDEXA(this.cog.printer);
    LODOP.SET_PRINT_PAGESIZE(0, 0, 0, this.cog.paper);
    LODOP.ADD_PRINT_TEXT(1, 1, 300, 200, '下面输出的是本页源代码及其展现效果：');
    LODOP.ADD_PRINT_TEXT(20, 10, '90%', '95%', this.cog.html);
    LODOP.SET_PRINT_STYLEA(0, 'ItemType', 4);
    LODOP.NewPageA();
    LODOP.ADD_PRINT_HTM(20, 10, '90%', '95%', this.cog.html);
    if (isPrivew) LODOP.PREVIEW();
    else LODOP.PRINT();
  }
}
```

### Print design

Use print design for font, font size, object layout, etc., and use `attachCode` method to automatically append the generated code to the Lodop instance(support dynamic parameters). Call the `print` method to print the data, and make the next print by listening `events`, that achieve unlimited batch printing.

```typescript
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Lodop, LodopService } from '@delon/abc/lodop';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'components-lodop-design',
  template: `
    @if (error) {
      <nz-alert [nzType]="'warning'" [nzMessage]="message">
        <ng-template #message>
          请先下载<a href="http://c-lodop.com/download.html" target="_blank">Lodop插件</a>。
        </ng-template>
      </nz-alert>
    }
    @if (lodop && !error) {
      <form nz-form>
        <nz-form-item nz-row>
          <nz-form-label nz-col [nzSm]="6">标题</nz-form-label>
          <nz-form-control nz-col [nzSm]="18">
            <input nz-input [(ngModel)]="context['标题']" name="标题" />
          </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
          <nz-form-label nz-col [nzSm]="6">费用</nz-form-label>
          <nz-form-control nz-col [nzSm]="18">
            <input nz-input [(ngModel)]="context['费用']" name="费用" />
          </nz-form-control>
        </nz-form-item>
        <nz-form-item nz-row>
          <nz-form-label nz-col [nzSm]="6">打印内容</nz-form-label>
          <nz-form-control nz-col [nzSm]="18">
            <textarea
              [(ngModel)]="code"
              name="code"
              nz-input
              cdkTextareaAutosize
              [cdkAutosizeMinRows]="2"
              [cdkAutosizeMaxRows]="6"
            ></textarea>
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
    }
  `,
  imports: [NzFormModule, NzAlertModule, NzGridModule, FormsModule, NzInputModule, NzButtonModule, CdkTextareaAutosize]
})
export class ComponentsLodopDesign {
  private lodopSrv = inject(LodopService);
  private msg = inject(NzMessageService);

  doing = false;
  error = false;
  lodop: Lodop | null = null;
  context: { 标题: string; 费用: string } = {
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

  constructor() {
    this.lodopSrv.lodop.subscribe(({ lodop, ok }) => {
      if (!ok) {
        this.error = true;
        return;
      }
      this.error = false;
      this.lodop = lodop as Lodop;
    });
  }

  design(): void {
    this.lodopSrv.attachCode(this.code);
    this.doing = true;
    this.lodopSrv.design().then(code => {
      this.code = code;
      this.doing = false;
    });
  }

  setup(): void {
    this.lodopSrv.attachCode(this.code);
    this.lodop!.PRINT_SETUP();
  }

  print(): void {
    this.lodopSrv.attachCode(this.code, this.context);
    this.lodop!.PREVIEW();
  }

  printBatch(): void {
    this.doing = true;
    const data = new Array(3).fill({}).map((_, index) => ({ index: index + 1, ...this.context }));
    this.lodopSrv.print(
      `${this.code}
    LODOP.ADD_PRINT_TEXT(10,10,100,100,"第{{index}}张");
    `,
      data
    );
    const batch$ = this.lodopSrv.events.subscribe(res => {
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
