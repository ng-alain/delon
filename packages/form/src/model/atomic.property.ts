import { SFValue } from '../interface';
import { FormProperty } from './form.property';

export abstract class AtomicProperty extends FormProperty {
  abstract fallbackValue(): SFValue;

  setValue(value: SFValue, onlySelf: boolean) {
    this._value = value;
    this.updateValueAndValidity(onlySelf, true);
    this.propertyValueChange(this._value);
  }

  resetValue(value: SFValue, onlySelf: boolean) {
    if (value == null) {
      value = this.schema.default !== undefined ? this.schema.default : this.fallbackValue();
    }
    this._value = value;

    this.updateValueAndValidity(onlySelf, true);
    this.propertyValueChange(this._value);

    if (this.widget) this.widget.reset(value);
  }

  _hasValue(): boolean {
    return this.fallbackValue() !== this.value;
  }

  _updateValue() {}
}
