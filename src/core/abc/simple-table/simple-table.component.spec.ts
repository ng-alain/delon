import { HttpClientModule } from '@angular/common/http';
import { Injector, Component, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzRadioExtraModule } from 'ng-zorro-antd-extra';
import { _HttpClient, CNCurrencyPipe, MomentDatePipe, YNPipe, ModalHelper, AlainThemeModule } from '@delon/theme';
import { SimpleTableComponent } from './simple-table.component';
import { SimpleTableRowDirective } from './simple-table-row.directive';
import { SimpleTableFilter, SimpleTableColumn } from './interface';
import { SimpleTableConfig } from './simple-table.config';
import { AlainACLModule, ACLService } from '@delon/acl';

const USERS: any[] = Array(100).fill({}).map((item: any, idx: number) => {
    return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
        status: idx % 2 === 0,
        date: new Date,
        img: `${idx + 1}.png`
    };
});
const COLUMNS: SimpleTableColumn[] = [
    { title: 'id', index: 'id', type: 'checkbox', selections: [
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
        title: 'name', index: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
        filters: [ { text: 'name 1', value: 'name 1' }, { text: 'name 2', value: 'name 2' } ],
        filter: (filter: SimpleTableFilter, record: any) => record.name.indexOf(filter.value) === 0
    },
    { title: 'age', index: 'age', type: 'currency' },
    { title: 'date', index: 'date', type: 'date' },
    { title: 'img', index: 'img', type: 'img' },
    { title: 'status', index: 'status', type: 'yn' },
    {
        title: 'op',
        buttons: [
            {
                text: 'del',
                type: 'del'
            }
        ]
    }
];
const ps = 3;

describe('abc: simple-table', () => {
    let injector: Injector;
    let fixture: ComponentFixture<TestComponent>;
    let context: TestComponent;
    let dl: DebugElement;

    function genModule(other: { acl: boolean }) {
        const imports = [
            CommonModule, FormsModule, HttpClientModule, NgZorroAntdModule.forRoot(),
            NzRadioExtraModule, NzRadioExtraModule, AlainThemeModule.forRoot()
        ];
        if (other.acl) imports.push(AlainACLModule.forRoot());
        injector = TestBed.configureTestingModule({
            imports,
            declarations: [ SimpleTableComponent, SimpleTableRowDirective, TestComponent ],
            providers: [
                SimpleTableConfig, _HttpClient
            ]
        });
        fixture = TestBed.createComponent(TestComponent);
        dl = fixture.debugElement;
        context = dl.componentInstance;
        fixture.detectChanges();
    }

    describe('methods', () => {

        beforeEach(() => genModule({ acl: false }));

        it('should be init.', () => {
            expect(fixture).not.toBeNull();
            expect(dl.nativeElement.querySelectorAll('.ant-table-tbody tr').length).toBe(ps);
        });
    });

    describe('acl', () => {

        let acl: ACLService;

        beforeEach(() => {
            genModule({ acl: true });
            acl = injector.get(ACLService);
            acl.set({ role: [ 'user' ] });
        });

        it('should be not [age] column', () => {
            expect((dl.nativeElement as HTMLElement).querySelectorAll('[data-col="age"]').length).toBe(1);
            const cols = JSON.parse(JSON.stringify(COLUMNS));
            cols.find(w => w.index === 'age').acl = 'admin';
            context.columns = cols;
            fixture.detectChanges();
            expect((dl.nativeElement as HTMLElement).querySelectorAll('[data-col="age"]').length).toBe(0);
        });

        it('should be not [del] button', () => {
            expect((dl.nativeElement as HTMLElement).querySelectorAll('.ant-table-tbody a').length).toBeGreaterThan(1);
            const cols: SimpleTableColumn[] = JSON.parse(JSON.stringify(COLUMNS));
            cols.find(w => w.title === 'op').buttons[0].acl = 'admin';
            context.columns = cols;
            fixture.detectChanges();
            expect((dl.nativeElement as HTMLElement).querySelectorAll('.ant-table-tbody a').length).toBe(0);
        });
    });

});

@Component({
    template: `<simple-table [data]="users" [ps]="ps" [columns]="columns"
    (checkboxChange)="checkboxChange($event)" (sortChange)="sortChange($event)"
    pagePlacement="center" toTopInChange
    showSizeChanger showQuickJumper showTotal isPageIndexReset></simple-table>`
})
class TestComponent {
    ps = ps;
    users: any[] = JSON.parse(JSON.stringify(USERS));
    columns: SimpleTableColumn[] = JSON.parse(JSON.stringify(COLUMNS));
    checkboxChange(ret: any) {
        console.log('checkboxChange', ret);
    }
    sortChange(ret: any) {
        console.log('sortChange', ret);
    }
}
