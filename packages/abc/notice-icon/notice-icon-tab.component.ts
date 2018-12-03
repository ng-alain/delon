import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NoticeIconSelect, NoticeItem } from './notice-icon.types';

@Component({
  selector: 'notice-icon-tab',
  templateUrl: './notice-icon-tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticeIconTabComponent {
  @Input()
  locale: {} = {};
  @Input()
  data: NoticeItem;
  @Output()
  readonly select = new EventEmitter<NoticeIconSelect>();
  @Output()
  readonly clear = new EventEmitter<string>();

  onClick(item: NoticeItem) {
    this.select.emit({
      title: this.data.title,
      item,
    } as NoticeIconSelect);
  }

  onClear() {
    this.clear.emit(this.data.title);
  }
}
