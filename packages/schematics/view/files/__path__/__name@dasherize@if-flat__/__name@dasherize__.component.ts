import { Component, OnInit<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';<% if(!modal) { %>
  import { ActivatedRoute } from '@angular/router';<% } %>
  import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
  import { _HttpClient } from '@delon/theme';

  @Component({
    selector: '<%= selector %>',<% if(inlineTemplate) { %>
    template: `<% if(modal) { %>
      <div class="modal-header">
        <div class="modal-title">查看 {{ record.id }} 用户信息</div>
      </div>
      <nz-spin *ngIf="!i" class="modal-spin"></nz-spin>
      <desc-list *ngIf="i">
        <desc-list-item term="姓名">{{ i.owner }}</desc-list-item>
        <desc-list-item term="会员卡号">32943898021309809423</desc-list-item>
        <desc-list-item term="身份证">3321944288191034921</desc-list-item>
        <desc-list-item term="联系方式">18112345678</desc-list-item>
        <desc-list-item term="联系地址">曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口</desc-list-item>
      </desc-list>
      <div class="modal-footer">
        <button nz-button type="button" (click)="close()">关闭</button>
      </div><% } else { %><page-header [title]="'查看 ' + id + ' 用户信息'"></page-header>
      <nz-card>
        <nz-spin *ngIf="!i" class="modal-spin"></nz-spin>
        <desc-list *ngIf="i">
          <desc-list-item term="姓名">{{ i.owner }}</desc-list-item>
          <desc-list-item term="会员卡号">32943898021309809423</desc-list-item>
          <desc-list-item term="身份证">3321944288191034921</desc-list-item>
          <desc-list-item term="联系方式">18112345678</desc-list-item>
          <desc-list-item term="联系地址">曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口</desc-list-item>
        </desc-list>
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
