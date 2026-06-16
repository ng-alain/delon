---
type: CURD
title: cell
subtitle: 单元格数据
cols: 1
order: 4
module: import { CellModule } from '@delon/abc/cell';
---

内置支持十几种数据类型的格式化，且支持小部件自定义模式。

## API

### cell

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[value]` | 值 | `unknown` | - |
| `[options]` | 选项 | `CellOptions` | - |
| `[loading]` | 是否加载中 | `boolean` | `false` |

### CellOptions

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[type]` | 渲染类型 | - | - |
| `[tooltip]` | 文字提示 | `string` | - |
| `[renderType]` | 渲染类型 | `primary,success,danger,warning` | - |
| `[size]` | 大小 | `large,small` | - |
| `[unit]` | 单位，也可通过 `value: {text: 100, unit: '元'}` 来指定 | `string` | `-` |
| `[default]` | 默认文本 | `string | CellDefaultText` | - |
| `[mask]` | 格式化掩码, 参考[文档](https://ng-alain.com/util/format/zh#formatMask) | `string, FormatMaskOption` | - |
| `[widget]` | 小部件配置 | `{key?: string, data?: string}` | - |
| `[date]` | 日期配置，支持 `几分钟前` 格式化 | `{format?: string}` | - |
| `[mega]` | 大数据格式化配置 | `CurrencyMegaOptions` | - |
| `[currency]` | 货币配置 | `CurrencyFormatOptions` | - |
| `[boolean]` | 布尔配置 | `YNOptions` | - |
| `[img]` | 图像配置，支持大图预览 | `{ size?: number; big?: boolean }` | - |
| `[link]` | 链接配置 | `{ url?: string; target?: string }` | - |
| `[html]` | HTML 配置 | `{ safe?: string }` | - |
| `[badge]` | 徽章配置 | `{ data?: CellBadge }` | - |
| `[tag]` | 标签配置 | `{ data?: CellTag }` | - |
| `[checkbox]` | 复选框配置 | `{ label?: string }` | - |
| `[radio]` | 单选框配置 | `{ label?: string }` | - |

**渲染类型**

- `string` 字符串
- `number` 数字
- `mega` 大数据格式化
- `currency` 货币
- `cny` 转化成人民币表示法
- `boolean` 布尔
- `date` 日期
- `img` 图像，支持大图预览
- `link` 链接
- `html` HTML
- `badge` 徽章
- `tag` 标签
- `checkbox` 复选框（支持 `disabled`）
- `radio` 单选框（支持 `disabled`）
- `enum` 枚举转换
- `widget` 自定义小部件

## 自定义小部件

实现 `CellWidgetInstance` 接口即可，例如：

```ts
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import type { CellTextResult, CellWidgetInstance } from '@delon/abc/cell';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'cell-widget-test',
  template: `<img nz-tooltip nzTooltipTitle="Client it" [src]="data.result.text" class="img" style="cursor: pointer" /> `,
  host: {
    '(click)': 'show()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ NzTooltipModule ]
})
export class CellTestWidget implements CellWidgetInstance {
  private readonly msg = inject(NzMessageService);
  static readonly KEY = 'test';

  readonly data!: CellTextResult;

  show(): void {
    this.msg.info(`click`);
  }
}
```

其中 `data` 为固定参数，包含 `value`、`options` 配置项。

最后在 `app.config.ts` 下通过 `provideCellWidgets` 注册小部件，例如：

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideCellWidgets(
      { KEY: CellTestWidget.KEY, type: CellTestWidget }
    ),
  ]
}
```

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { delay, finalize, of, take } from 'rxjs';

import { subDays } from 'date-fns';

import { CellBadge, CellFuValue, CellModule, CellOptions, CellRenderType } from '@delon/abc/cell';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'components-cell-simple',
  template: `
    <div nz-row nzGutter="16" class="mt-md">
      @for (i of baseList; track $index) {
        <div nz-col nzSpan="8"> {{ i | json }} => <cell [value]="i" /> </div>
      }
      <div nz-col nzSpan="8"> date-fn => <cell [value]="day3" [options]="{ date: { format: 'fn' } }" /> </div>
      <div nz-col nzSpan="8"> mega => <cell value="15900000000" size="large" [options]="{ type: 'mega' }" /> </div>
      <div nz-col nzSpan="8"> mask => <cell value="15900000000" [options]="{ mask: '999****9999' }" /> </div>
      <div nz-col nzSpan="8"> currency => <cell value="100000" [options]="{ unit: '$' }" /> </div>
      <div nz-col nzSpan="8"> cny => <cell value="100000" [options]="{ type: 'cny' }" /> </div>
      <div nz-col nzSpan="8">
        yn => <cell [value]="yn()" [options]="{ type: 'boolean' }" />
        <a (click)="yn.set(!yn())">Change Value</a>
      </div>
      <div nz-col nzSpan="8">
        img =>
        <cell
          value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          [options]="{ type: 'img' }"
        />
      </div>
      <div nz-col nzSpan="8">
        img preview =>
        <cell value="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" [options]="bigImg" />
      </div>
      <div nz-col nzSpan="8">
        img list =>
        <cell
          [value]="[
            'https://randomuser.me/api/portraits/thumb/women/46.jpg',
            'https://randomuser.me/api/portraits/thumb/women/47.jpg'
          ]"
          [options]="{ type: 'img' }"
        />
      </div>
      <div nz-col nzSpan="8">
        link =>
        <cell value="Link" [options]="{ link: { url: 'https://ng-alain.com' } }" [disabled]="disabled()" />
        <a (click)="disabled.set(!disabled())" class="ml-sm">Change Disabled</a>
      </div>
      <div nz-col nzSpan="8">
        html =>
        <cell [value]="HTML" [options]="{ type: 'html' }" />
      </div>
      <div nz-col nzSpan="8">
        SafeHtml =>
        <cell [value]="safeHtml()" />
        <a (click)="updateSafeHtml()" class="ml-sm">updateSafeHtml</a>
      </div>
      <div nz-col nzSpan="8">
        badge =>
        <cell value="FINISHED" [options]="{ badge: { data: status } }" />
      </div>
      <div nz-col nzSpan="8">
        tag =>
        <cell value="WAIT" [options]="{ tag: { data: status } }" />
      </div>
      <div nz-col nzSpan="8">
        checkbox =>
        <cell
          [(value)]="checkbox"
          [options]="{ type: 'checkbox', tooltip: 'Tooltip', checkbox: { label: 'Label' } }"
          [disabled]="disabled()"
        />
        {{ checkbox() }}
        <a (click)="disabled.set(!disabled())" class="ml-sm">Change Disabled</a>
      </div>
      <div nz-col nzSpan="8">
        radio =>
        <cell
          [(value)]="radio"
          [options]="{ type: 'radio', tooltip: 'Tooltip', radio: { label: 'Radio' } }"
          [disabled]="disabled()"
        />
        {{ radio() }}
        <a (click)="radio.set(!radio())">Change Value</a>
        <a (click)="disabled.set(!disabled())" class="ml-sm">Change Disabled</a>
      </div>
      <div nz-col nzSpan="8">
        enum =>
        <cell [(value)]="enumValue" [options]="{ enum }" />
        <a (click)="enumValue = enumValue === 1 ? 2 : 1">Change Value</a>(enum value: {{ enumValue }})
      </div>
      <div nz-col nzSpan="8">
        default =>
        <cell [value]="null" />
      </div>
      @for (i of typeList; track $index) {
        <div nz-col nzSpan="8">
          {{ i }} =>
          <cell [value]="i" [options]="{ renderType: i }" />
        </div>
      }
      <div nz-col nzSpan="8">
        size =>
        <cell value="small" size="small" />, <cell value="default" />,
        <cell value="large" size="large" />
      </div>
      <div nz-col nzSpan="8">
        tooltip =>
        <cell value="tooltip" [options]="{ tooltip: 'Tooltip' }" />
      </div>
      <div nz-col nzSpan="8">
        loading =>
        <cell value="Done" [loading]="loading()" />
        <a (click)="loading.set(!loading())" class="ml-md">Change</a>
      </div>
      <div nz-col nzSpan="8">
        Async =>
        <cell [value]="async" [loading]="asyncLoading()" />
        @if (!asyncLoading()) {
          <a (click)="again()" class="ml-md">Again</a>
        }
      </div>
      <div nz-col nzSpan="8"> Unit => <cell value="3" [options]="{ unit: '人' }" /> </div>
      <div nz-col nzSpan="8"> Text Unit => <cell [value]="{ text: '100', unit: '元' }" /> </div>
      <div nz-col nzSpan="8">
        custom widget =>
        <cell [value]="imageValue()" [options]="{ widget: { key: 'test', data: 'new url' } }" />
        <a (click)="refreshImage()">Refresh Image</a>
      </div>
    </div>
  `,
  styles: [
    `
      :host ::ng-deep .ant-col {
        margin-bottom: 8px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CellModule, FormsModule, JsonPipe, NzGridModule]
})
export class ComponentsCellSimple implements OnInit {
  private readonly ds = inject(DomSanitizer);
  imageValue = signal('https://randomuser.me/api/portraits/thumb/women/47.jpg');
  checkbox = signal(false);
  radio = signal(true);
  disabled = signal(false);
  yn = signal(true);
  loading = signal(true);
  default: string = '-';
  baseList = ['string', true, false, 100, 1000000, new Date()];
  typeList: CellRenderType[] = ['primary', 'success', 'danger', 'warning'];
  day3 = subDays(new Date(), 3);
  HTML = `<strong>Strong</string>`;
  status: CellBadge = {
    WAIT: { text: 'Wait', tooltip: 'Refers to waiting for the user to ship' },
    FINISHED: { text: 'Done', color: 'success' }
  };
  asyncLoading = signal(true);
  async?: CellFuValue;
  safeHtml = signal(this.ds.bypassSecurityTrustHtml(`<strong>Strong Html</strong>`));
  enum = { 1: 'Success', 2: 'Error' };
  enumValue = 1;
  bigImg: CellOptions = {
    img: {
      size: 32,
      big: true // 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  };

  ngOnInit(): void {
    this.again();
  }

  again(): void {
    this.asyncLoading.set(true);
    this.async = (() =>
      of({ text: `${+new Date()}` }).pipe(
        take(1),
        delay(1000 * 1),
        finalize(() => this.asyncLoading.set(false))
      )) as CellFuValue;
  }

  updateSafeHtml(): void {
    this.safeHtml.set(this.ds.bypassSecurityTrustHtml(`alert('a');<script>alert('a')</script>`));
  }

  refreshImage(): void {
    this.imageValue.set(`https://randomuser.me/api/portraits/thumb/women/${Math.floor(Math.random() * 50) + 10}.jpg`);
  }
}
```
