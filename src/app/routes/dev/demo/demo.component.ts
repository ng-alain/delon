import { Component } from '@angular/core';
import { STColumn } from '@delon/abc/st';

@Component({
  selector: 'app-demo',
  template: `
    <st [data]="url" ps="2" [req]="{ params: params }" [columns]="columns" [expand]="expand">
      <ng-template #expand let-item let-index="index" let-column="column">
        <nz-card [nzBordered]="false">
          <nz-alert nzType="info" [nzMessage]="alertMsg" nzShowIcon>
            <ng-template #alertMsg> 结算总金额：{{ 1000 }} </ng-template>
          </nz-alert>
          <st bordered="true" [data]="url" ps="2" [req]="{ params: params }" [columns]="columns" [body]="bodyTpl">
            <ng-template #bodyTpl let-s>
              <tr>
                <td>合计</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </ng-template>
          </st>
        </nz-card>
      </ng-template>
    </st>
  `,
})
export class DemoComponent {
  url = `/users?total=100`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '编号', index: 'id' },
    { title: '头像', type: 'img', width: 50, index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];
}
