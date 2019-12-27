import { Component } from '@angular/core';
import { SFSchema, SFMentionWidgetSchema } from '@delon/form';
import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { LodopService, Lodop } from '@delon/abc/lodop';
import { NoticeIconList, NoticeItem } from '@delon/abc/notice-icon';
import { STColumn } from '@delon/abc/st';
import { XlsxService } from '@delon/abc/xlsx';

const DATA = ['asdf', 'cipchk', '中文', 'にほんご'];

@Component({
  selector: 'app-demo',
  template: `
    <sf [schema]="schema" (formSubmit)="submit($event)"></sf>
  `,
})
export class DemoComponent {
  schema: SFSchema = {
    properties: {
      remark: {
        type: 'string',
        title: '描述',
        enum: DATA,
        minimum: 2,
        maximum: 5,
        ui: {
          widget: 'mention',
          inputStyle: 'textarea',
        } as SFMentionWidgetSchema,
      },
      // 异步静态数据源
      async: {
        type: 'string',
        title: 'Async',
        ui: {
          widget: 'mention',
          asynxcData: () => of(DATA).pipe(delay(1000)),
        } as SFMentionWidgetSchema,
      },
      // 实时数据
      real_time: {
        type: 'string',
        title: 'RealTime',
        ui: {
          widget: 'mention',
          loadData: (option: MentionOnSearchTypes) => of(DATA.filter(item => item.indexOf(option.value) !== -1)).pipe(delay(300)),
        } as SFMentionWidgetSchema,
      },
    },
  };
  constructor(public msg: NzMessageService) {}
  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }
}
