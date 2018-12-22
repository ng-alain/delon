import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NoticeIconSelect, NoticeItem } from './notice-icon.types';

@Component({
  selector: 'notice-icon-tab',
  templateUrl: './notice-icon-tab.component.html',
})
export class NoticeIconTabComponent {
  // tslint:disable-next-line:no-any
  @Input() locale: any = {};
  @Input() data: NoticeItem;
  @Output() readonly select = new EventEmitter<NoticeIconSelect>();
  @Output() readonly clear = new EventEmitter<string>();

  onClick(item: NoticeItem) {
    this.select.emit({ title: this.data.title, item });
  }

  onClear() {
    this.clear.emit(this.data.title);
  }
}
