import { Component, OnInit<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';<% if(!modal) { %>
import { ActivatedRoute } from '@angular/router';<% } %>
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';<% if(modal) { %>
import { NzModalRef } from 'ng-zorro-antd/modal';<% } %>

@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: ``,<% } else { %>
  templateUrl: './<%= dasherize(name) %>.component.html',<% } if(!inlineStyle) { %><% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %><% if(!!viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= componentName %> implements OnInit {
  <% if(modal) { %>record: any = {};<% } else { %>
  id = this.route.snapshot.params.id;<% } %>
  i: any;

  constructor(<% if(modal) { %>
    private modal: NzModalRef,<% } else { %>
    private route: ActivatedRoute,<% } %>
    private msgSrv: NzMessageService,
    private http: _HttpClient
  ) { }

  ngOnInit(): void {<% if(modal) { %>
    this.http.get(`/user/${this.record.id}`).subscribe(res => this.i = res);<% } else { %>
    this.http.get(`/user/${this.id}`).subscribe(res => this.i = res);<% } %>
  }<% if(modal) { %>

  close(): void {
    this.modal.destroy();
  }<% } %>
}
