import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Observable, of, debounceTime, map, mergeMap, startWith, takeUntil } from 'rxjs';

import { NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getCopyEnum, getEnum, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import { SFAutoCompleteWidgetSchema } from './schema';

@Component({
  selector: 'sf-autocomplete',
  templateUrl: './autocomplete.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
})
export class AutoCompleteWidget extends ControlUIWidget<SFAutoCompleteWidgetSchema> {
  i: NzSafeAny = {};
  list!: Observable<SFSchemaEnum[]>;
  typing: string = '';
  @ViewChild(NgModel, { static: false }) private ngModel!: NgModel;
  private filterOption!: (input: string, option: SFSchemaEnum) => boolean;
  private isAsync = false;
  private fixData: SFSchemaEnum[] = [];

  updateValue(item: NzAutocompleteOptionComponent): void {
    this.typing = item.nzLabel!;
    const data: SFSchemaEnum = item.nzValue;
    this.setValue(data.value);
    if (this.ui.change) {
      this.ui.change(item, data);
    }
  }

  _setValue(item: SFSchemaEnum): void {
    let val = item.toString();
    if (typeof item !== 'string') {
      val = item.value;
    }
    this.setValue(val);
  }

  afterViewInit(): void {
    const { backfill, defaultActiveFirstOption, nzWidth, filterOption, asyncData, compareWith } = this.ui;
    this.i = {
      backfill: toBool(backfill, false),
      defaultActiveFirstOption: toBool(defaultActiveFirstOption, true),
      width: nzWidth || undefined,
      compareWith: compareWith || ((o1, o2) => o1 === o2)
    };

    let filterOptionValue = filterOption == null ? true : filterOption;
    if (typeof filterOptionValue === 'boolean') {
      filterOptionValue = (input: string, option: SFSchemaEnum) =>
        option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1;
    }
    this.filterOption = filterOptionValue;

    this.isAsync = !!asyncData;
    const orgTime = +(this.ui.debounceTime || 0);
    const time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);

    this.list = this.ngModel.valueChanges!.pipe(
      debounceTime(time),
      startWith(''),
      mergeMap(input => (this.isAsync ? asyncData!(input) : this.filterData(input))),
      map(res => getEnum(res, null, this.schema.readOnly!))
    );
  }

  reset(value: SFValue): void {
    if (this.isAsync) {
      this.ui.asyncData!(value)
        .pipe(
          takeUntil(this.sfItemComp!.destroy$),
          map(res => getEnum(res, null, this.schema.readOnly!))
        )
        .subscribe(data => {
          this.typing = data.find(w => w.value === this.value)?.label ?? '';
        });
      return;
    }

    this.typing = value;
    switch (this.ui.type) {
      case 'email':
        this.fixData = getCopyEnum(
          this.schema.enum! || this.formProperty.options.uiEmailSuffixes,
          null,
          this.schema.readOnly!
        );
        break;
      default:
        this.fixData = getCopyEnum(this.schema.enum!, value, this.schema.readOnly!);
        break;
    }
  }

  private filterData(input: string): Observable<SFSchemaEnum[]> | Observable<string[]> {
    switch (this.ui.type) {
      case 'email':
        return this.addEmailSuffix(input);
      default:
        return of(this.fixData.filter(option => this.filterOption(input, option)));
    }
  }

  private addEmailSuffix(value: string): Observable<string[]> {
    return of(!value || ~value.indexOf('@') ? [] : this.fixData.map(domain => `${value}@${domain.label}`));
  }
}
