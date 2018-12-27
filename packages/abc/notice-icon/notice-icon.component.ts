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
} from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util';
import { Subscription } from 'rxjs';

import { NoticeIconSelect, NoticeItem } from './notice-icon.types';

@Component({
  selector: 'notice-icon',
  templateUrl: './notice-icon.component.html',
  host: { '[class.notice-icon__btn]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticeIconComponent implements OnInit, OnChanges, OnDestroy {
  private i18n$: Subscription;
  // tslint:disable-next-line:no-any
  locale: any = {};

  @Input() data: NoticeItem[] = [];
  @Input() @InputNumber() count: number;
  @Input() @InputBoolean() loading = false;
  @Input() @InputBoolean() popoverVisible = false;
  @Input() btnClass = '';
  @Input() btnIconClass = '';
  @Output() readonly select = new EventEmitter<NoticeIconSelect>();
  @Output() readonly clear = new EventEmitter<string>();
  @Output() readonly popoverVisibleChange = new EventEmitter<boolean>();

  constructor(private i18n: DelonLocaleService, private cdr: ChangeDetectorRef) { }

  onVisibleChange(result: boolean) {
    this.popoverVisibleChange.emit(result);
  }

  onSelect(i: NoticeIconSelect) {
    this.select.emit(i);
  }

  onClear(title: string) {
    this.clear.emit(title);
  }

  ngOnInit() {
    this.i18n$ = this.i18n.change.subscribe(() => {
      this.locale = this.i18n.getData('noticeIcon');
      this.cdr.markForCheck();
    });
  }

  ngOnChanges() {
    this.cdr.markForCheck();
  }

  ngOnDestroy() {
    this.i18n$.unsubscribe();
  }
}
