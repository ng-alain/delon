import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  effect,
  inject,
  input,
  numberAttribute,
  output,
  signal
} from '@angular/core';

import { DelonLocaleService } from '@delon/theme';
import { NzBadgeComponent } from 'ng-zorro-antd/badge';
import type { NgClassType } from 'ng-zorro-antd/core/types';
import { NzDropdownDirective, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzSpinComponent } from 'ng-zorro-antd/spin';
import { NzTabComponent, NzTabsComponent } from 'ng-zorro-antd/tabs';

import { NoticeIconTabComponent } from './notice-icon-tab.component';
import { NoticeIconSelect, NoticeItem } from './notice-icon.types';

@Component({
  selector: 'notice-icon',
  exportAs: 'noticeIcon',
  template: `
    <ng-template #badgeTpl>
      <nz-badge [nzCount]="count()" [class]="btnClass()" [nzStyle]="{ 'box-shadow': 'none' }">
        <nz-icon nzType="bell" [class]="btnIconClass()" />
      </nz-badge>
    </ng-template>
    @let d = data();
    @if (d.length <= 0) {
      <ng-template [ngTemplateOutlet]="badgeTpl" />
    } @else {
      <div
        nz-dropdown
        [nzVisible]="popoverVisible()"
        (nzVisibleChange)="onVisibleChange($event)"
        nzTrigger="click"
        nzPlacement="bottomRight"
        [nzOverlayClassName]="overlayCls()"
        [nzDropdownMenu]="noticeMenu"
      >
        <ng-template [ngTemplateOutlet]="badgeTpl" />
      </div>
      <nz-dropdown-menu #noticeMenu="nzDropdownMenu">
        <nz-spin [nzSpinning]="loading()" [nzDelay]="0">
          @if (delayShow()) {
            <nz-tabs [nzSelectedIndex]="0" [nzCentered]="centered()">
              @for (i of d; track $index) {
                <nz-tab [nzTitle]="i.title">
                  <notice-icon-tab
                    [locale]="locale()"
                    [item]="i"
                    (select)="select.emit($event)"
                    (clear)="clear.emit($event)"
                  />
                </nz-tab>
              }
            </nz-tabs>
          }
        </nz-spin>
      </nz-dropdown-menu>
    }
  `,
  host: { class: 'notice-icon__btn' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgTemplateOutlet,
    NzBadgeComponent,
    NzIconDirective,
    NzDropdownDirective,
    NzDropdownMenuComponent,
    NzSpinComponent,
    NzTabsComponent,
    NzTabComponent,
    NoticeIconTabComponent
  ]
})
export class NoticeIconComponent {
  protected locale = inject(DelonLocaleService).valueSignal('noticeIcon');
  readonly data = input<NoticeItem[]>([]);
  readonly count = input(undefined, { transform: numberAttribute });
  readonly loading = input(false, { transform: booleanAttribute });
  readonly popoverVisible = input(false, { transform: booleanAttribute });
  readonly btnClass = input<NgClassType>();
  readonly btnIconClass = input<NgClassType>();
  readonly centered = input(false, { transform: booleanAttribute });
  readonly select = output<NoticeIconSelect>();
  readonly clear = output<string>();
  readonly popoverVisibleChange = output<boolean>();

  protected overlayCls = signal<string>('');

  constructor() {
    effect(() => {
      this.overlayCls.set(`header-dropdown notice-icon${!this.centered() ? ' notice-icon__tab-left' : ''}`);
      if (!this.popoverVisible()) this.delayShow.set(false);
    });
  }

  protected delayShow = signal(false);
  onVisibleChange(result: boolean): void {
    this.delayShow.set(result);
    this.popoverVisibleChange.emit(result);
  }
}
