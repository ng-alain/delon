import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WINDOW } from './win_tokens';
import zh_CN from '../locales/zh-CN';
import { DELON_I18N } from './locale/tokens';

// region: import
import { ALAIN_I18N_TOKEN, AlainI18NServiceFake } from './services/i18n/i18n';

import { ModalHelper } from './services/modal/modal.helper';
const HELPERS = [ModalHelper];

// components
const COMPONENTS = [];

// pipes
import { DatePipe } from './pipes/date/date.pipe';
import { CNCurrencyPipe } from './pipes/currency/cn-currency.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';
import { YNPipe } from './pipes/yn/yn.pipe';
const PIPES = [DatePipe, CNCurrencyPipe, KeysPipe, YNPipe];

// endregion

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...COMPONENTS, ...PIPES],
  exports: [...COMPONENTS, ...PIPES],
})
export class AlainThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlainThemeModule,
      providers: [
        { provide: DELON_I18N, useValue: zh_CN },
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
