import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DelonLocaleService } from '@delon/theme';
import { InputNumber, InputBoolean } from '@delon/util';

import { NoticeItem, NoticeIconSelect } from './notice-icon.types';

@Component({
  selector: 'notice-icon',
  templateUrl: './notice-icon.component.html',
  host: { '[class.notice-icon__btn]': 'true' },
})
export class NoticeIconComponent implements OnDestroy {
  private i18n$: Subscription;
  locale: any = {};

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
  readonly select = new EventEmitter<NoticeIconSelect>();
  @Output()
  readonly clear = new EventEmitter<string>();

  /** 手动控制Popover显示 */
  @Input()
  @InputBoolean()
  popoverVisible = false;

  @Output()
  readonly popoverVisibleChange = new EventEmitter<boolean>();

  constructor(private i18n: DelonLocaleService) {
    this.i18n$ = this.i18n.change.subscribe(
      () => (this.locale = this.i18n.getData('noticeIcon')),
    );
  }

  onVisibleChange(result: boolean) {
    this.popoverVisibleChange.emit(result);
  }

  onSelect(i: any) {
    this.select.emit(i);
  }

  onClear(title: string) {
    this.clear.emit(title);
  }

  ngOnDestroy() {
    this.i18n$.unsubscribe();
  }
}
