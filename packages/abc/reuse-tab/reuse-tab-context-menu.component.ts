import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  inject
} from '@angular/core';

import { DelonLocaleService } from '@delon/theme';
import { NzMenuDirective, NzMenuItemComponent } from 'ng-zorro-antd/menu';

import {
  CloseType,
  ReuseContextCloseEvent,
  ReuseContextI18n,
  ReuseCustomContextMenu,
  ReuseItem
} from './reuse-tab.interfaces';

@Component({
  selector: 'reuse-tab-context-menu',
  templateUrl: './reuse-tab-context-menu.component.html',
  host: {
    '(document:click)': 'closeMenu($event)',
    '(document:contextmenu)': 'closeMenu($event)'
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NzMenuDirective, NzMenuItemComponent]
})
export class ReuseTabContextMenuComponent implements OnInit {
  private readonly i18nSrv = inject(DelonLocaleService);

  private _i18n!: ReuseContextI18n;
  @Input()
  set i18n(value: ReuseContextI18n) {
    this._i18n = {
      ...this.i18nSrv.getData('reuseTab'),
      ...value
    };
  }
  get i18n(): ReuseContextI18n {
    return this._i18n;
  }
  @Input() item!: ReuseItem;
  @Input() event!: MouseEvent;
  @Input() customContextMenu!: ReuseCustomContextMenu[];
  @Output() readonly close = new EventEmitter<ReuseContextCloseEvent>();

  get includeNonCloseable(): boolean {
    return this.event.ctrlKey;
  }

  private notify(type: CloseType): void {
    this.close.next({
      type,
      item: this.item,
      includeNonCloseable: this.includeNonCloseable
    });
  }

  ngOnInit(): void {
    if (this.includeNonCloseable) this.item.closable = true;
  }

  click(e: MouseEvent, type: CloseType, custom?: ReuseCustomContextMenu): void {
    e.preventDefault();
    e.stopPropagation();
    if (type === 'close' && !this.item.closable) return;
    if (type === 'closeRight' && this.item.last) return;

    if (custom) {
      if (this.isDisabled(custom)) return;
      custom.fn(this.item, custom);
    }
    this.notify(type);
  }

  isDisabled(custom: ReuseCustomContextMenu): boolean {
    return custom.disabled ? custom.disabled(this.item) : false;
  }

  closeMenu(event: MouseEvent): void {
    if (event.type === 'click' && event.button === 2) return;
    this.notify(null);
  }
}
