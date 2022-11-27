import { SFValue } from '../interface';
import { AtomicProperty } from './atomic.property';

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
