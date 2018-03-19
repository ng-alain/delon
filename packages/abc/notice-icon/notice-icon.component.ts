import { Component, Input, Output, EventEmitter, HostListener, HostBinding, ViewEncapsulation, ViewChildren, TemplateRef, ViewChild } from '@angular/core';
import { coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';

import { NoticeItem, NoticeIconClick } from './interface';

@Component({
    selector: 'notice-icon',
    template: `
    <nz-badge *ngIf="data?.length === 0" [nzCount]="count">
        <i class="anticon anticon-bell"></i>
    </nz-badge>
    <nz-popover *ngIf="data?.length > 0"
        [nzVisible]="popoverVisible" (nzVisibleChange)="onVisibleChange($event)" nzTrigger="click"
        nzPlacement="bottomRight"
        nzOverlayClassName="ad-notice-icon-con">
        <div nz-popover class="item">
            <nz-badge [nzCount]="count">
                <i class="anticon anticon-bell"></i>
            </nz-badge>
        </div>
        <ng-template #nzTemplate>
            <nz-spin [nzSpinning]="loading" [nzDelay]="0">
                <nz-tabset>
                    <nz-tab *ngFor="let i of data" [nzTitle]="i.title">
                        <notice-icon-tab [data]="i"
                                         (select)="onSelect($event)"
                                         (clear)="onClear($event)"></notice-icon-tab>
                    </nz-tab>
                </nz-tabset>
            </nz-spin>
        </ng-template>
    </nz-popover>
    `,
    host: { '[class.ad-notice-icon]': 'true' },
    preserveWhitespaces: false
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

    @Output() popoverVisibleChange = new EventEmitter<boolean>();

    onVisibleChange(result: boolean) {
        this.popoverVisibleChange.emit(result);
    }

    onSelect(i: any) {
        this.select.emit(i);
    }

    onClear(title: string) {
        this.clear.emit(title);
    }
}
