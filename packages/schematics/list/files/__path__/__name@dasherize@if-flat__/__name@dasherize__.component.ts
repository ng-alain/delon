import { Component, OnInit, ViewChild<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: `
  <page-header [title]="'Page Name'"></page-header>
    <nz-card>
      <sf mode="search" [schema]="searchSchema" [formData]="params" (formSubmit)="st.reset($event)" (formReset)="st.reset(params)"></sf>
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
    url = `/user`;
    searchSchema: SFSchema = {
      properties: {
        no: {
          type: 'string',
          title: '编号'
        }
      }
    };
    @ViewChild('st') st: SimpleTableComponent;
    columns: SimpleTableColumn[] = [
      { title: '编号', index: 'no' },
      { title: '调用次数', type: 'number', index: 'callNo' },
      { title: '头像', type: 'img', width: '50px', index: 'avatar' },
      { title: '时间', type: 'date', index: 'updatedAt' },
      {
        title: '',
        buttons: [
          // { text: '查看', click: (item: any) => this.router.navigateByUrl(`/form/${item.id}`) },
          // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
        ]
      }
    ];

    constructor(private http: _HttpClient) { }

    ngOnInit() { }

}
