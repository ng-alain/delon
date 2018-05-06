import { AtomicProperty } from './atomic.property';

export class StringProperty extends AtomicProperty {
  fallbackValue() {
    return '';
  }
}
