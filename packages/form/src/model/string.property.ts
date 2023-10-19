import { AtomicProperty } from './atomic.property';
import { SFValue } from '../interface';

export class StringProperty extends AtomicProperty {
  fallbackValue(): null {
    return null;
  }

  setValue(value: SFValue, onlySelf: boolean): void {
    this._value = value == null ? '' : value;
    this.cd(onlySelf);
    this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
  }
}
