import { Component, OnInit<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { SimpleTableColumn, SimpleTableComponent } from '@delon/abc';

@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: `
    <pro-header [title]="'Page Name'"></pro-header>
    <nz-card>
        <simple-table [data]="url" [columns]="columns"></simple-table>
    </nz-card>
  `,<% } else { %>
  templateUrl: './<%= dasherize(name) %>.component.html',<% } if(inlineStyle) { %><% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= classify(name) %>Component implements OnInit {

    params: any = {};
    url = '/';
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id' }
    ];

    constructor(private http: _HttpClient) { }

    ngOnInit() { }

}
