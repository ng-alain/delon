import { AtomicProperty } from './atomic.property';

export class BooleanProperty extends AtomicProperty {
  fallbackValue(): any {
    return null;
  }
}
