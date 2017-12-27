
import { Component } from '@angular/core';
import { SimpleTableColumn, SimpleTableData } from '@delon/abc';

@Component({
    selector: 'app-demo',
    template: `<simple-table [url]="url" [extraParams]="params" [total]="total" [columns]="columns"
                [preDataChange]="dataChange" [resReName]="{list: 'results' }"
                (radioChange)="radioChange($event)"></simple-table>`
})
export class DemoComponent {
    url = `https://randomuser.me/api/?results=3`;
    params = { a: 1, b: 2 };
    total = 100;
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id.value', type: 'radio' },
        { title: '头像', type: 'img', width: '50px', index: 'picture.thumbnail' },
        { title: '邮箱', index: 'email' },
        { title: '电话', index: 'phone' },
        { title: '注册时间', type: 'date', index: 'registered' }
    ];
    radioChange(ret: any) {
        console.log('radioChange', ret);
    }
    dataChange(data: SimpleTableData[]) {
        return data.map((i: SimpleTableData, index: number) => {
            i.disabled = index === 0;
            return i;
        });
    }
}
