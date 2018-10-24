import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';

import { WINDOW } from './win_tokens';

import { DelonLocaleModule } from './locale/locale.module';

// #region import
import { ALAIN_I18N_TOKEN, AlainI18NServiceFake } from './services/i18n/i18n';

import { ModalHelper } from './services/modal/modal.helper';
import { DrawerHelper } from './services/drawer/drawer.helper';
const HELPERS = [ModalHelper, DrawerHelper];

// components
const COMPONENTS = [];

// pipes
import { DatePipe } from './pipes/date/date.pipe';
import { CNCurrencyPipe } from './pipes/currency/cn-currency.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';
import { YNPipe } from './pipes/yn/yn.pipe';
const PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe];

// #endregion

// #region all delon used icons

import { NzIconService } from 'ng-zorro-antd';
import {
  BellOutline,
  FilterFill,
  CaretUpOutline,
  CaretDownOutline,
  DeleteOutline,
  PlusOutline,
  InboxOutline,
} from '@ant-design/icons-angular/icons';
const ICONS = [
  BellOutline,
  FilterFill,
  CaretUpOutline,
  CaretDownOutline,
  DeleteOutline,
  PlusOutline,
  InboxOutline,
];

// #endregion

@NgModule({
  imports: [CommonModule, RouterModule, OverlayModule],
  declarations: [...COMPONENTS, ...PIPES],
  exports: [...COMPONENTS, ...PIPES, DelonLocaleModule],
})
export class AlainThemeModule {
  constructor(iconSrv: NzIconService) {
    iconSrv.addIcon(...ICONS);
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlainThemeModule,
      providers: [
        { provide: WINDOW, useValue: window },
        { provide: ALAIN_I18N_TOKEN, useClass: AlainI18NServiceFake },
        ...HELPERS,
      ],
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: AlainThemeModule,
      providers: [...HELPERS],
    };
  }
}
