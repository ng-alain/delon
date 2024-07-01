import { SFValue } from '../interface';
import { AtomicProperty } from './atomic.property';

export class BooleanProperty extends AtomicProperty {
  fallbackValue(): SFValue {
    return null;
  }
}
