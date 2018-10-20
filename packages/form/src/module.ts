import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DelonUtilModule } from '@delon/util';
import { DelonLocaleModule } from '@delon/theme';

import { DelonFormConfig } from './config';
import {
  SchemaValidatorFactory,
  AjvSchemaValidatorFactory,
} from './validator.factory';
import { SFComponent } from './sf.component';
import { SFItemComponent } from './sf-item.component';
import { SFItemWrapComponent } from './sf-item-wrap.component';
import { SFTemplateDirective } from './widgets/custom/sf-template.directive';
import { SFFixedDirective } from './sf-fixed.directive';

const COMPONENTS = [
  SFComponent,
  SFItemComponent,
  SFItemWrapComponent,
  SFTemplateDirective,
  SFFixedDirective,
];

// #region widgets

import { WidgetRegistry } from './widget.factory';
import { NzWidgetRegistry } from './widgets/nz-widget.registry';
import { ObjectWidget } from './widgets/object/object.widget';
import { ArrayWidget } from './widgets/array/array.widget';
import { StringWidget } from './widgets/string/string.widget';
import { NumberWidget } from './widgets/number/number.widget';
import { DateWidget } from './widgets/date/date.widget';
import { TimeWidget } from './widgets/time/time.widget';
import { RadioWidget } from './widgets/radio/radio.widget';
import { CheckboxWidget } from './widgets/checkbox/checkbox.widget';
import { BooleanWidget } from './widgets/boolean/boolean.widget';
import { TextareaWidget } from './widgets/textarea/textarea.widget';
import { SelectWidget } from './widgets/select/select.widget';
import { TreeSelectWidget } from './widgets/tree-select/tree-select.widget';
import { TagWidget } from './widgets/tag/tag.widget';
import { UploadWidget } from './widgets/upload/upload.widget';
import { TransferWidget } from './widgets/transfer/transfer.widget';
import { SliderWidget } from './widgets/slider/slider.widget';
import { CustomWidget } from './widgets/custom/custom.widget';
import { RateWidget } from './widgets/rate/rate.widget';
import { AutoCompleteWidget } from './widgets/autocomplete/autocomplete.widget';
import { CascaderWidget } from './widgets/cascader/cascader.widget';
import { MentionWidget } from './widgets/mention/mention.widget';
import { TextWidget } from './widgets/text/text.widget';

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
        DelonFormConfig,
        {
          provide: SchemaValidatorFactory,
          useClass: AjvSchemaValidatorFactory,
        },
        { provide: WidgetRegistry, useClass: NzWidgetRegistry },
      ],
    };
  }
}
