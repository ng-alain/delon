import { AtomicProperty } from './atomic.property';
import { SFValue } from '../interface';

export class NumberProperty extends AtomicProperty {
  fallbackValue(): null {
    return null;
  }

  setValue(value: SFValue, onlySelf: boolean): void {
    if (typeof value === 'string') {
      if (value.length) {
        value = value.indexOf('.') > -1 ? parseFloat(value) : parseInt(value, 10);
      } else {
        value = undefined;
      }
    }
    this._value = value;
    this.cd(onlySelf);
    this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
  }
}
