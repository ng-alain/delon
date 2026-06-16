---
title: date
subtitle: Date
type: Widgets
---

To select or input a date.

## Notice

- Format is divided into two types: **Data format** means form data, **Display format** means display data ([nzFormat](https://ng.ant.design/components/date-picker/en#api))
- All **Data format** units, reference [date-fns format](https://date-fns.org/v1.29.0/docs/format) (China mirror: [moment format](http://Momentjs.cn/docs/#/displaying/format/))
- Specify `schema.format` must follow [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) time format, otherwise considered as a format error, default rules:
  - `date-time` default is `yyyy-MM-ddTHH:mm:ssZ`
  - `date`, `full-date` default is `yyyy-MM-dd`
  - `time`, `full-time` default is `HH:mm:ss`
  - *Non-standard:* `week` default is `yyyy-ww`
  - *Non-standard:* `month` default is `yyyy-MM`
- When `schema.format` is not specified, the data formatting (Allows you to reassign default values via [Global Configuration](/docs/global-config)) is determined by the `schema.type` type:
  - `string` default is `yyyy-MM-dd HH:mm:ss`
  - `number` default is `T` 13-bit Unix Timestamp

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[readOnly]` | Whether to disable the state | `boolean` | - |
| `[format]` | Data format type | `string` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[mode]` | Render mode | `date,week,month,year` | `date` |
| `[rangeMode]` | Set picker mode of range picker | `date,week,month,year` | `date` |
| `[size]` | Size of the `nz-date-picker` | `default,large,small` | - |
| `[placeholder]` | Placeholder of date input | `string, string[]` | - |
| `[displayFormat]` | Display format([nzFormat](https://ng.ant.design/components/date-picker/en#api)) | `string` | `yyyy-MM-dd HH:mm:ss` |
| `[end]` | End `key` value for the date range | `string` | - |
| `[allowClear]` | Whether to show clear button | `boolean` | `true` |
| `[className]` | Picker className | `string` | - |
| `[disabledDate]` | specify the date that cannot be selected | `(current: Date) => boolean` | - |
| `[locale]` | localization configuration | `object` | - |
| `[popupStyle]` | to customize the style of the popup calendar | `object` | - |
| `[dropdownClassName]` | to customize the className of the popup calendar | `string` | - |
| `[onOpenChange]` | a callback emitter, can be executed whether the popup calendar is popped up or closed | `(status: boolean) => void` | - |
| `[disabledTime]` | to specify the time that cannot be selected | `(current: Date) => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }` | - |
| `[renderExtraFooter]` | render extra footer in panel | `string` | - |
| `[showTime]` | to provide an additional time selection, the `object` type is [TimePickerOptions](https://ng.ant.design/components/time-picker/en#api) | `object,boolean` | `true` |
| `[showToday]` | whether to show "Today" button | `boolean` | `true` |
| `[inputReadOnly]` | Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices) | `boolean` | `false` |
| `[inline]` | Inline mode of the date picker | `boolean` | `false` |
| `[separator]` | separator | `string, TemplateRef` | `'~'` |
| `[showWeekNumber]` | whether to show the week number on each row (Only supported by date picker. Week picker always shows week numbers) | `boolean` | `false` |
| `[onOk]` | callback when click ok button | `(data: Date | Date[]) => void` | - |
| `[change]` | Date change callback | `(data: Date | Date[]) => void` | - |

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFDateWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-date-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" (formChange)="change($event)" /> `,
  imports: [DelonFormModule]
})
export class FormDateSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      datetime: {
        type: 'string',
        format: 'date-time'
      },
      date: {
        type: 'string',
        format: 'date'
      },
      date_number: {
        type: 'number',
        ui: { widget: 'date' } as SFDateWidgetSchema
      },
      year: {
        type: 'number',
        ui: { widget: 'date', mode: 'year', format: 'yyyy' } as SFDateWidgetSchema
      },
      month: {
        type: 'string',
        format: 'month'
      },
      week: {
        type: 'string',
        format: 'week'
      },
      range: {
        type: 'string',
        ui: { widget: 'date', mode: 'range' } as SFDateWidgetSchema
      },
      start: {
        type: 'string',
        ui: { widget: 'date', end: 'end' } as SFDateWidgetSchema
      },
      end: {
        type: 'string',
        ui: { widget: 'date', end: 'end' } as SFDateWidgetSchema
      },
      inline: {
        type: 'string',
        ui: { widget: 'date', inline: true } as SFDateWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  change(value: {}): void {
    console.log('change', value);
  }
}
```

### Data Range

A simple start & end date range, \*\*Note: \*\* `end` still needs define in schema, but will forced to be hidden.

```typescript
import { Component, inject } from '@angular/core';

import { subWeeks } from 'date-fns';

import { DelonFormModule, SFDateWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-date-range',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormDateRange {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      start: {
        type: 'string',
        ui: { widget: 'date', end: 'end', separator: '到' } as SFDateWidgetSchema,
        default: new Date()
      },
      end: {
        type: 'string',
        default: subWeeks(new Date(), 6)
      },
      startWeek: {
        type: 'string',
        ui: { widget: 'date', rangeMode: 'week', end: 'endWeek' } as SFDateWidgetSchema,
        default: new Date()
      },
      endWeek: {
        type: 'string',
        default: subWeeks(new Date(), 6)
      },
      startMonth: {
        type: 'string',
        ui: { widget: 'date', rangeMode: 'month', end: 'endMonth' } as SFDateWidgetSchema,
        default: new Date()
      },
      endMonth: {
        type: 'string',
        default: subWeeks(new Date(), 6)
      },
      startYear: {
        type: 'string',
        ui: { widget: 'date', rangeMode: 'year', end: 'endYear' } as SFDateWidgetSchema,
        default: new Date()
      },
      endYear: {
        type: 'string',
        default: subWeeks(new Date(), 6)
      }
    },
    required: ['start']
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
