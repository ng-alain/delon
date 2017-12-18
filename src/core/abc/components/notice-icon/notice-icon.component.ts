import { Component, Input, Output, EventEmitter, HostListener, HostBinding, ViewEncapsulation } from '@angular/core';
import { coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';
import { NoticeItem } from './notice-item';

@Component({
    selector: 'notice-icon',
    template: `
    <nz-badge *ngIf="data?.length <= 0" [nzCount]="count" [nzDot]="dot">
        <ng-template #content>
            <i class="anticon anticon-bell"></i>
        </ng-template>
    </nz-badge>
    <nz-popover *ngIf="data?.length > 0" [nzVisible]="popoverVisible" (nzVisibleChange)="onVisibleChange($event)" nzTrigger="click" nzPlacement="bottomRight" nzOverlayClassName="notice-icon-popover">
        <div nz-popover class="item">
            <nz-badge [nzCount]="count" [nzDot]="dot">
                <ng-template #content>
                    <i class="anticon anticon-bell"></i>
                </ng-template>
            </nz-badge>
        </div>
        <ng-template #nzTemplate>
            <nz-spin [nzSpinning]="loading">
                <nz-tabset>
                    <nz-tab *ngFor="let i of data">
                        <ng-template #nzTabHeading>{{i.title}}</ng-template>
                        <notice-list [data]="i"
                                     (select)="onSelect($event)"
                                     (clear)="onClear($event)"></notice-list>
                    </nz-tab>
                </nz-tabset>
            </nz-spin>
        </ng-template>
    </nz-popover>
    `,
    styleUrls: [ './notice-icon.less' ]
})
export class NoticeIconComponent {
    @Input() data: NoticeItem[] = [];

    /** 图标上的消息总数 */
    @Input()
    get count() { return this._count; }
    set count(value: any) {
        this._count = coerceNumberProperty(value);
    }
    private _count: number;

    /** 图标不展示数字，只有一个小红点 */
    @Input()
    get dot() { return this._dot; }
    set dot(value: any) {
        this._dot = coerceBooleanProperty(value);
    }
    private _dot = false;

    /** 弹出卡片加载状态 */
    @Input()
    get loading() { return this._loading; }
    set loading(value: any) {
        this._loading = coerceBooleanProperty(value);
    }
    private _loading = false;

    @Output() select = new EventEmitter<any>();
    @Output() clear = new EventEmitter<string>();

    /** 手动控制Popover显示 */
    @Input()
    get popoverVisible() { return this._popoverVisible; }
    set popoverVisible(value: any) {
        this._popoverVisible = coerceBooleanProperty(value);
    }
    private _popoverVisible = false;

    @Output() popupVisibleChange = new EventEmitter<boolean>();

    onVisibleChange(result: boolean) {
        this.popupVisibleChange.emit(result);
    }

    onSelect(i: any) {
        this.select.emit(i);
    }

    onClear(title: string) {
        this.clear.emit(title);
    }
}
