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
} from '@angular/core';
import { DelonLocaleService, LocaleData } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util';
import { Subscription } from 'rxjs';
import { NoticeIconSelect, NoticeItem } from './notice-icon.types';

@Component({
  selector: 'notice-icon',
  exportAs: 'noticeIcon',
  templateUrl: './notice-icon.component.html',
  host: { '[class.notice-icon__btn]': 'true' },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NoticeIconComponent implements OnInit, OnChanges, OnDestroy {
  private i18n$: Subscription;
  locale: LocaleData = {};

  @Input() data: NoticeItem[] = [];
  @Input() @InputNumber() count: number;
  @Input() @InputBoolean() loading = false;
  @Input() @InputBoolean() popoverVisible = false;
  @Input() btnClass = '';
  @Input() btnIconClass = '';
  // tslint:disable-next-line:no-output-native
  @Output() readonly select = new EventEmitter<NoticeIconSelect>();
  @Output() readonly clear = new EventEmitter<string>();
  @Output() readonly popoverVisibleChange = new EventEmitter<boolean>();

  constructor(private i18n: DelonLocaleService, private cdr: ChangeDetectorRef) {}

  onVisibleChange(result: boolean): void {
    this.popoverVisibleChange.emit(result);
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
    this.i18n$.unsubscribe();
  }
}
