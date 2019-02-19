import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NzAutocompleteOptionComponent } from 'ng-zorro-antd';
import { of, Observable } from 'rxjs';
import { debounceTime, flatMap, map, startWith } from 'rxjs/operators';
import { SFValue } from '../../interface';
import { SFSchemaEnum } from '../../schema';
import { getCopyEnum, getEnum, toBool } from '../../utils';
import { ControlWidget } from '../../widget';

@Component({
  selector: 'sf-autocomplete',
  templateUrl: './autocomplete.widget.html',
})
export class AutoCompleteWidget extends ControlWidget implements AfterViewInit {
  i: any = {};
  fixData: SFSchemaEnum[] = [];
  list: Observable<SFSchemaEnum[]>;
  typing: string = '';
  @ViewChild(NgModel) private ngModel: NgModel;
  private filterOption: (input: string, option: SFSchemaEnum) => boolean;
  private isAsync = false;

  updateValue(item: NzAutocompleteOptionComponent) {
    this.typing = item.nzLabel;
    this.setValue(item.nzValue);
  }

  ngAfterViewInit(): void {
    this.i = {
      backfill: toBool(this.ui.backfill, false),
      defaultActiveFirstOption: toBool(this.ui.defaultActiveFirstOption, true),
      width: this.ui.width || undefined,
    };

    this.filterOption = this.ui.filterOption == null ? true : this.ui.filterOption;
    if (typeof this.filterOption === 'boolean') {
      this.filterOption = (input: string, option: SFSchemaEnum) =>
        option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1;
    }

    this.isAsync = !!this.ui.asyncData;
    const orgTime = +(this.ui.debounceTime || 0);
    const time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);

    this.list = this.ngModel.valueChanges.pipe(
      debounceTime(time),
      startWith(''),
      flatMap(input => (this.isAsync ? this.ui.asyncData(input) : this.filterData(input))),
      map(res => getEnum(res, null, this.schema.readOnly)),
    );
  }

  reset(value: SFValue) {
    this.typing = this.value;
    if (this.isAsync) return;
    switch (this.ui.type) {
      case 'email':
        this.fixData = getCopyEnum(this.schema.enum || this.formProperty.options.uiEmailSuffixes, null, this.schema.readOnly);
        break;
      default:
        this.fixData = getCopyEnum(
          this.schema.enum,
          this.formProperty.formData,
          this.schema.readOnly,
        );
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
    return of(
      !value || ~value.indexOf('@') ? [] : this.fixData.map(domain => `${value}@${domain.label}`),
    );
  }
}
