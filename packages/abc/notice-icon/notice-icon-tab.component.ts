import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NoticeItem, NoticeIconSelect } from './notice-icon.types';

@Component({
  selector: 'notice-icon-tab',
  templateUrl: './notice-icon-tab.component.html',
  preserveWhitespaces: false,
})
export class NoticeIconTabComponent {
  @Input()
  locale: any = {};
  @Input()
  data: NoticeItem;
  @Output()
  readonly select = new EventEmitter<NoticeIconSelect>();
  @Output()
  readonly clear = new EventEmitter<string>();

  onClick(item: NoticeItem) {
    this.select.emit(<NoticeIconSelect>{
      title: this.data.title,
      item,
    });
  }

  onClear() {
    this.clear.emit(this.data.title);
  }
}
