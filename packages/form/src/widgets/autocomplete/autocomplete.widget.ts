import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { startWith, map, flatMap, debounceTime } from 'rxjs/operators';
import { ControlWidget } from '../../widget';
import { SFSchemaEnum } from '../../schema';
import { getCopyEnum, getEnum, toBool } from '../../utils';

export const EMAILSUFFIX = [
  'qq.com',
  '163.com',
  'gmail.com',
  '126.com',
  'aliyun.com',
];

@Component({
  selector: 'sf-autocomplete',
  template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
      <input nz-input [nzAutocomplete]="auto"
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size"
        [ngModel]="value"
        (ngModelChange)="setValue($event)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.placeholder]="ui.placeholder"
        autocomplete="off">
      <nz-autocomplete #auto
        [nzBackfill]="i.backfill"
        [nzDefaultActiveFirstOption]="i.defaultActiveFirstOption"
        [nzWidth]="i.width"
        (selectionChange)="setValue($event?.nzValue)">
        <nz-auto-option *ngFor="let i of list | async" [nzValue]="i.label">{{i.label}}</nz-auto-option>
      </nz-autocomplete>
    </sf-item-wrap>
    `,
  preserveWhitespaces: false,
})
export class AutoCompleteWidget extends ControlWidget implements OnInit {
  i: any;
  fixData: SFSchemaEnum[] = [];
  list: Observable<SFSchemaEnum[]>;
  private filterOption: (input: string, option: SFSchemaEnum) => boolean;
  private isAsync = false;

  ngOnInit(): void {
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
    this.list = this.formProperty.valueChanges.pipe(
      debounceTime(time),
      startWith(''),
      flatMap(
        input =>
          this.isAsync ? this.ui.asyncData(input) : this.filterData(input),
      ),
      map(res => getEnum(res, null)),
    );
  }

  reset(value: any) {
    if (this.isAsync) return;
    switch (this.ui.type) {
      case 'email':
        this.fixData = getCopyEnum(EMAILSUFFIX, null);
        break;
      default:
        this.fixData = getCopyEnum(
          this.schema.enum,
          this.formProperty.formData,
        );
        break;
    }
  }

  private filterData(input: string) {
    switch (this.ui.type) {
      case 'email':
        return this.addEmailSuffix(input);
      default:
        return of(
          this.fixData.filter(option => this.filterOption(input, option)),
        );
    }
  }

  private addEmailSuffix(value: string) {
    return of(
      !value || ~value.indexOf('@')
        ? []
        : this.fixData.map(domain => `${value}@${domain.label}`),
    );
  }
}
