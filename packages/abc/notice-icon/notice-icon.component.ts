import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute
} from '@angular/core';
import { Subscription } from 'rxjs';

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
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
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
export class NoticeIconComponent implements OnInit, OnChanges, OnDestroy {
  private readonly i18n = inject(DelonLocaleService);
  private readonly cdr = inject(ChangeDetectorRef);
  private i18n$?: Subscription;
  locale: LocaleData = {};

  @Input() data: NoticeItem[] = [];
  @Input({ transform: numberAttribute }) count?: number;
  @Input({ transform: booleanAttribute }) loading = false;
  @Input({ transform: booleanAttribute }) popoverVisible = false;
  @Input() btnClass?: NgClassType;
  @Input() btnIconClass?: NgClassType;
  @Input({ transform: booleanAttribute }) centered = false;
  @Output() readonly select = new EventEmitter<NoticeIconSelect>();
  @Output() readonly clear = new EventEmitter<string>();
  @Output() readonly popoverVisibleChange = new EventEmitter<boolean>();

  get overlayCls(): string {
    return `header-dropdown notice-icon${!this.centered ? ' notice-icon__tab-left' : ''}`;
  }

  delayShow = false;
  onVisibleChange(result: boolean): void {
    this.delayShow = result;
    this.popoverVisibleChange.emit(result);
    if (result) {
      // Next tick run
      Promise.resolve().then(() => this.cdr.detectChanges());
    }
  }

  onSelect(i: NoticeIconSelect): void {
    this.select.emit(i);
  }

  onClear(title: string): void {
    this.clear.emit(title);
  }

  ngOnInit(): void {
    this.i18n$ = this.i18n.change.subscribe(() => {
      this.locale = this.i18n.getData('noticeIcon');
      this.cdr.markForCheck();
    });
  }

  ngOnChanges(): void {
    this.cdr.markForCheck();
  }

  ngOnDestroy(): void {
    this.i18n$?.unsubscribe();
  }
}
