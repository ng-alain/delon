import { WidgetRegistry } from '../widget.factory';

import { ArrayWidget } from './array/array.widget';
import { AutoCompleteWidget } from './autocomplete/autocomplete.widget';
import { BooleanWidget } from './boolean/boolean.widget';
import { CascaderWidget } from './cascader/cascader.widget';
import { CheckboxWidget } from './checkbox/checkbox.widget';
import { CustomWidget } from './custom/custom.widget';
import { DateWidget } from './date/date.widget';
import { MentionWidget } from './mention/mention.widget';
import { NumberWidget } from './number/number.widget';
import { ObjectWidget } from './object/object.widget';
import { RadioWidget } from './radio/radio.widget';
import { RateWidget } from './rate/rate.widget';
import { SelectWidget } from './select/select.widget';
import { SliderWidget } from './slider/slider.widget';
import { StringWidget } from './string/string.widget';
import { TagWidget } from './tag/tag.widget';
import { TextWidget } from './text/text.widget';
import { TextareaWidget } from './textarea/textarea.widget';
import { TimeWidget } from './time/time.widget';
import { TransferWidget } from './transfer/transfer.widget';
import { TreeSelectWidget } from './tree-select/tree-select.widget';
import { UploadWidget } from './upload/upload.widget';

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
    this.register('time', TimeWidget);
    this.register('radio', RadioWidget);
    this.register('checkbox', CheckboxWidget);
    this.register('boolean', BooleanWidget);
    this.register('textarea', TextareaWidget);
    this.register('select', SelectWidget);
    this.register('tree-select', TreeSelectWidget);
    this.register('tag', TagWidget);
    this.register('upload', UploadWidget);
    this.register('transfer', TransferWidget);
    this.register('slider', SliderWidget);
    this.register('rate', RateWidget);
    this.register('autocomplete', AutoCompleteWidget);
    this.register('cascader', CascaderWidget);
    this.register('mention', MentionWidget);
    this.register('custom', CustomWidget);

    this.setDefault(StringWidget);
  }
}
