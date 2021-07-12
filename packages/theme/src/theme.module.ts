/* eslint-disable import/order */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// #region import

const HELPERS = [ModalHelper, DrawerHelper];

// pipes
import { BellOutline, DeleteOutline, InboxOutline, PlusOutline } from '@ant-design/icons-angular/icons';

import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconService } from 'ng-zorro-antd/icon';

import { DelonLocaleModule } from './locale/locale.module';
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

// - zorro: https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/icon/icons.ts

import { DrawerHelper } from './services/drawer/drawer.helper';
import { ModalHelper } from './services/modal/modal.helper';
import { ALAIN_SETTING_KEYS } from './services/settings/settings.service';
const ICONS = [BellOutline, DeleteOutline, PlusOutline, InboxOutline];

// #endregion

@NgModule({
  imports: [CommonModule, RouterModule, OverlayModule, NzI18nModule],
  declarations: [...PIPES],
  providers: [
    {
      provide: ALAIN_SETTING_KEYS,
      useValue: {
        layout: 'layout',
        user: 'user',
        app: 'app'
      }
    }
  ],
  exports: [...PIPES, DelonLocaleModule]
})
export class AlainThemeModule {
  constructor(iconSrv: NzIconService) {
    iconSrv.addIcon(...ICONS);
  }

  static forRoot(): ModuleWithProviders<AlainThemeModule> {
    return {
      ngModule: AlainThemeModule,
      providers: [...HELPERS]
    };
  }

  static forChild(): ModuleWithProviders<AlainThemeModule> {
    return {
      ngModule: AlainThemeModule,
      providers: [...HELPERS]
    };
  }
}
