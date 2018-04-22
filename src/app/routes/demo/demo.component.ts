// tslint:disable:quotemark
import { Component } from '@angular/core';
import { SFSchema, SFSchemaEnum, CascaderWidget, SFUISchema, FormProperty, PropertyGroup } from '@delon/form';
import { NzMessageService, CascaderOption, MentionOnSearchTypes } from 'ng-zorro-antd';
import { of } from 'rxjs/observable/of';
import { delay, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { _HttpClient } from '@delon/theme';

@Component({
    selector: 'app-demo',
    template: `
    layout="inline"
    layout="vertical"
    <br>
    <sf
        [schema]="schema"
        [ui]="uiSchema"
        [formData]="formData"
        (formSubmit)="submit($event)"
        (formChange)="change($event)"
        (formError)="error($event)">
    </sf>
    `
})
export class DemoComponent {
    formData: any = {
        id: 1
    };
    uiSchema: SFUISchema = {};
    schema: SFSchema = {
        properties: {
            type: { type: 'string', enum: [ 'mobile', 'name' ], default: 'mobile' },
            name: { type: 'string' },
            pwd: { type: 'string' },
            mobile: { type: 'string' },
            code: { type: 'string' }
        },
        required: [ 'type' ],
        if: {
            properties: { type: { enum: [ 'mobile' ] } }
        },
        then: {
            required: [ 'mobile', 'code' ]
        },
        else: {
            required: [ 'name', 'pwd' ]
        }
    };

    constructor(private msg: NzMessageService, private http: _HttpClient) {
    }

    submit(value: any) {
        this.msg.success(JSON.stringify(value));
    }

    change(value: any) {
        // console.log('change', value);
    }

    error(value: any) {
        // console.log('error', value);
    }

}
