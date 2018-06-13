import {
  Component,
  Input,
  EventEmitter,
  Output,
  HostListener,
  OnInit,
} from '@angular/core';
import {
  ReuseContextI18n,
  ReuseContextCloseEvent,
  ReuseItem,
  CloseType,
} from './interface';

@Component({
  selector: 'reuse-tab-context-menu',
  template: `
  <ul nz-menu>
      <li nz-menu-item (click)="click($event, 'close')" data-type="close" [nzDisabled]="!item.closable" [innerHTML]="i18n.close"></li>
      <li nz-menu-item (click)="click($event, 'closeOther')" data-type="closeOther" [innerHTML]="i18n.closeOther"></li>
      <li nz-menu-item (click)="click($event, 'closeRight')" data-type="closeRight" [nzDisabled]="item.last" [innerHTML]="i18n.closeRight"></li>
      <li nz-menu-item (click)="click($event, 'clear')" data-type="clear" [innerHTML]="i18n.clear"></li>
  </ul>`,
  preserveWhitespaces: false,
})
export class ReuseTabContextMenuComponent implements OnInit {
  private _i18n: ReuseContextI18n;
  @Input()
  set i18n(value: ReuseContextI18n) {
    this._i18n = Object.assign(
      {
        close: '关闭标签',
        closeOther: '关闭其它标签',
        closeRight: '关闭右侧标签',
        clear: '清空',
      },
      value,
    );
  }
  get i18n() {
    return this._i18n;
  }

  @Input() item: ReuseItem;

  @Input() event: MouseEvent;

  @Output() close = new EventEmitter<ReuseContextCloseEvent>();

  get includeNonCloseable() {
    return this.event.ctrlKey;
  }

  private notify(type: CloseType, item: ReuseItem) {
    this.close.next({
      type,
      item: this.item,
      includeNonCloseable: this.includeNonCloseable,
    });
  }

  ngOnInit(): void {
    if (this.includeNonCloseable) this.item.closable = true;
  }

  click(e: MouseEvent, type: CloseType) {
    e.preventDefault();
    e.stopPropagation();
    if (type === 'close' && !this.item.closable) return;
    if (type === 'closeRight' && this.item.last) return;
    this.notify(type, this.item);
  }

  @HostListener('document:click', ['$event'])
  @HostListener('document:contextmenu', ['$event'])
  closeMenu(event: MouseEvent): void {
    if (event.type === 'click' && event.button === 2) return;
    this.notify(null, null);
  }
}
