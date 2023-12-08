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
import { Component, ViewChild, inject } from '@angular/core';

import { DelonFormModule, SFComponent, SFSchema } from '@delon/form';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <button nz-button type="button" (click)="changeLang('srv')">Change Language Via Service</button>
    <button nz-button type="button" (click)="changeLang('ref')">Change Language Via call refresh schema</button>
    <sf #sf [schema]="schema" (formSubmit)="submit($event)" />
  `,
  standalone: true,
  imports: [DelonFormModule, NzButtonModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  private readonly i18n = inject(ALAIN_I18N_TOKEN);

  @ViewChild('sf', { static: true }) comp!: SFComponent;
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
              i18n: 'sf.description'
            }
          }
        },
        password: {
          type: 'string',
          title: this.i18n.fanyi('sf.name'),
          description: this.i18n.fanyi('sf.description'),
          ui: {
            type: 'password'
          }
        }
      },
      required: ['name', 'password']
    };
  }

  changeLang(type: 'srv' | 'ref'): void {
    this.i18n.use(this.i18n.zone === 'zh' ? 'en-US' : 'zh-CN');
    if (type === 'ref') {
      this.comp.refreshSchema(this.i18nSchema);
    }
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
