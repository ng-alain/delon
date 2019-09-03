import { Component } from '@angular/core';
import { STColumn, STData, STChange } from '@delon/abc';

@Component({
  selector: 'components-table-radio',
  template: `<st [data]="url" [columns]="columns"
        [req]="{params: params}" [res]="{process: dataChange}"
        (change)="change($event)"></st>`,
})
export class ComponentsTableRadioComponent {
  url = `/users?total=300`;
  params = { a: 1, b: 2 };
  columns: STColumn[] = [
    { title: '编号', index: 'id', type: 'radio' },
    { title: '头像', type: 'img', width: '50px', index: 'picture.thumbnail' },
    { title: '邮箱', index: 'email' },
    { title: '电话', index: 'phone' },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];
  change(ret: STChange) {
    console.log('change', ret);
  }
  dataChange(data: STData[]) {
    return data.map((i: STData, index: number) => {
      i.disabled = index === 0;
      return i;
    });
  }
}