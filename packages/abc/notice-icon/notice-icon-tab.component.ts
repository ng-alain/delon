import { NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { LocaleData } from '@delon/theme';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzListComponent, NzListItemComponent, NzListItemMetaComponent } from 'ng-zorro-antd/list';
import { NzTagComponent } from 'ng-zorro-antd/tag';

import { NoticeIconSelect, NoticeItem } from './notice-icon.types';

@Component({
  selector: 'notice-icon-tab',
  exportAs: 'noticeIconTab',
  templateUrl: './notice-icon-tab.component.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    NgTemplateOutlet,
    NzStringTemplateOutletDirective,
    NzListComponent,
    NzListItemComponent,
    NzListItemMetaComponent,
    NzTagComponent
  ]
})
export class NoticeIconTabComponent {
  @Input() locale: LocaleData = {};
  @Input() data!: NoticeItem;
  @Output() readonly select = new EventEmitter<NoticeIconSelect>();
  @Output() readonly clear = new EventEmitter<string>();

  onClick(item: NoticeItem): void {
    this.select.emit({ title: this.data.title, item });
  }

  onClear(): void {
    this.clear.emit(this.data.title);
  }
}
