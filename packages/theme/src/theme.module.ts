import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DelonLocaleModule } from './locale/locale.module';

// #region import

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
}
