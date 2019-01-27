import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonLocaleModule } from '@delon/theme';
import { DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SFFixedDirective } from './sf-fixed.directive';
import { SFItemWrapComponent } from './sf-item-wrap.component';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import { AjvSchemaValidatorFactory, SchemaValidatorFactory } from './validator.factory';
import { SFTemplateDirective } from './widgets/custom/sf-template.directive';

const COMPONENTS = [
  SFComponent,
  SFItemComponent,
  SFItemWrapComponent,
  SFTemplateDirective,
  SFFixedDirective,
];

// #region widgets

import { WidgetRegistry } from './widget.factory';
import { ArrayWidget } from './widgets/array/array.widget';
import { AutoCompleteWidget } from './widgets/autocomplete/autocomplete.widget';
import { BooleanWidget } from './widgets/boolean/boolean.widget';
import { CascaderWidget } from './widgets/cascader/cascader.widget';
import { CheckboxWidget } from './widgets/checkbox/checkbox.widget';
import { CustomWidget } from './widgets/custom/custom.widget';
import { DateWidget } from './widgets/date/date.widget';
import { MentionWidget } from './widgets/mention/mention.widget';
import { NumberWidget } from './widgets/number/number.widget';
import { NzWidgetRegistry } from './widgets/nz-widget.registry';
import { ObjectWidget } from './widgets/object/object.widget';
import { RadioWidget } from './widgets/radio/radio.widget';
import { RateWidget } from './widgets/rate/rate.widget';
import { SelectWidget } from './widgets/select/select.widget';
import { SliderWidget } from './widgets/slider/slider.widget';
import { StringWidget } from './widgets/string/string.widget';
import { TagWidget } from './widgets/tag/tag.widget';
import { TextWidget } from './widgets/text/text.widget';
import { TextareaWidget } from './widgets/textarea/textarea.widget';
import { TimeWidget } from './widgets/time/time.widget';
import { TransferWidget } from './widgets/transfer/transfer.widget';
import { TreeSelectWidget } from './widgets/tree-select/tree-select.widget';
import { UploadWidget } from './widgets/upload/upload.widget';

const WIDGETS = [
  ObjectWidget,
  ArrayWidget,
  StringWidget,
  NumberWidget,
  DateWidget,
  TimeWidget,
  RadioWidget,
  CheckboxWidget,
  BooleanWidget,
  TextareaWidget,
  SelectWidget,
  TreeSelectWidget,
  TagWidget,
  UploadWidget,
  TransferWidget,
  SliderWidget,
  RateWidget,
  AutoCompleteWidget,
  CascaderWidget,
  MentionWidget,
  CustomWidget,
  TextWidget,
];

// #endregion

@NgModule({
  imports: [CommonModule, FormsModule, DelonUtilModule, DelonLocaleModule, NgZorroAntdModule],
  declarations: [...COMPONENTS, ...WIDGETS],
  entryComponents: [...WIDGETS],
  exports: [...COMPONENTS],
})
export class DelonFormModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DelonFormModule,
      providers: [
        {
          provide: SchemaValidatorFactory,
          useClass: AjvSchemaValidatorFactory,
        },
        { provide: WidgetRegistry, useClass: NzWidgetRegistry },
      ],
    };
  }
}
