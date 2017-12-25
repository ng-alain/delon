import { Component, OnInit } from '@angular/core';
import { SimpleTableColumn, SimpleTableButton, SimpleTableChange } from '@delon/abc';
import { map } from 'rxjs/operators';
import { RandomUserService } from '../../../../../scaffold/src/app/routes/tables/randomUser.service';
import { NzMessageService } from 'ng-zorro-antd';
import { getFakeChartData } from '../../../../../scaffold/_mock/chart.service';

@Component({
    selector: `app-table`,
    template: `
    <nz-card>
        <form nz-form>
            <div nz-row nz-form-item [nzGutter]="16" class="mb0">
                <div nz-form-label nz-col [nzSm]="2">
                    <label for="userid">User ID</label>
                </div>
                <div nz-form-control nz-col [nzSm]="5">
                    <nz-input [(ngModel)]="args.userid" name="userid" [nzId]="'userid'" [nzPlaceHolder]="'placeholder'"></nz-input>
                </div>
                <div nz-form-label nz-col [nzSm]="2">
                    <label>Modified</label>
                </div>
                <div nz-form-control nz-col [nzSm]="8">
                    <div nz-row>
                        <div nz-form-control nz-col [nzSpan]="11">
                            <nz-datepicker [(ngModel)]="args.modified_begin" name="modified_begin" [nzPlaceHolder]="'begin'"></nz-datepicker>
                        </div>
                        <div nz-col [nzSpan]="1">
                            <p nz-form-split>-</p>
                        </div>
                        <div nz-form-control nz-col [nzSpan]="11">
                            <nz-datepicker [(ngModel)]="args.modified_end" name="modified_end" [nzPlaceHolder]="'end'"></nz-datepicker>
                        </div>
                    </div>
                </div>
                <div nz-col [nzSm]="5" [nzOffset]="2">
                    <button nz-button [nzType]="'primary'" (click)="load()" [nzLoading]="loading"><span>Search</span></button>
                    <button nz-button (click)="clear()" [disabled]="loading">Clear</button>
                </div>
            </div>
        </form>
    </nz-card>
    <full-content>
        <div nz-row [nzGutter]="16">
            <div nz-col [nzMd]="24">
                <nz-card>
                    <div class="mb-sm text-right">
                        <nz-dropdown>
                            <button nz-button nz-dropdown [disabled]="!_allChecked && !_indeterminate">
                                <span>Export</span> <i class="anticon anticon-down"></i>
                            </button>
                            <ul nz-menu>
                                <li nz-menu-item>Excel</li>
                                <li nz-menu-item>JSON</li>
                                <li nz-menu-item>PNG</li>
                            </ul>
                        </nz-dropdown>
                        <button nz-button [nzType]="'default'" full-toggle class="ml-sm">Full</button>
                    </div>
                    <simple-table [data]="list" [ps]="ps" [columns]="columns" (change)="load($event)" [scroll]="{y: 200}">
                        <ng-template st-row="events" let-item let-index="index">
                            <mini-bar height="15" theme="mini" color="#999" borderWidth="3" [padding]="[0, 0, 0, 0]" [data]="events"></mini-bar>
                        </ng-template>
                    </simple-table>
                </nz-card>
            </div>
        </div>
    </full-content>
    `,
    providers: [ RandomUserService ]
})
export class DemoTableComponent implements OnInit {

    ps = 10;
    total = 200; // mock total
    args: any = { };
    list: any[] = [];
    events = [...getFakeChartData.visitData.slice(0, 6)].map(item => {
        item.x = item.x.substring(5);
        return item;
    });
    columns: SimpleTableColumn[] = [
        { title: 'id', index: 'id.value', type: 'checkbox' },
        { title: 'Avatar', index: 'picture.thumbnail', type: 'img', width: '60px' },
        { title: 'Name', index: 'name.first', width: '120px', format: (item: any) => `${item.name.first} ${item.name.last}` },
        { title: 'Email', index: 'email' },
        { title: 'Gender', index: 'gender', type: 'yn', ynTruth: 'female', ynYes: '男', ynNo: '女', width: '120px' },
        { title: 'Events', render: 'events', width: '60px' },
        { title: 'Price', index: 'price', type: 'currency', width: '120px' },
        { title: 'Registered', index: 'registered', type: 'date', width: '130px' },
        {
            title: 'Actions',
            width: '120px',
            buttons: <SimpleTableButton[]>[
                {
                    text: 'Edit',
                    click: (item: any) => this.message.info(`edit [${item.id.value}]`)
                },
                {
                    text: 'Delete',
                    type: 'del',
                    click: (item: any) => this.message.info(`deleted [${item.id.value}]`)
                }
            ]
        }
    ];

    load(ret?: SimpleTableChange) {
        ret = ret || <any>{ pi: 1, ps: this.ps };
        this._randomUser.getUsers(ret.pi, ret.ps, this.args)
                        .pipe(
                            map(data => {
                                data.results.forEach(item => {
                                    item.checked = false;
                                    item.price = +((Math.random() * (10000000 - 100)) + 100).toFixed(2);
                                });
                                return <any[]>data.results;
                            })
                        )
                        .subscribe(res => this.list = res);
    }

    constructor(private _randomUser: RandomUserService, private message: NzMessageService) {
    }

    ngOnInit(): void {
        this.load();
    }

    clear() {
        this.args = {};
        this.load();
    }
}
