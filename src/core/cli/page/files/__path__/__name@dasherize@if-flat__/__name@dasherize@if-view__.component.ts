import { Component, OnInit<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: `<% if(modal) { %>
    <div class="modal-header">
        <div class="modal-title">10000 - 标题</div>
    </div>
    <desc-list class="mb-md">
        <desc-list-item term="编号">10000</desc-list-item>
    </desc-list>
    <div class="modal-footer">
        <button nz-button type="button" (click)="close()">关闭</button>
    </div><% } else { %>
    <pro-header [title]="'基础详情页'"></pro-header>
    <nz-card [nzNoHovering]="true" [nzBordered]="false">
        <desc-list size="large" title="区域一" class="mb-lg">
            <desc-list-item term="编号">10000</desc-list-item>
        </desc-list>
        <nz-divider class="mb-lg"></nz-divider>
        <desc-list size="large" title="区域二" class="mb-lg">
            <desc-list-item term="编号">10000</desc-list-item>
        </desc-list>
    </nz-card><% } %>
  `,<% } else { %>
  templateUrl: './<%= dasherize(name) %>.component.html',<% } if(inlineStyle) { %><% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= classify(name) %>Component implements OnInit {
    private readonly URI = '/';
    i: any;

    constructor(public http: _HttpClient, private subject: NzModalSubject) { }

    ngOnInit() {
        this.http.get(this.URI + this.i.id).subscribe((res: any) => this.i = res.d);
    }

    close() {
        this.subject.destroy();
    }
}
