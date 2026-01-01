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
  template: `
    <ul nz-menu>
      @if (item.active) {
        <li nz-menu-item (click)="click($event, 'refresh')" data-type="refresh" [innerHTML]="i18n.refresh"></li>
      }
      <li
        nz-menu-item
        (click)="click($event, 'close')"
        data-type="close"
        [nzDisabled]="!item.closable"
        [innerHTML]="i18n.close"
      ></li>
      <li nz-menu-item (click)="click($event, 'closeOther')" data-type="closeOther" [innerHTML]="i18n.closeOther"></li>
      <li
        nz-menu-item
        (click)="click($event, 'closeRight')"
        data-type="closeRight"
        [nzDisabled]="item.last"
        [innerHTML]="i18n.closeRight"
      ></li>
      @if (customContextMenu!.length > 0) {
        <li nz-menu-divider></li>
        @for (i of customContextMenu; track $index) {
          <li
            nz-menu-item
            [attr.data-type]="i.id"
            [nzDisabled]="isDisabled(i)"
            (click)="click($event, 'custom', i)"
            [innerHTML]="i.title"
          ></li>
        }
      }
    </ul>
  `,
  host: {
    '(document:click)': 'closeMenu($event)',
    '(document:contextmenu)': 'closeMenu($event)'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzMenuDirective, NzMenuItemComponent]
})
export class ReuseTabContextMenuComponent implements OnInit {
  private locale = inject(DelonLocaleService).valueSignal('reuseTab');

  private _i18n!: ReuseContextI18n;
  @Input()
  set i18n(value: ReuseContextI18n) {
    this._i18n = {
      ...this.locale(),
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
