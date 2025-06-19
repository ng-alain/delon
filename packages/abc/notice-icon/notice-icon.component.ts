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
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { DelonLocaleService, LocaleData } from '@delon/theme';
import { NzBadgeComponent } from 'ng-zorro-antd/badge';
import type { NgClassType } from 'ng-zorro-antd/core/types';
import { NzDropDownDirective, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzSpinComponent } from 'ng-zorro-antd/spin';
import { NzTabComponent, NzTabSetComponent } from 'ng-zorro-antd/tabs';

import { NoticeIconTabComponent } from './notice-icon-tab.component';
import { NoticeIconSelect, NoticeItem } from './notice-icon.types';

@Component({
  selector: 'notice-icon',
  exportAs: 'noticeIcon',
  templateUrl: './notice-icon.component.html',
  host: { '[class.notice-icon__btn]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgTemplateOutlet,
    NzBadgeComponent,
    NzIconDirective,
    NzDropDownDirective,
    NzDropdownMenuComponent,
    NzSpinComponent,
    NzTabSetComponent,
    NzTabComponent,
    NoticeIconTabComponent
  ]
})
export class NoticeIconComponent {
  locale = toSignal<LocaleData>(inject(DelonLocaleService).change.pipe(map(data => data['noticeIcon'])), {
    requireSync: true
  });
  data = input<NoticeItem[]>([]);
  count = input(undefined, { transform: numberAttribute });
  loading = input(false, { transform: booleanAttribute });
  popoverVisible = input(false, { transform: booleanAttribute });
  btnClass = input<NgClassType>();
  btnIconClass = input<NgClassType>();
  centered = input(false, { transform: booleanAttribute });
  readonly select = output<NoticeIconSelect>();
  readonly clear = output<string>();
  readonly popoverVisibleChange = output<boolean>();

  overlayCls = signal<string>('');

  constructor() {
    effect(() => {
      this.overlayCls.set(`header-dropdown notice-icon${!this.centered() ? ' notice-icon__tab-left' : ''}`);
      if (!this.popoverVisible()) this.delayShow.set(false);
    });
  }

  delayShow = signal(false);
  onVisibleChange(result: boolean): void {
    this.delayShow.set(result);
    this.popoverVisibleChange.emit(result);
  }
}
