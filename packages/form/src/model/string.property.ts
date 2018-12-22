import { SFValue } from '../interface';
import { AtomicProperty } from './atomic.property';

export class StringProperty extends AtomicProperty {
  fallbackValue() {
    return null;
  }

  setValue(value: SFValue, onlySelf: boolean) {
    this._value = value == null ? '' : value;
    this.updateValueAndValidity(onlySelf, true);
  }
}
