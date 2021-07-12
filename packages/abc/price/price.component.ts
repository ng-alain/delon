import { ChangeDetectionStrategy, Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BooleanInput, InputBoolean, toNumber } from '@delon/util/decorator';
import type { NzSizeLDSType, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'price',
  exportAs: 'price',
  template: `
    <nz-input-number
      [(ngModel)]="value"
      (ngModelChange)="handlValue($event)"
      [nzSize]="size"
      [nzMin]="min"
      [nzMax]="max"
      [nzPlaceHolder]="placeHolder"
      [nzStep]="step"
      [nzId]="nzId"
      [nzDisabled]="disabled"
      [nzAutoFocus]="autoFocus"
    ></nz-input-number>
  `,
  host: {
    '[class.price]': `true`,
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PriceComponent),
      multi: true,
    },
  ],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PriceComponent implements ControlValueAccessor {
  static ngAcceptInputType_disabled: BooleanInput;
  static ngAcceptInputType_autoFocus: BooleanInput;

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};
  value: number | null = null;

  @Input() nzId: string | null = null;
  @Input() size: NzSizeLDSType = 'default';
  @Input() min: number = -Infinity;
  @Input() max: number = Infinity;
  @Input() placeHolder = '';
  @Input() step = 1;
  @Input() @InputBoolean() disabled = false;
  @Input() @InputBoolean() autoFocus = false;

  handlValue(val: number): void {
    this.onChange(val);
  }

  writeValue(value: number): void {
    this.value = toNumber(value, null);
  }
  registerOnChange(fn: OnChangeType): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: OnTouchedType): void {
    this.onTouched = fn;
  }
}
