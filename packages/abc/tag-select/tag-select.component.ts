import {
  Component,
  HostBinding,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { InputBoolean } from '@delon/util';

@Component({
  selector: 'tag-select',
  template: `
  <ng-content></ng-content>
  <a *ngIf="expandable" class="tag-select__trigger" (click)="trigger()">
    {{expand ? '收起' : '展开'}}<i class="anticon anticon-{{expand ? 'up' : 'down'}} tag-select__trigger-icon"></i>
  </a>`,
  host: { '[class.tag-select]': 'true' },
  preserveWhitespaces: false,
})
export class TagSelectComponent {
  /** 是否启用 `展开与收进` */
  @Input()
  @InputBoolean()
  @HostBinding('class.tag-select__has-expand')
  expandable = true;

  @HostBinding('class.tag-select__expanded')
  expand = false;

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();

  trigger() {
    this.expand = !this.expand;
    this.change.emit(this.expand);
  }
}
