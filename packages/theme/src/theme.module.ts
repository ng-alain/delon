import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WINDOW } from './win_tokens';

import { DelonLocaleModule } from './locale/locale.module';

// #region import
import { AlainI18NServiceFake, ALAIN_I18N_TOKEN } from './services/i18n/i18n';

import { DrawerHelper } from './services/drawer/drawer.helper';
import { ModalHelper } from './services/modal/modal.helper';
const HELPERS = [ModalHelper, DrawerHelper];

// components
const COMPONENTS = [];

// pipes
import { CNCurrencyPipe } from './pipes/currency/cn-currency.pipe';
import { DatePipe } from './pipes/date/date.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';
import { HTMLPipe } from './pipes/safe/html.pipe';
import { URLPipe } from './pipes/safe/url.pipe';
import { YNPipe } from './pipes/yn/yn.pipe';
import { I18nPipe } from './services/i18n/i18n.pipe';
const PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe, I18nPipe, HTMLPipe, URLPipe];

// #endregion

// #region all delon used icons

import {
  BellOutline,
  CaretDownOutline,
  CaretUpOutline,
  DeleteOutline,
  FilterFill,
  InboxOutline,
  PlusOutline,
} from '@ant-design/icons-angular/icons';
import { NzIconService } from 'ng-zorro-antd';
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
