---
type: CURD
title: sv
subtitle: View
cols: 1
order: 2
module: import { SVModule } from '@delon/abc/sv';
---

Viewing grid system is a higher-order components based on the original [Grid System](https://ng.ant.design/components/grid/zh) that server for view pages.

## API

### sv-container

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[sv-container]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) | `'1','2','3','4','5','6'` | `3` | ✅ |
| `[col]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) | `'1','2','3','4','5','6'` | `3` | ✅ |
| `[size]` | size of view | `'small','large'` | `'large'` | ✅ |
| `[layout]` | type of layout | `'horizontal','vertical'` | `'horizontal'` | ✅ |
| `[gutter]` | specify the distance between two items, unit is `px` | `number` | `32` | ✅ |
| `[labelWidth]` | label text of width | `number` | - | ✅ |
| `[default]` | whether default text | `boolean` | `true` | ✅ |
| `[title]` | Display title | `string,TemplateRef<void>` | - | - |
| `[noColon]` | Whether to not display : after label text | `boolean` | `false` | - |
| `[bordered]` | Whether to display the border | `boolean` | `false` | - |

### sv

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[col]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) | - |  |
| `[label]` | label of view | `string,TemplateRef<void>` | - |
| `[unit]` | unit of view | `string,TemplateRef<void>` | - |
| `[default]` | whether default text, inherit `sv-container` | `boolean` | - |
| `[type]` | type of view | `'primary','success','danger','warning'` | - |
| `[optional]` | Label optional information | `string, TemplateRef<void>` | - |
| `[optionalHelp]` | Label optional help | `string, TemplateRef<void>` | - |
| `[optionalHelpColor]` | The background color of label optional help	 | `string` | - |
| `[noColon]` | Whether to not display : after label text | `boolean` | `false` | - |
| `[hideLabel]` | Whether to hide the current label | `boolean` | `false` |

### sv-title

Display title.

### sv-value

值展示。

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[prefix]` | Prefix of value | `string` | - |
| `[unit]` | Unit of value | `string` | - |
| `[tooltip]` | Tooltip text of value | `string, TemplateRef<void>` | - |
| `[size]` | Size of value | `'large','small','default'` | `default` |

---

## Examples

### Basic

The simplest view page.

```typescript
import { Component } from '@angular/core';

import { SVModule } from '@delon/abc/sv';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'components-sv-basic',
  template: `
    <sv-container>
      <sv-title>title</sv-title>
      <sv label="Firefox">
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      </sv>
      <sv label="Firefox">
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      </sv>
      <sv label="Firefox">
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      </sv>
      <nz-divider />
      <sv label="Default" />
      <sv label="Unit" unit="个">10</sv>
      <sv label="Unit" unit="个" />
      <sv label="Col2" col="2">占两栏</sv>
      <sv label="Value">
        <sv-value prefix="约" unit="亿" tooltip="5,011,000,000">50.11</sv-value>
      </sv>
      <sv label="Mulit Value">
        <sv-value>10</sv-value>
        <sv-value>3</sv-value>
      </sv>
      <sv label="Value Size">
        <sv-value>Default</sv-value>
        <sv-value size="small">Samll</sv-value>
        <sv-value size="large">Large</sv-value>
      </sv>
    </sv-container>
  `,
  imports: [SVModule, NzDividerModule]
})
export class ComponentsSvBasic {}
```

### Border

With border and background color.

```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SVModule } from '@delon/abc/sv';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'components-sv-border',
  template: `
    <div class="mb-md">
      <button nz-button (click)="bordered = !bordered">切换边框</button>
      <nz-radio-group [(ngModel)]="size" class="ml-md">
        <label nz-radio nzValue="default">default</label>
        <label nz-radio nzValue="large">large</label>
        <label nz-radio nzValue="small">small</label>
      </nz-radio-group>
    </div>
    <div sv-container labelWidth="150" [bordered]="bordered" [size]="size">
      <sv label="ID">1</sv>
      <sv label="Name">asdf</sv>
      <sv label="Age">25</sv>
      <sv label="Long Optional Long Optional" optional="(RMB)">Optional</sv>
      <sv label="Optional" optionalHelp="Tips">Optional Help</sv>
      <sv label="Default" optionalHelp="The background color is #f50" optionalHelpColor="#f50" />
      <sv [label]="label" col="1">
        <ng-template #label>
          <a nz-tooltip="test">long</a>
        </ng-template>
        <p>Custom label</p>
        <p>Custom label</p>
        <p>Custom label</p>
      </sv>
    </div>
  `,
  imports: [SVModule, NzButtonModule, NzRadioModule, NzTooltipModule, FormsModule]
})
export class ComponentsSvBorder {
  bordered = true;
  size: 'small' | 'large' | 'default' = 'default';
}
```

### Fixed Label Width

Use `labelWidth` to make the layout look cleaner

```typescript
import { Component, inject } from '@angular/core';

import { STColumn, STModule } from '@delon/abc/st';
import { SVModule } from '@delon/abc/sv';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'components-sv-fixed',
  template: `
    <sv-container labelWidth="150">
      <sv label="ID">1</sv>
      <sv label="Name">asdf</sv>
      <sv label="Age">25</sv>
      <sv label="Reject" type="danger" col="1"> OMG <a class="ml-sm" (click)="msg.success('to')">Fixed</a> </sv>
      <sv label="Long Optional Long Optional" optional="(RMB)">Optional</sv>
      <sv label="Optional" optionalHelp="Tips">Optional Help</sv>
      <sv label="Default" optionalHelp="The background color is #f50" optionalHelpColor="#f50" />
      <sv [label]="label">
        <ng-template #label>
          <a nz-tooltip="test">long</a>
        </ng-template>
        Custom label
      </sv>
      <sv hideLabel col="1">
        <st [columns]="columns" size="small" />
      </sv>
    </sv-container>
  `,
  imports: [SVModule, NzTooltipModule, STModule]
})
export class ComponentsSvFixed {
  readonly msg = inject(NzMessageService);
  columns: STColumn[] = [{ title: 'id' }];
}
```

### Content Type

Usually used to view pages, success, danger, warning, and other fields.

```typescript
import { Component } from '@angular/core';

import { SVModule } from '@delon/abc/sv';

@Component({
  selector: 'components-sv-type',
  template: `
    <sv-container col="4">
      <sv label="primary" type="primary">hhhh</sv>
      <sv label="success" type="success">hhhh</sv>
      <sv label="warning" type="warning">hhhh</sv>
      <sv label="danger" type="danger">hhhh</sv>
    </sv-container>
  `,
  imports: [SVModule]
})
export class ComponentsSvType {}
```

### Vertical

Vertical layout.

```typescript
import { Component } from '@angular/core';

import { SVModule } from '@delon/abc/sv';

@Component({
  selector: 'components-sv-vertical',
  template: `
    <sv-container layout="vertical">
      <sv-title>title</sv-title>
      <sv label="Firefox">
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      </sv>
      <sv label="Firefox">
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      </sv>
      <sv label="Firefox">
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of
        volunteers.
      </sv>
    </sv-container>
  `,
  imports: [SVModule]
})
export class ComponentsSvVertical {}
```
