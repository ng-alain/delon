import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal, viewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Observable, of, debounceTime, map, mergeMap, startWith, takeUntil } from 'rxjs';

import { ControlUIWidget, DelonFormModule, SFSchemaEnum, SFValue, getCopyEnum, getEnum, toBool } from '@delon/form';
import { NzAutocompleteModule, NzAutocompleteOptionComponent } from 'ng-zorro-antd/auto-complete';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzInputModule } from 'ng-zorro-antd/input';

import type { SFAutoCompleteWidgetSchema } from './schema';

@Component({
  selector: 'sf-autocomplete',
  template: `
    @let i = this.i();
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <input
        nz-input
        [nzAutocomplete]="auto"
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size!"
        [ngModel]="typing()"
        [ngModelOptions]="{ standalone: true }"
        (ngModelChange)="_setValue($event)"
        [attr.maxLength]="schema.maxLength ?? null"
        [attr.placeholder]="ui.placeholder"
        autocomplete="off"
      />
      <nz-autocomplete
        #auto
        [nzBackfill]="i.backfill"
        [nzDefaultActiveFirstOption]="i.defaultActiveFirstOption"
        [nzWidth]="i.width"
        [nzOverlayStyle]="ui.overlayStyle ?? {}"
        [nzOverlayClassName]="ui.overlayClassName ?? ''"
        [compareWith]="i.compareWith"
        (selectionChange)="updateValue($event)"
      >
        @for (item of list() | async; track item) {
          <nz-auto-option [nzValue]="item" [nzLabel]="item.label" [nzDisabled]="item.disabled">
            {{ item.label }}
          </nz-auto-option>
        }
      </nz-autocomplete>
    </sf-item-wrap>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [AsyncPipe, FormsModule, DelonFormModule, NzInputModule, NzAutocompleteModule]
})
export class AutoCompleteWidget extends ControlUIWidget<SFAutoCompleteWidgetSchema> {
  static readonly KEY = 'autocomplete';

  protected readonly i = signal<NzSafeAny>({});
  protected readonly list = signal<Observable<SFSchemaEnum[]> | null>(null);
  protected readonly typing = signal('');

  private readonly ngModel = viewChild.required(NgModel);

  private readonly filterOption = signal<(input: string, option: SFSchemaEnum) => boolean>(
    (i, o) => (o.label ?? '').toLowerCase().indexOf((i ?? '').toLowerCase()) > -1
  );

  private readonly isAsync = signal(false);

  private readonly fixData = signal<SFSchemaEnum[]>([]);

  updateValue(item: NzAutocompleteOptionComponent): void {
    this.typing.set(item.nzLabel!);
    const data: SFSchemaEnum = item.nzValue;
    this.setValue(data.value);
    this.ui.change?.(item, data);
  }

  _setValue(item: SFSchemaEnum): void {
    let val = item.toString();
    if (typeof item !== 'string') {
      val = item.value;
    }
    this.setValue(val);
  }

  afterViewInit(): void {
    const {
      backfill,
      defaultActiveFirstOption,
      nzWidth,
      filterOption: uiFilterOption,
      asyncData,
      compareWith
    } = this.ui;
    this.i.set({
      backfill: toBool(backfill, false),
      defaultActiveFirstOption: toBool(defaultActiveFirstOption, true),
      width: nzWidth ?? undefined,
      compareWith: compareWith ?? ((o1, o2) => o1 === o2)
    });

    let filterOptionValue = uiFilterOption == null ? true : uiFilterOption;
    if (typeof filterOptionValue === 'boolean') {
      filterOptionValue = (input: string, option: SFSchemaEnum) =>
        option.label.toLowerCase().indexOf((input ?? '').toLowerCase()) > -1;
    }
    this.filterOption.set(filterOptionValue);

    this.isAsync.set(!!asyncData);
    const orgTime = +(this.ui.debounceTime ?? 0);
    const time = Math.max(0, this.isAsync() ? Math.max(50, orgTime) : orgTime);

    this.list.set(
      this.ngModel().valueChanges!.pipe(
        debounceTime(time),
        startWith(''),
        mergeMap(input => (this.isAsync() ? asyncData!(input) : this.filterData(input))),
        map(res => getEnum(res, null, this.schema.readOnly!))
      )
    );
  }

  reset(value: SFValue): void {
    if (this.isAsync()) {
      this.ui.asyncData!(value)
        .pipe(
          takeUntil(this.sfItemComp!.destroy$),
          map(res => getEnum(res, null, this.schema.readOnly!))
        )
        .subscribe(data => {
          this.typing.set(data.find(w => w.value === this.value)?.label ?? '');
        });
      return;
    }

    this.typing.set(value);
    switch (this.ui.type) {
      case 'email':
        this.fixData.set(
          getCopyEnum(this.schema.enum! ?? this.formProperty.options.uiEmailSuffixes, null, this.schema.readOnly!)
        );
        break;
      default:
        this.fixData.set(getCopyEnum(this.schema.enum!, value, this.schema.readOnly!));
        break;
    }
  }

  private filterData(input: string): Observable<SFSchemaEnum[]> | Observable<string[]> {
    switch (this.ui.type) {
      case 'email':
        return this.addEmailSuffix(input);
      default: {
        const filterFn = this.filterOption();
        return of(this.fixData().filter(option => filterFn(input, option)));
      }
    }
  }

  private addEmailSuffix(value: string): Observable<string[]> {
    const res =
      !value || typeof value !== 'string' || value?.indexOf('@') !== -1
        ? []
        : this.fixData().map(domain => `${value}@${domain.label}`);
    return of(res);
  }
}
