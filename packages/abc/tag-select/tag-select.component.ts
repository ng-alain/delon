import {
  Component,
  HostBinding,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { toBoolean } from '@delon/util';

@Component({
  selector: 'na-tag-select',
  template: `
  <ng-content></ng-content>
  <a *ngIf="expandable" class="na-tag-select__trigger" (click)="trigger()">
    {{expand ? '收起' : '展开'}}<i class="anticon anticon-{{expand ? 'up' : 'down'}} na-tag-select__trigger-icon"></i>
  </a>`,
  host: { '[class.na-tag-select]': 'true' },
  preserveWhitespaces: false,
})
export class NaTagSelectComponent {
  /** 是否启用 `展开与收进` */
  @HostBinding('class.na-tag-select__has-expand')
  @Input()
  get expandable() {
    return this._expandable;
  }
  set expandable(value: any) {
    this._expandable = toBoolean(value);
  }
  private _expandable = true;

  @HostBinding('class.na-tag-select__expanded') expand = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  trigger() {
    this.expand = !this.expand;
    this.change.emit(this.expand);
  }
}
