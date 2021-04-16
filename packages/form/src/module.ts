import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonLocaleModule } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzUploadModule } from 'ng-zorro-antd/upload';

const ZORROS = [
  NzAutocompleteModule,
  NzButtonModule,
  NzCardModule,
  NzCascaderModule,
  NzCheckboxModule,
  NzDatePickerModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzInputModule,
  NzInputNumberModule,
  NzMentionModule,
  NzModalModule,
  NzRadioModule,
  NzRateModule,
  NzSelectModule,
  NzSliderModule,
  NzSwitchModule,
  NzTagModule,
  NzTimePickerModule,
  NzToolTipModule,
  NzTransferModule,
  NzTreeSelectModule,
  NzUploadModule,
];

import { SFFixedDirective } from './sf-fixed.directive';
import { SFItemWrapComponent } from './sf-item-wrap.component';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import { AjvSchemaValidatorFactory, SchemaValidatorFactory } from './validator.factory';
import { SFTemplateDirective } from './widgets/custom/sf-template.directive';

const COMPONENTS = [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective];

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
  imports: [CommonModule, FormsModule, DelonLocaleModule, ...ZORROS],
  declarations: [...COMPONENTS, ...WIDGETS],
  exports: COMPONENTS,
  entryComponents: WIDGETS,
})
export class DelonFormModule {
  static forRoot(): ModuleWithProviders<DelonFormModule> {
    return {
      ngModule: DelonFormModule,
      providers: [
        {
          provide: SchemaValidatorFactory,
          useClass: AjvSchemaValidatorFactory,
          deps: [AlainConfigService, NgZone],
        },
        { provide: WidgetRegistry, useClass: NzWidgetRegistry },
      ],
    };
  }
}
