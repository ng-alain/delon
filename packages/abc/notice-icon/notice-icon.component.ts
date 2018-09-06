import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputNumber, InputBoolean } from '@delon/util';

import { NoticeItem, NoticeIconSelect } from './interface';

@Component({
  selector: 'notice-icon',
  template: `
  <nz-badge *ngIf="data?.length === 0" [nzCount]="count">
    <i class="anticon anticon-bell"></i>
  </nz-badge>
  <nz-popover *ngIf="data?.length > 0"
    [nzVisible]="popoverVisible" (nzVisibleChange)="onVisibleChange($event)" nzTrigger="click"
    nzPlacement="bottomRight"
    nzOverlayClassName="notice-icon">
    <div nz-popover class="alain-default__nav-item notice-icon__item">
      <nz-badge [nzCount]="count">
        <i class="anticon anticon-bell"></i>
      </nz-badge>
    </div>
    <ng-template #nzTemplate>
      <nz-spin [nzSpinning]="loading" [nzDelay]="0">
        <nz-tabset>
          <nz-tab *ngFor="let i of data" [nzTitle]="i.title">
            <notice-icon-tab
              [data]="i"
              (select)="onSelect($event)"
              (clear)="onClear($event)"></notice-icon-tab>
          </nz-tab>
        </nz-tabset>
      </nz-spin>
    </ng-template>
  </nz-popover>
  `,
  host: { '[class.notice-icon__btn]': 'true' },
  preserveWhitespaces: false,
})
export class NoticeIconComponent {
  @Input()
  data: NoticeItem[] = [];

  /** 图标上的消息总数 */
  @Input()
  @InputNumber()
  count: number;

  /** 弹出卡片加载状态 */
  @Input()
  @InputBoolean()
  loading = false;

  @Output()
  select = new EventEmitter<NoticeIconSelect>();
  @Output()
  clear = new EventEmitter<string>();

  /** 手动控制Popover显示 */
  @Input()
  @InputBoolean()
  popoverVisible = false;

  @Output()
  popoverVisibleChange = new EventEmitter<boolean>();

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
