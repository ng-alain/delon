---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

`name` 元素采用内置的国际化方式；`password` 采用外部国际化方式。

## en-US

The `name` element uses built-in i18n method; `password` uses external i18n method.

```ts
import { Component, Inject, ViewChild } from '@angular/core';
import { SFSchema, SFComponent } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@core/i18n/service';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button type="button" (click)="changeLang('srv')">Change Language Via Service</button>
    <button nz-button type="button" (click)="changeLang('ref')">Change Language Via call refresh schema</button>
    <sf #sf [schema]="schema" (formSubmit)="submit($event)"></sf>
  `,
})
export class DemoComponent {
  @ViewChild('sf', { static: true }) comp: SFComponent;
  schema = this.i18nSchema;

  private get i18nSchema(): SFSchema {
    return {
      properties: {
        name: {
          type: 'string',
          ui: {
            i18n: 'sf.name',
            descriptionI18n: 'sf.description',
            optionalHelp: {
              i18n: 'sf.description',
            },
          },
        },
        password: {
          type: 'string',
          title: this.i18n.fanyi('sf.name'),
          description: this.i18n.fanyi('sf.description'),
          ui: {
            type: 'password',
          },
        },
      },
      required: ['name', 'password'],
    };
  }

  constructor(public msg: NzMessageService, @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService) {}

  changeLang(type: 'srv' | 'ref') {
    this.i18n.use(this.i18n.zone === 'zh' ? 'en-US' : 'zh-CN');
    if (type === 'ref') {
      this.comp.refreshSchema(this.i18nSchema);
    }
  }

  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }
}
```
