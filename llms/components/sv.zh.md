---
type: CURD
title: sv
subtitle: 查看
cols: 1
order: 2
module: import { SVModule } from '@delon/abc/sv';
---

查看栅格系统是在原 [Grid 栅格](https://ng.ant.design/components/grid/zh) 基础上构建更高阶的组件，用于简化查看页布局。

## API

### sv-container

| 参数 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[sv-container]` | 指定信息最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定， | `'1','2','3','4','5','6'` | - | - |
| `[col]` | 指定信息最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定 | `'1','2','3','4','5','6'` | `3` | ✅ |
| `[size]` | 大小 | `'small','large'` | `'large'` | ✅ |
| `[layout]` | 布局 | `'horizontal','vertical'` | `'horizontal'` | ✅ |
| `[gutter]` | 间距 | `number` | `32` | ✅ |
| `[labelWidth]` | 默认标签文本宽度 | `number` | - | ✅ |
| `[default]` | 默认是否显示默认文本 | `boolean` | `true` | ✅ |
| `[title]` | 标题 | `string,TemplateRef<void>` | - | - |
| `[noColon]` | 默认是否不显示 label 后面的冒号 | `boolean` | `false` | - |
| `[bordered]` | 是否展示边框 | `boolean` | `false` | - |

### sv

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[col]` | 指定信息最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定，继承 `sv-container` | `'1','2','3','4','5','6'` | - |
| `[label]` | 标签 | `string,TemplateRef<void>` | - |
| `[unit]` | 单位 | `string,TemplateRef<void>` | - |
| `[default]` | 是否显示默认文本，继承 `sv-container` | `boolean` | - |
| `[type]` | 类型 | `'primary','success','danger','warning'` | - |
| `[optional]` | 标签可选信息 | `string, TemplateRef<void>` | - |
| `[optionalHelp]` | 标签可选帮助 | `string, TemplateRef<void>` | - |
| `[optionalHelpColor]` | 标签可选帮助背景颜色	 | `string` | - |
| `[noColon]` | 是否不显示 label 后面的冒号 | `boolean` | `false` | - |
| `[hideLabel]` | 是否隐藏当前 `label` | `boolean` | `false` |

### sv-title

用于展示标题，单独一行。

### sv-value

值展示。

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[prefix]` | 前缀 | `string` | - |
| `[unit]` | 单位 | `string` | - |
| `[tooltip]` | 文字提示内容 | `string, TemplateRef<void>` | - |
| `[size]` | 大小 | `'large','small','default'` | `default` |

---

## 代码示例

### 基本

基本查看页。

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

### 带边框的

带边框和背景颜色。

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

### 固定标签宽度

固定标签宽度让布局看起来更加整洁。

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

### 内容类型

通常用于展示页，成功、异常、警告等字段展示。

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

### 垂直布局

垂直布局。

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
