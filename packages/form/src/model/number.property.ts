import { AtomicProperty } from './atomic.property';

export class NumberProperty extends AtomicProperty {

    fallbackValue() {
        return null;
    }

    setValue(value: any, onlySelf: boolean) {
        if (typeof value === 'string') {
            if (value.length) {
                value = value.indexOf('.') > -1 ? parseFloat(value) : parseInt(value, 10);
            } else {
                value = null;
            }
        }
        this._value = value;
        this.updateValueAndValidity(onlySelf, true);
    }
}
