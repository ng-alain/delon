import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import { SFSelectWidgetSchema } from './schema';

@Component({
  selector: 'sf-select',
  templateUrl: './select.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class SelectWidget extends ControlUIWidget<SFSelectWidgetSchema> implements OnInit {
  private search$ = new Subject<string>();
  i: SFSelectWidgetSchema;
  data: SFSchemaEnum[];
  _value: NzSafeAny;
  hasGroup = false;
  loading = false;

  private checkGroup(list: SFSchemaEnum[]): void {
    this.hasGroup = (list || []).filter(w => w.group === true).length > 0;
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
      maxMultipleCount: maxMultipleCount || Infinity,
      mode: mode || 'default',
      showSearch: toBool(showSearch, true),
      tokenSeparators: tokenSeparators || [],
      maxTagCount: maxTagCount || undefined,
      optionHeightPx: optionHeightPx || 32,
      optionOverflowSize: optionOverflowSize || 8,
      showArrow: typeof showArrow !== 'boolean' ? undefined : showArrow,
      compareWith: compareWith || ((o1: any, o2: any) => o1 === o2)
    };

    const onSearch = this.ui.onSearch!;
    if (onSearch) {
      this.search$
        .pipe(
          takeUntil(this.sfItemComp!.unsubscribe$),
          distinctUntilChanged(),
          debounceTime(this.ui.searchDebounceTime || 300),
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
    getData(this.schema, this.ui, value).subscribe(list => {
      this._value = value;
      this.data = list;
      this.checkGroup(list);
      this.detectChanges();
    });
  }

  change(values: SFValue): void {
    if (this.ui.change) {
      this.ui.change(values, this.getOrgData(values));
    }
    this.setValue(values == null ? undefined : values);
  }

  private getOrgData(values: SFValue): SFSchemaEnum | SFSchemaEnum[] {
    if (!Array.isArray(values)) {
      return this.data.find(w => w.value === values)!;
    }
    return values.map(value => {
      let item: SFSchemaEnum | null = null;
      this.data.forEach(list => {
        item = list.children?.find(w => w.value === value)!;
      });
      return item;
    });
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
