import { Component } from '@angular/core';
import {
  SFSchema,
  SFSchemaEnum,
  CascaderWidget,
  SFUISchema,
  FormProperty,
  PropertyGroup,
} from '@delon/form';
import {
  NzMessageService,
  CascaderOption,
  MentionOnSearchTypes,
} from 'ng-zorro-antd';
import { of } from 'rxjs/observable/of';
import { delay, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-demo',
  template: `
  <button (click)="update()">update</button>
    <br>
    <sf
        [schema]="schema"
        [ui]="uiSchema"
        [formData]="formData"
        (formSubmit)="submit($event)"
        (formChange)="change($event)"
        (formError)="error($event)">
    </sf>
    `,
})
export class DemoComponent {
  formData: any = {
    id: 1,
    time: new Date('1970-1-1 19:42:18'),
    time_number: 70997000,
  };
  uiSchema: SFUISchema = {};
  schema: SFSchema = {
    properties: {
      time: {
        type: 'string',
        format: 'time',
      },
      time_number: {
        type: 'number',
        ui: { widget: 'time', utcEpoch: true, displayFormat: 'HH:mm' },
      },
      time_string: {
        type: 'string',
        ui: { widget: 'time' },
      },
    },
    ui: {
      spanLabelFixed: 100,
    },
  };

  constructor(private msg: NzMessageService, private http: _HttpClient) {}

  update() {
    this.formData = {
      id: 1,
      time: new Date('1970-1-1 19:41:18'),
      time_number: 71899000
    };
  }

  submit(value: any) {
    this.msg.success(JSON.stringify(value));
  }

  change(value: any) {
    // console.log('change', value);
  }

  error(value: any) {
    console.log('error', value);
  }
}
