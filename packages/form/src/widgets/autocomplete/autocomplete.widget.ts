import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';
import { of, Observable } from 'rxjs';
import { debounceTime, flatMap, map, startWith } from 'rxjs/operators';

import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getCopyEnum, getEnum, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import { SFAutoCompleteWidgetSchema } from './schema';

@Component({
  selector: 'sf-autocomplete',
  templateUrl: './autocomplete.widget.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
})
export class AutoCompleteWidget extends ControlUIWidget<SFAutoCompleteWidgetSchema> implements AfterViewInit {
  i: any = {};
  list: Observable<SFSchemaEnum[]>;
  typing: string = '';
  @ViewChild(NgModel, { static: false }) private ngModel: NgModel;
  private filterOption: (input: string, option: SFSchemaEnum) => boolean;
  private isAsync = false;
  private fixData: SFSchemaEnum[] = [];

  updateValue(item: NzAutocompleteOptionComponent) {
    this.typing = item.nzLabel;
    this.setValue(item.nzValue);
    if (this.ui.change) this.ui.change(item);
  }

  ngAfterViewInit(): void {
    const { backfill, defaultActiveFirstOption, nzWidth, filterOption, asyncData } = this.ui;
    this.i = {
      backfill: toBool(backfill, false),
      defaultActiveFirstOption: toBool(defaultActiveFirstOption, true),
      width: nzWidth || undefined,
    };

    let filterOptionValue = filterOption == null ? true : filterOption;
    if (typeof filterOptionValue === 'boolean') {
      filterOptionValue = (input: string, option: SFSchemaEnum) => option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1;
    }
    this.filterOption = filterOptionValue;

    this.isAsync = !!asyncData;
    const orgTime = +(this.ui.debounceTime || 0);
    const time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);

    this.list = this.ngModel.valueChanges!.pipe(
      debounceTime(time),
      startWith(''),
      flatMap(input => (this.isAsync ? asyncData!(input) : this.filterData(input))),
      map(res => getEnum(res, null, this.schema.readOnly!)),
    );
  }

  reset(value: SFValue) {
    this.typing = this.value;
    if (this.isAsync) return;
    switch (this.ui.type) {
      case 'email':
        this.fixData = getCopyEnum(this.schema.enum! || this.formProperty.options.uiEmailSuffixes, null, this.schema.readOnly!);
        break;
      default:
        this.fixData = getCopyEnum(this.schema.enum!, value, this.schema.readOnly!);
        break;
    }
  }

  private filterData(input: string) {
    switch (this.ui.type) {
      case 'email':
        return this.addEmailSuffix(input);
      default:
        return of(this.fixData.filter(option => this.filterOption(input, option)));
    }
  }

  private addEmailSuffix(value: string) {
    return of(!value || ~value.indexOf('@') ? [] : this.fixData.map(domain => `${value}@${domain.label}`));
  }
}
