import { Component, OnInit } from '@angular/core';
import { ReuseTabService, XlsxService, SimpleTableColumn, SimpleTableFilter } from '@delon/abc';
import { MenuService, _HttpClient } from '@delon/theme';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    value = 'dashboard';

    users: any[] = Array(100).fill({}).map((item: any, idx: number) => {
        return {
            id: idx + 1,
            name: `name ${idx + 1}`,
            age: Math.ceil(Math.random() * 10) + 20
        };
    });
    columns: SimpleTableColumn[] = [
        { title: '编号', index: 'id', type: 'checkbox', selections: [
            {
                text: '小于25岁',
                select: (data: any[]) => data.forEach(item => item.checked = item.age < 25)
            },
            {
                text: '大于25岁',
                select: (data: any[]) => data.forEach(item => item.checked = item.age >= 25)
            }
        ] },
        {
            title: '姓名', index: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            filters: [ { text: 'name 1', value: 'name 1' }, { text: 'name 2', value: 'name 2' } ],
            filter: (filter: SimpleTableFilter, record: any) => record.name.indexOf(filter.value) === 0
        },
        {
            title: '年龄', index: 'age',
            sorter: (a, b) => a.age - b.age,
            filters: [ { text: '20岁以下', value: [0, 20] }, { text: '20-25岁', value: [ 20, 25] }, { text: '25岁以上', value: [ 25, 100] } ],
            filterMultiple: false,
            filter: (filter: SimpleTableFilter, record: any) => record.age >= filter.value[0] && record.age <= filter.value[1]
        }
    ];

    constructor(private srv: ReuseTabService, private menuSrv: MenuService, private http: _HttpClient, private xlsx: XlsxService) {}

    ngOnInit() {
        this.srv.title = 'db';
        setTimeout(() => {
            this.menuSrv.add([{ text: 'asdf' }]);
        }, 1000 * 2);

        this.load();
    }

    load() {
        this.http.get('/users').subscribe(res => console.log('res', res));
    }

    xlsxExport() {
        this.xlsx.export({
            sheets: {
                Sheet1: {
                    '!ref': 'A1:C1',
                    A1: { t: 'n', v: 10000 },                    // <-- General format
                    B1: { t: 'n', v: 10000, z: '0%' },           // <-- Builtin format
                    C1: { t: 'n', v: 10000, z: '"T"\ #0.00' }  // <-- Custom format
                }
            }
        });
    }

    xlsxImportViaUrl() {
        this.xlsx.import(`./assets/demo.xlsx`).then(res => console.log(res));
    }

}
