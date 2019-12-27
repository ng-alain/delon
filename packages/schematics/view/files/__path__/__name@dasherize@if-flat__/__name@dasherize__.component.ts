import { Component, OnInit<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';<% if(!modal) { %>
import { ActivatedRoute } from '@angular/router';<% } %>
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: ``,<% } else { %>
  templateUrl: './<%= dasherize(name) %>.component.html',<% } if(!inlineStyle) { %><% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>,
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
    public msgSrv: NzMessageService,
    public http: _HttpClient
  ) { }

  ngOnInit(): void {<% if(modal) { %>
    this.http.get(`/user/${this.record.id}`).subscribe(res => this.i = res);<% } else { %>
    this.http.get(`/user/${this.id}`).subscribe(res => this.i = res);<% } %>
  }<% if(modal) { %>

  close() {
    this.modal.destroy();
  }<% } %>
}
