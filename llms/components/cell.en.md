---
type: CURD
title: cell
subtitle: Cell Data
cols: 1
order: 4
module: import { CellModule } from '@delon/abc/cell';
---

Cell formatting is supported for multiple data types, and supports widget mode.

## API

### cell

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[value]` | Value of the cell | `unknown` | - |
| `[options]` | Option of the cell | `CellOptions` | - |
| `[loading]` | Whether loading | `boolean` | `false` |

### CellOptions

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[type]` | Render type of the cell | - | - |
| `[tooltip]` | Text popup tip  | `string` | - |
| `[renderType]` | Render type of the cell | `primary,success,danger,warning` | - |
| `[size]` | Size of the cell | `large,small` | - |
| `[unit]` | Unit, can also be specified by `value: {text: 100, unit: 'RMB'}` | `string` | `-` |
| `[default]` | Default text | `string | CellDefaultText` | - |
| `[mask]` | Format mask, [Document](https://ng-alain.com/util/format/en#formatMask) | `string, FormatMaskOption` | - |
| `[widget]` | Widget config | `{key?: string, data?: string}` | - |
| `[date]` | Date config, supports `minutes ago` formatting | `{format?: string}` | - |
| `[mega]` | Large number format filter, [Document](https://ng-alain.com/util/format/en#mega) | `CurrencyMegaOptions` | - |
| `[currency]` | Currency config | `CurrencyFormatOptions` | - |
| `[boolean]` | Boolean config | `YNOptions` | - |
| `[img]` | Image config, support large image preview | `{ size?: number; big?: boolean }` | - |
| `[link]` | Link config | `{ url?: string; target?: string }` | - |
| `[html]` | HTML config | `{ safe?: string }` | - |
| `[badge]` | Badge config | `{ data?: CellBadge }` | - |
| `[tag]` | Tag config | `{ data?: CellTag }` | - |
| `[checkbox]` | Checkbox config | `{ label?: string }` | - |
| `[radio]` | Radio config | `{ label?: string }` | - |

**Type**

- `string` String
- `number` Number
- `mega` Large number format filter, [Document](https://ng-alain.com/util/format/en#mega)
- `currency` Currency
- `cny` Converted into RMB notation
- `boolean` Boolean
- `date` Date
- `img` Image, support large image preview
- `link` Link
- `html` HTML
- `badge` Badge
- `tag` Tag
- `checkbox` Checkbox (Support `disabled`)
- `radio` Radio (Support `disabled`)
- `enum` Enum
- `widget` Custom widget

## Custom widget

Just implement the `CellWidgetInstance` interface, for example:

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

`data` is a fixed parameter, including `value`, `options` configuration items.

Finally, register the widget through `provideCellWidgets` under `app.config.ts`, for example:

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

## Examples

### Basic Usage

Simplest of usage.

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
