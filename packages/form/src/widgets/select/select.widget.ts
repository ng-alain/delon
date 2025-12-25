import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, catchError, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs';

import { ArrayService } from '@delon/util/array';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { SFSelectWidgetSchema } from './schema';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-select',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-select
      [nzId]="id"
      [nzDisabled]="disabled"
      [(ngModel)]="_value"
      (ngModelChange)="change($event)"
      [nzSize]="ui.size!"
      [nzPlaceHolder]="ui.placeholder!"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzDropdownClassName]="ui.dropdownClassName!"
      [nzAllowClear]="ui.allowClear"
      [nzDropdownStyle]="ui.dropdownStyle!"
      [nzCustomTemplate]="ui.customTemplate!"
      [nzSuffixIcon]="ui.suffixIcon!"
      [nzRemoveIcon]="ui.removeIcon!"
      [nzClearIcon]="ui.clearIcon!"
      [nzMenuItemSelectedIcon]="ui.menuItemSelectedIcon!"
      [nzMaxTagPlaceholder]="ui.maxTagPlaceholder!"
      [nzDropdownRender]="ui.dropdownRender!"
      [nzAutoClearSearchValue]="i.autoClearSearchValue"
      [nzVariant]="ui.variant ?? 'outlined'"
      [nzAutoFocus]="i.autoFocus"
      [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth!"
      [nzServerSearch]="i.serverSearch"
      [nzMaxMultipleCount]="i.maxMultipleCount!"
      [nzMode]="i.mode!"
      [nzShowSearch]="i.showSearch"
      [nzShowArrow]="i.showArrow!"
      [nzTokenSeparators]="i.tokenSeparators!"
      [nzMaxTagCount]="i.maxTagCount!"
      [compareWith]="i.compareWith!"
      [nzOptionHeightPx]="i.optionHeightPx!"
      [nzOptionOverflowSize]="i.optionOverflowSize!"
      (nzOpenChange)="openChange($event)"
      (nzOnSearch)="onSearch($event)"
      (nzScrollToBottom)="scrollToBottom()"
    >
      @if (!loading && !hasGroup) {
        @for (o of data; track $index) {
          <nz-option [nzLabel]="o.label" [nzValue]="o.value" [nzHide]="o.hide" [nzDisabled]="o.disabled" />
        }
      }
      @if (!loading && hasGroup) {
        @for (i of data; track $index) {
          <nz-option-group [nzLabel]="i.label">
            @for (o of i.children; track $index) {
              <nz-option [nzLabel]="o.label" [nzValue]="o.value" [nzDisabled]="o.disabled" [nzHide]="o.hide" />
            }
          </nz-option-group>
        }
      }
      @if (loading) {
        <nz-option nzDisabled nzCustomContent>
          <nz-icon nzType="loading" />
          {{ ui.searchLoadingText }}
        </nz-option>
      }
    </nz-select>
  </sf-item-wrap>`,
  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class SelectWidget extends ControlUIWidget<SFSelectWidgetSchema> implements OnInit {
  private search$ = new Subject<string>();
  i!: SFSelectWidgetSchema;
  data: SFSchemaEnum[] = [];
  _value: NzSafeAny;
  hasGroup = false;
  loading = false;

  private checkGroup(list: SFSchemaEnum[]): void {
    this.hasGroup = (list ?? []).filter(w => w.group === true).length > 0;
  }

  ngOnInit(): void {
    const {
      autoClearSearchValue,
      borderless,
      autoFocus,
      dropdownMatchSelectWidth,
      serverSearch,
      maxMultipleCount,
      mode,
      showSearch,
      tokenSeparators,
      maxTagCount,
      compareWith,
      optionHeightPx,
      optionOverflowSize,
      showArrow
    } = this.ui;
    this.i = {
      autoClearSearchValue: toBool(autoClearSearchValue, true),
      borderless: toBool(borderless, false),
      autoFocus: toBool(autoFocus, false),
      dropdownMatchSelectWidth: toBool(dropdownMatchSelectWidth, true),
      serverSearch: toBool(serverSearch, false),
      maxMultipleCount: maxMultipleCount ?? Infinity,
      mode: mode ?? 'default',
      showSearch: toBool(showSearch, true),
      tokenSeparators: tokenSeparators ?? [],
      maxTagCount: maxTagCount ?? Infinity,
      optionHeightPx: optionHeightPx ?? 32,
      optionOverflowSize: optionOverflowSize ?? 8,
      showArrow: toBool(showArrow, true),
      compareWith: compareWith ?? ((o1: NzSafeAny, o2: NzSafeAny) => o1 === o2)
    };

    const onSearch = this.ui.onSearch!;
    if (onSearch) {
      this.search$
        .pipe(
          takeUntil(this.sfItemComp!.destroy$),
          distinctUntilChanged(),
          debounceTime(this.ui.searchDebounceTime ?? 300),
          switchMap(text => onSearch(text)),
          catchError(() => [])
        )
        .subscribe(list => {
          this.data = list;
          this.checkGroup(list);
          this.loading = false;
          this.detectChanges();
        });
    }
  }

  reset(value: SFValue): void {
    const onSearch = this.ui.onSearch!;
    getData(this.schema, this.ui, value).subscribe(list => {
      this._value = value;
      if (onSearch == null) this.data = list;
      this.checkGroup(list);
      this.detectChanges();
    });
    if (value && onSearch != null) this.search$.next(value);
  }

  change(values: SFValue): void {
    if (this.ui.change) {
      this.ui.change(values, this.getOrgData(values));
    }
    this.setValue(values == null ? this.ui.clearValue : values);
  }

  private getOrgData(values: SFValue): SFSchemaEnum | SFSchemaEnum[] {
    const srv = this.injector.get(ArrayService);
    if (!Array.isArray(values)) {
      return srv.findTree(this.data, (item: SFSchemaEnum) => item.value === values)!;
    }
    return values.map(value => srv.findTree(this.data, (item: SFSchemaEnum) => item.value === value));
  }

  openChange(status: boolean): void {
    if (this.ui.openChange) {
      this.ui.openChange(status);
    }
  }

  scrollToBottom(): void {
    if (this.ui.scrollToBottom) {
      this.ui.scrollToBottom();
    }
  }

  onSearch(value: string): void {
    if (this.ui.onSearch) {
      this.loading = true;
      this.search$.next(value);
    }
  }
}
