import { SFValue } from '../interface';
import { FormProperty } from './form.property';

export abstract class AtomicProperty extends FormProperty {
  abstract fallbackValue(): SFValue;

  setValue(value: SFValue, onlySelf: boolean): void {
    this._value = value;
    this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
  }

  resetValue(value: SFValue, onlySelf: boolean): void {
    if (value == null) {
      value = this.schema.default !== undefined ? this.schema.default : this.fallbackValue();
    }
    this._value = value;

    this.updateValueAndValidity({ onlySelf, emitValueEvent: true });

    if (this.widget) this.widget.reset(value);
  }

  _hasValue(): boolean {
    return this.fallbackValue() !== this.value;
  }

  _updateValue(): void {}
}
