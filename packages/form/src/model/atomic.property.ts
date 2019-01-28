import { SFValue } from '../interface';
import { FormProperty } from './form.property';

export abstract class AtomicProperty extends FormProperty {
  abstract fallbackValue(): SFValue;

  setValue(value: SFValue, onlySelf: boolean) {
    this._value = value;
    this.updateValueAndValidity(onlySelf, true);
  }

  resetValue(value: SFValue, onlySelf: boolean) {
    if (value == null) {
      if (this.schema.default !== undefined) {
        value = this.schema.default;
      } else {
        value = this.fallbackValue();
      }
    }
    this._value = value;

    this.updateValueAndValidity(onlySelf, true);

    if (this.widget) this.widget.reset(value);
  }

  _hasValue(): boolean {
    return this.fallbackValue() !== this.value;
  }

  _updateValue() {}
}
