import { Component, ViewChild } from '@angular/core';

import { STChange, STColumn, STComponent, STData, STModule } from '@delon/abc/st';

@Component({
  selector: 'app-demo',
  template: ` <st #st [data]="users" [columns]="columns" (change)="change($event)" /> `,
  imports: [STModule]
})
export class DemoComponent {
  @ViewChild('st') readonly st!: STComponent;

  users: STData[] = Array(10)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      name: `name ${idx + 1}`,
      age: Math.ceil(Math.random() * 10) + 20
    }));
  columns: STColumn[] = [
    { title: '序号', type: 'no' },
    { title: '编号', index: 'id' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age' },
    {
      title: '操作区',
      buttons: [{ text: '更多1' }, { text: '更多', children: [] }]
    }
  ];

  change(e: STChange): void {
    console.log(e);
  }
}
