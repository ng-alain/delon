import { Component, OnInit, ViewChild<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';<% if(!modal) { %>
  import { ActivatedRoute } from '@angular/router';
  import { Location } from '@angular/common';<% } %>
  import { <% if(modal) { %>NzModalRef, <% } %>NzMessageService } from 'ng-zorro-antd';
  import { _HttpClient } from '@delon/theme';
  import { SFSchema, SFUISchema } from '@delon/form';

  @Component({
    selector: '<%= selector %>',<% if(inlineTemplate) { %>
    template: `<% if(modal) { %><div class="modal-header">
      <div class="modal-title">编辑 {{ record.id }} 用户信息</div>
    </div>
    <nz-spin *ngIf="!i" class="modal-spin"></nz-spin>
    <sf *ngIf="i" #sf mode="edit" [schema]="schema" [ui]="ui" [formData]="i" button="none">
      <div class="modal-footer">
        <button nz-button type="button" (click)="close()">关闭</button>
        <button nz-button type="submit" [nzType]="'primary'" (click)="save(sf.value)" [disabled]="!sf.valid" [nzLoading]="http.loading">保存</button>
      </div>
    </sf><% } else { %><page-header [title]="'编辑 ' + id + ' 用户信息'"></page-header>
    <nz-card>
      <nz-spin *ngIf="!i" class="modal-spin"></nz-spin>
      <sf *ngIf="i" #sf mode="edit" [schema]="schema" [ui]="ui" [formData]="i" button="none">
        <footer-toolbar errorCollect>
          <button nz-button type="button" (click)="_location.back()" [nzLoading]="http.loading">返回</button>
          <button nz-button type="submit" [nzType]="'primary'" (click)="save(sf.value)" [disabled]="!sf.valid" [nzLoading]="http.loading">保存</button>
        </footer-toolbar>
      </sf>
    </nz-card><% } %>
    `,<% } else { %>
    templateUrl: './<%= dasherize(name) %>.component.html',<% } if(inlineStyle) { %><% } else { %>
    styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>,
    encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
    changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
  })
  export class <%= classify(name) %>Component implements OnInit {
    <% if(modal) { %>record: any = {};<% } else { %>
    id = this.route.snapshot.params.id;<% } %>
    i: any;
    schema: SFSchema = {
      properties: {
        no: { type: 'string', title: '编号', readOnly: true },
        owner: { type: 'string', title: '姓名', maxLength: 15 },
        callNo: { type: 'number', title: '调用次数' },
        href: { type: 'string', title: '链接', format: 'uri' },
        description: { type: 'string', title: '描述', maxLength: 140 },
      },
      required: ['owner', 'callNo', 'href', 'description'],
    };
    ui: SFUISchema = {
      '*': {
        spanLabelFixed: 100,
        grid: { span: 12 },
      },
      $href: {
        widget: 'string',
      },
      $description: {
        widget: 'textarea',
        grid: { span: 24 },
      },
    };

    constructor(<% if(modal) { %>
      private modal: NzModalRef,<% } else { %>
      private route: ActivatedRoute,
      public _location: Location,<% } %>
      public msgSrv: NzMessageService,
      public http: _HttpClient,
    ) {}

    ngOnInit(): void {
      this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
    }

    save(value: any) {
      this.http.post(`/user/${this.record.id}`, value).subscribe(res => {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      });
    }<% if(modal) { %>

    close() {
      this.modal.destroy();
    }<% } %>
  }
