import { AtomicProperty } from './atomic.property';
import { SFValue } from '../interface';

export class BooleanProperty extends AtomicProperty {
  fallbackValue(): SFValue {
    return null;
  }
}
