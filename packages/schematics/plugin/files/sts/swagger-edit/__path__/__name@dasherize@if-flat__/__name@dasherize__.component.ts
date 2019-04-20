import { Component, OnInit, ViewChild<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';<% if(!modal) { %>
  import { ActivatedRoute } from '@angular/router';
  import { Location } from '@angular/common';<% } %>
  import { <% if(modal) { %>NzModalRef, <% } %>NzMessageService } from 'ng-zorro-antd';
  import { _HttpClient } from '@delon/theme';
  import { SFSchema, SFUISchema } from '@delon/form';
  
  @Component({
    selector: '<%= selector %>',
    templateUrl: './<%= dasherize(name) %>.component.html',<% if(!inlineStyle) { %><% } else { %>
      styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>,
    encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
    changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
  })
  export class <%= componentName %> implements OnInit {
    <% if(modal) { %>record: any = {};<% } else { %>
    id = this.route.snapshot.params.id;<% } %>
    i: any;
    schema: SFSchema = <%=sfSchema%>;
    ui: SFUISchema = {
      '*': {
        spanLabelFixed: 100,
        grid: { span: 12 },
      },
    };
  
    constructor(<% if(modal) { %>
      private modal: NzModalRef,<% } else { %>
      private route: ActivatedRoute,
      public location: Location,<% } %>
      private msgSrv: NzMessageService,
      public http: _HttpClient,
    ) {}
  
    ngOnInit(): void {
      <% if(modal) { %>if (this.record.id > 0)<% } else { %>if (this.id > 0)<% } %>
      this.http.get(`<%=sfUrl%>${this.record.id}`).subscribe(res => (this.i = res));
    }
  
    save(value: any) {
      this.http.post(`<%=sfUrl%>${this.record.id}`, value).subscribe(res => {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      });
    }<% if(modal) { %>
  
    close() {
      this.modal.destroy();
    }<% } %>
  }