import { Component, OnInit, ViewChild<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';
import { SFSchema } from 'nz-schema-form';
import { _HttpClient } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';

@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: `
    <pro-header [title]="'Page Name'"></pro-header>
    <nz-card>
        <nz-sf layout="inline" [schema]="searchSchema"
            [actions]="searchActions" (onChange)="params=$event.value"></nz-sf>
        <simple-table #st [data]="url" [columns]="columns" [extraParams]="params"></simple-table>
    </nz-card>
  `,<% } else { %>
  templateUrl: './<%= dasherize(name) %>.component.html',<% } if(inlineStyle) { %><% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= classify(name) %>Component implements OnInit {

    params: any = {};
    url = `/`;
    @ViewChild('st') st: SimpleTableComponent;
    searchSchema: SFSchema = {
        properties: {
            q: {
                type: 'string',
                title: '关键词'
            }
        },
        button: {
            items: [
                {
                    label: '搜索',
                    id: 'send',
                    type: 'primary'
                },
                {
                    label: '重置',
                    id: 'reset'
                }
            ]
        }
    };
    searchActions = {
        send: (form: any) => {
            this.st.load(1);
        },
        reset: (form: any) => {
            form.reset({});
            this.st.reset();
        }
    };
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id' },
        { title: '邮箱', index: 'email' }
    ];

    constructor(private http: _HttpClient) { }

    ngOnInit() { }

}
