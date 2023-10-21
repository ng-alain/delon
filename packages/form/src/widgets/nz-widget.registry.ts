import { ArrayWidget } from './array/array.widget';
import { BooleanWidget } from './boolean/boolean.widget';
import { CheckboxWidget } from './checkbox/checkbox.widget';
import { CustomWidget } from './custom/custom.widget';
import { DateWidget } from './date/date.widget';
import { NumberWidget } from './number/number.widget';
import { ObjectWidget } from './object/object.widget';
import { RadioWidget } from './radio/radio.widget';
import { SelectWidget } from './select/select.widget';
import { StringWidget } from './string/string.widget';
import { TextWidget } from './text/text.widget';
import { TextareaWidget } from './textarea/textarea.widget';
import { WidgetRegistry } from '../widget.factory';

export class NzWidgetRegistry extends WidgetRegistry {
  constructor() {
    super();

    this.register('object', ObjectWidget);
    this.register('array', ArrayWidget);

    this.register('text', TextWidget);
    this.register('string', StringWidget);
    this.register('number', NumberWidget);
    this.register('integer', NumberWidget);
    this.register('date', DateWidget);
    this.register('radio', RadioWidget);
    this.register('checkbox', CheckboxWidget);
    this.register('boolean', BooleanWidget);
    this.register('textarea', TextareaWidget);
    this.register('select', SelectWidget);
    this.register('custom', CustomWidget);

    this.setDefault(StringWidget);
  }
}
