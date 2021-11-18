import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { LocaleData } from '@delon/theme';

import { _STColumn } from '.';
import { STColumnFilter, STColumnFilterMenu, STIcon } from './st.interfaces';

@Component({
  selector: 'st-filter',
  template: `
    <span
      class="ant-table-filter-trigger"
      [class.active]="visible || f.default"
      nz-dropdown
      [nzDropdownMenu]="filterMenu"
      nzTrigger="click"
      [nzClickHide]="false"
      [(nzVisible)]="visible"
      nzOverlayClassName="st__filter-wrap"
      (click)="show($event)"
    >
      <i nz-icon [nzType]="icon.type" [nzTheme]="icon.theme!"></i>
    </span>
    <nz-dropdown-menu #filterMenu="nzDropdownMenu">
      <div class="ant-table-filter-dropdown">
        <ng-container [ngSwitch]="f.type">
          <div *ngSwitchCase="'keyword'" class="st__filter-keyword">
            <input
              type="text"
              nz-input
              [attr.placeholder]="f.menus![0]!.text"
              [(ngModel)]="f.menus![0]!.value"
              (ngModelChange)="n.emit($event)"
              (keyup.enter)="confirm()"
            />
          </div>
          <div *ngSwitchCase="'custom'" class="st__filter-custom">
            <ng-template
              [ngTemplateOutlet]="f.custom!"
              [ngTemplateOutletContext]="{ $implicit: f, col: col }"
            ></ng-template>
          </div>
          <ul *ngSwitchDefault nz-menu>
            <ng-container *ngIf="f.multiple">
              <li nz-menu-item *ngFor="let filter of f.menus">
                <label nz-checkbox [(ngModel)]="filter.checked" (ngModelChange)="checkboxChange()">
                  {{ filter.text }}
                </label>
              </li>
            </ng-container>
            <ng-container *ngIf="!f.multiple">
              <li nz-menu-item *ngFor="let filter of f.menus">
                <label nz-radio [ngModel]="filter.checked" (ngModelChange)="radioChange(filter)">
                  {{ filter.text }}
                </label>
              </li>
            </ng-container>
          </ul>
        </ng-container>
        <div class="ant-table-filter-dropdown-btns">
          <a class="ant-table-filter-dropdown-link confirm" (click)="visible = false">
            <span (click)="confirm()">{{ f.confirmText || locale.filterConfirm }}</span>
          </a>
          <a class="ant-table-filter-dropdown-link clear" (click)="visible = false">
            <span (click)="reset()">{{ f.clearText || locale.filterReset }}</span>
          </a>
        </div>
      </div>
    </nz-dropdown-menu>
  `,
  host: {
    '[class.ant-table-filter-trigger-container]': `true`,
    '[class.st__filter]': `true`,
    '[class.ant-table-filter-trigger-container-open]': `visible`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class STFilterComponent {
  visible = false;
  @Input() col: _STColumn;
  @Input() locale: LocaleData = {};
  @Input() f: STColumnFilter;
  @Output() readonly n = new EventEmitter<unknown>();
  @Output() readonly handle = new EventEmitter<boolean>();
  get icon(): STIcon {
    return this.f.icon as STIcon;
  }

  show($event: MouseEvent): void {
    $event.stopPropagation();
  }

  checkboxChange(): void {
    this.n.emit(this.f.menus?.filter(w => w.checked));
  }

  radioChange(item: STColumnFilterMenu): void {
    this.f.menus!.forEach(i => (i.checked = false));
    item.checked = !item.checked;
    this.n.emit(item);
  }

  confirm(): void {
    this.handle.emit(true);
  }

  reset(): void {
    this.handle.emit(false);
  }
}
