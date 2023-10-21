/* eslint-disable import/order */
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { DelonLocaleModule } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';

const ZORROS = [
  NzButtonModule,
  NzCardModule,
  NzCheckboxModule,
  NzDatePickerModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzInputModule,
  NzInputNumberModule,
  NzModalModule,
  NzRadioModule,
  NzSelectModule,
  NzSwitchModule,
  NzToolTipModule
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
import { BooleanWidget } from './widgets/boolean/boolean.widget';
import { CheckboxWidget } from './widgets/checkbox/checkbox.widget';
import { CustomWidget } from './widgets/custom/custom.widget';
import { DateWidget } from './widgets/date/date.widget';
import { NumberWidget } from './widgets/number/number.widget';
import { NzWidgetRegistry } from './widgets/nz-widget.registry';
import { ObjectWidget } from './widgets/object/object.widget';
import { RadioWidget } from './widgets/radio/radio.widget';
import { SelectWidget } from './widgets/select/select.widget';
import { StringWidget } from './widgets/string/string.widget';
import { TextWidget } from './widgets/text/text.widget';
import { TextareaWidget } from './widgets/textarea/textarea.widget';

const WIDGETS = [
  ObjectWidget,
  ArrayWidget,
  StringWidget,
  NumberWidget,
  DateWidget,
  RadioWidget,
  CheckboxWidget,
  BooleanWidget,
  TextareaWidget,
  SelectWidget,
  CustomWidget,
  TextWidget
];

// #endregion

@NgModule({
  imports: [CommonModule, FormsModule, DelonLocaleModule, ...ZORROS],
  declarations: [...COMPONENTS, ...WIDGETS],
  exports: COMPONENTS
})
export class DelonFormModule {
  static forRoot(): ModuleWithProviders<DelonFormModule> {
    return {
      ngModule: DelonFormModule,
      providers: [
        {
          provide: SchemaValidatorFactory,
          useClass: AjvSchemaValidatorFactory,
          deps: [AlainConfigService, NgZone]
        },
        { provide: WidgetRegistry, useClass: NzWidgetRegistry }
      ]
    };
  }
}
