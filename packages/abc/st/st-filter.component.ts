import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  inject
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { LocaleData } from '@delon/theme';
import { NzCheckboxComponent } from 'ng-zorro-antd/checkbox';
import { NzDatePickerComponent, NzRangePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzRadioComponent } from 'ng-zorro-antd/radio';

import type { STColumnFilter, STColumnFilterMenu, STIcon } from './st.interfaces';
import type { _STColumn } from './st.types';

@Component({
  selector: 'st-filter',
  template: `
    <span
      class="ant-table-filter-trigger"
      [class.active]="visible ?? f.default"
      nz-dropdown
      [nzDropdownMenu]="filterMenu"
      nzTrigger="click"
      [nzClickHide]="false"
      [(nzVisible)]="visible"
      nzOverlayClassName="st__filter-wrap"
      (click)="stopPropagation($event)"
    >
      <nz-icon [nzType]="icon.type" [nzTheme]="icon.theme!" />
    </span>
    <nz-dropdown-menu #filterMenu="nzDropdownMenu">
      <div class="ant-table-filter-dropdown">
        @switch (f.type) {
          @case ('keyword') {
            <div class="st__filter-keyword">
              <input
                type="text"
                nz-input
                [attr.placeholder]="f.placeholder"
                [(ngModel)]="f.menus![0]!.value"
                (ngModelChange)="n.emit($event)"
                (keyup.enter)="confirm()"
              />
            </div>
          }
          @case ('number') {
            <div class="p-sm st__filter-number">
              <nz-input-number
                [(ngModel)]="f.menus![0]!.value"
                (ngModelChange)="n.emit($event)"
                [nzMin]="f.number!.min!"
                [nzMax]="f.number!.max!"
                [nzStep]="f.number!.step!"
                [nzPrecision]="f.number!.precision ?? null"
                [nzPlaceHolder]="f.placeholder!"
                class="width-100"
              />
            </div>
          }
          @case ('date') {
            <div class="p-sm st__filter-date">
              @if (f.date!.range) {
                <nz-range-picker
                  nzInline
                  [nzMode]="$any(f.date!.mode)"
                  [(ngModel)]="f.menus![0]!.value"
                  (ngModelChange)="n.emit($event)"
                  [nzShowNow]="f.date!.showNow"
                  [nzShowToday]="f.date!.showToday"
                  [nzDisabledDate]="f.date!.disabledDate"
                  [nzDisabledTime]="f.date!.disabledTime"
                />
              } @else {
                <nz-date-picker
                  nzInline
                  [nzMode]="$any(f.date!.mode)"
                  [(ngModel)]="f.menus![0]!.value"
                  (ngModelChange)="n.emit($event)"
                  [nzShowNow]="f.date!.showNow"
                  [nzShowToday]="f.date!.showToday"
                  [nzDisabledDate]="f.date!.disabledDate"
                  [nzDisabledTime]="f.date!.disabledTime"
                />
              }
            </div>
          }
          @case ('custom') {
            <div class="st__filter-custom">
              <ng-template
                [ngTemplateOutlet]="f.custom!"
                [ngTemplateOutletContext]="{ $implicit: f, col: col, handle: this }"
              />
            </div>
          }
          @default {
            <ul nz-menu>
              @for (filter of f.menus; track $index) {
                <li nz-menu-item>
                  @if (f.multiple) {
                    <label nz-checkbox [(ngModel)]="filter.checked" (ngModelChange)="checkboxChange()">
                      {{ filter.text }}
                    </label>
                  } @else {
                    <label nz-radio [ngModel]="filter.checked" (ngModelChange)="radioChange(filter)">
                      {{ filter.text }}
                    </label>
                  }
                </li>
              }
            </ul>
          }
        }
        @if (f.showOPArea) {
          <div class="ant-table-filter-dropdown-btns">
            <a class="ant-table-filter-dropdown-link confirm" (click)="confirm()">
              <span>{{ f.confirmText ?? locale.filterConfirm }}</span>
            </a>
            <a class="ant-table-filter-dropdown-link clear" (click)="reset()">
              <span>{{ f.clearText ?? locale.filterReset }}</span>
            </a>
          </div>
        }
      </div>
    </nz-dropdown-menu>
  `,
  host: {
    '[class.ant-table-filter-trigger-container]': `true`,
    '[class.st__filter]': `true`,
    '[class.ant-table-filter-trigger-container-open]': `visible`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    NzDropdownModule,
    NzIconDirective,
    NzInputDirective,
    NzInputNumberComponent,
    NzRangePickerComponent,
    NzDatePickerComponent,
    NgTemplateOutlet,
    NzMenuModule,
    NzCheckboxComponent,
    NzRadioComponent
  ]
})
export class STFilterComponent {
  private readonly cdr = inject(ChangeDetectorRef);

  visible?: boolean = false;
  @Input() col!: _STColumn;
  @Input() locale: LocaleData = {};
  @Input() f!: STColumnFilter;
  @Output() readonly n = new EventEmitter<unknown>();
  @Output() readonly handle = new EventEmitter<boolean>();
  get icon(): STIcon {
    return this.f.icon as STIcon;
  }

  stopPropagation($event: MouseEvent): void {
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

  close(result?: boolean): void {
    if (result != null) this.handle.emit(result);

    this.visible = false;
    this.cdr.detectChanges();
  }

  confirm(): this {
    this.handle.emit(true);
    return this;
  }

  reset(): this {
    this.handle.emit(false);
    return this;
  }
}
