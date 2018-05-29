import { Component, OnInit, ViewChild<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: `
  <page-header></page-header>
    <nz-card>
      <sf mode="search" [schema]="searchSchema" [formData]="params" (formSubmit)="st.reset($event)" (formReset)="st.reset(params)"></sf>
      <div class="my-sm">
        <button (click)="add()" nz-button nzType="primary">新建</button>
      </div>
      <simple-table #st [data]="url" [columns]="columns" [extraParams]="params"></simple-table>
    </nz-card>
  `,<% } else { %>
  templateUrl: './<%= dasherize(name) %>.component.html',<% } if(!inlineStyle) { %><% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= componentName %> implements OnInit {

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
          // { text: '查看', click: (item: any) => `/form/${item.id}` },
          // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
        ]
      }
    ];

    constructor(private http: _HttpClient, private modal: ModalHelper) { }

    ngOnInit() { }

    add() {
      // this.modal
      //   .static(WareEditComponent, { i: { id: 0 } })
      //   .pipe(filter(w => w === true))
      //   .subscribe(() => this.st.reload());
    }

}
