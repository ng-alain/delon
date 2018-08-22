import {
  Component,
  Input,
  EventEmitter,
  Output,
  HostListener,
  OnInit,
} from '@angular/core';
import {
  NaReuseContextI18n,
  NaReuseContextCloseEvent,
  NaReuseItem,
  NaCloseType,
} from './interface';

@Component({
  selector: 'na-reuse-tab-context-menu',
  template: `
  <ul nz-menu>
      <li nz-menu-item (click)="click($event, 'close')" data-type="close" [nzDisabled]="!item.closable" [innerHTML]="i18n.close"></li>
      <li nz-menu-item (click)="click($event, 'closeOther')" data-type="closeOther" [innerHTML]="i18n.closeOther"></li>
      <li nz-menu-item (click)="click($event, 'closeRight')" data-type="closeRight" [nzDisabled]="item.last" [innerHTML]="i18n.closeRight"></li>
      <li nz-menu-item (click)="click($event, 'clear')" data-type="clear" [innerHTML]="i18n.clear"></li>
  </ul>`,
  preserveWhitespaces: false,
})
export class NaReuseTabContextMenuComponent implements OnInit {
  private _i18n: NaReuseContextI18n;
  @Input()
  set i18n(value: NaReuseContextI18n) {
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

  @Input() item: NaReuseItem;

  @Input() event: MouseEvent;

  @Output() close = new EventEmitter<NaReuseContextCloseEvent>();

  get includeNonCloseable() {
    return this.event.ctrlKey;
  }

  private notify(type: NaCloseType, item: NaReuseItem) {
    this.close.next({
      type,
      item: this.item,
      includeNonCloseable: this.includeNonCloseable,
    });
  }

  ngOnInit(): void {
    if (this.includeNonCloseable) this.item.closable = true;
  }

  click(e: MouseEvent, type: NaCloseType) {
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
